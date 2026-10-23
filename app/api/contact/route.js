import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const LIMITS = { name: 100, email: 200, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Best-effort rate limit (per server instance): 5 messages per IP per 10 minutes.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 500) {
    for (const [key, times] of hits) {
      if (now - times[times.length - 1] > WINDOW_MS) hits.delete(key);
    }
  }
  return recent.length > MAX_PER_WINDOW;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}

const fail = (error, status) => NextResponse.json({ error }, { status });

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return fail('Invalid request.', 400);
  }

  // Honeypot: real visitors never fill this in. Pretend success for bots.
  if (typeof body?.company === 'string' && body.company.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  const name = String(body?.name ?? '').trim();
  const email = String(body?.email ?? '').trim();
  const message = String(body?.message ?? '').trim();

  if (!name || !email || !message) return fail('Please fill in your name, email and message.', 400);
  if (name.length > LIMITS.name || email.length > LIMITS.email || message.length > LIMITS.message) {
    return fail('One of the fields is too long.', 400);
  }
  if (!EMAIL_RE.test(email)) return fail('Please enter a valid email address.', 400);
  if (message.length < 10) return fail('Please write a slightly longer message.', 400);

  const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
  if (isRateLimited(ip)) return fail('Too many messages. Please try again in a few minutes.', 429);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set.');
    return fail('The contact form isn’t set up yet. Please email directly instead.', 503);
  }

  const to = process.env.CONTACT_TO_EMAIL || 'uneebahm@gmail.com';
  const from = process.env.CONTACT_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';
  const safeName = name.replace(/[\r\n]+/g, ' ');

  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;font-size:15px;line-height:1.55;color:#0e1726">
      <h2 style="margin:0 0 16px;font-size:18px">New message from your portfolio</h2>
      <p style="margin:0 0 6px"><strong>Name:</strong> ${escapeHtml(safeName)}</p>
      <p style="margin:0 0 16px"><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p style="margin:0 0 6px"><strong>Message:</strong></p>
      <p style="margin:0;white-space:pre-wrap">${escapeHtml(message)}</p>
    </div>`;
  const text = `New message from your portfolio\n\nName: ${safeName}\nEmail: ${email}\n\n${message}`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Portfolio message from ${safeName.slice(0, 80)}`,
      html,
      text,
    });
    if (error) {
      console.error('[contact] Resend rejected the email:', error);
      return fail('Your message couldn’t be sent. Please email directly instead.', 502);
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] Unexpected error:', err);
    return fail('Your message couldn’t be sent. Please email directly instead.', 500);
  }
}
