'use client';

import { useState } from 'react';
import { Check } from './Icons';

const EMPTY = { name: '', email: '', message: '', company: '' };

const inputClass =
  'mt-1.5 w-full rounded border border-line bg-white px-3.5 py-2.5 text-[15px] text-ink placeholder:text-muted/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20';

export default function ContactForm({ email }) {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [error, setError] = useState('');

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Please try again.');
      setStatus('sent');
      setForm(EMPTY);
    } catch (err) {
      setStatus('error');
      setError(err.message);
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-lg bg-white p-7 text-ink shadow-lg sm:p-9" role="status">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-brand text-white">
          <Check className="h-6 w-6" strokeWidth={2.25} />
        </span>
        <h2 className="mt-5 font-display text-2xl text-brand">Message sent</h2>
        <p className="mt-2 text-body">Thanks for reaching out. I’ll reply to the email you provided soon.</p>
        <button type="button" className="btn mt-6 border border-brand text-brand hover:bg-brand-tint" onClick={() => setStatus('idle')}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative rounded-lg bg-white p-6 text-ink shadow-lg sm:p-8" aria-labelledby="form-title">
      <h2 id="form-title" className="font-display text-2xl text-brand">
        Send a message
      </h2>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-body">
          Name
          <input name="name" type="text" required maxLength={100} autoComplete="name" value={form.name} onChange={update} className={inputClass} />
        </label>
        <label className="block text-sm font-semibold text-body">
          Email
          <input name="email" type="email" required maxLength={200} autoComplete="email" value={form.email} onChange={update} className={inputClass} />
        </label>
      </div>

      <label className="mt-4 block text-sm font-semibold text-body">
        Message
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          value={form.message}
          onChange={update}
          className={`${inputClass} resize-y`}
        />
      </label>

      {/* Honeypot: hidden from people, tempting for bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Company
          <input name="company" type="text" tabIndex={-1} autoComplete="off" value={form.company} onChange={update} />
        </label>
      </div>

      <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          Or email{' '}
          <a href={`mailto:${email}`} className="link text-brand">
            {email}
          </a>
        </p>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn bg-brand text-white hover:bg-brand-dark disabled:cursor-wait disabled:opacity-70"
        >
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
      </div>

      <p aria-live="polite" className="mt-3 min-h-[1.25rem] text-sm font-semibold text-[#b3261e]">
        {status === 'error' ? error : ''}
      </p>
    </form>
  );
}
