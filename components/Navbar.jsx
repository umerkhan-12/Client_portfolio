'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks, profile } from '@/data/profile';
import { Close, Download, Menu } from './Icons';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the drawer on navigation and with Escape; lock page scroll while it's open
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? 'shadow-[0_1px_4px_rgba(0,0,0,0.12)]' : 'shadow-[0_1px_0_rgba(0,0,0,0.06)]'
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-[90rem] items-center gap-3 px-3 sm:px-6">
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full text-ink hover:bg-black/5 lg:hidden"
          aria-expanded={open}
          aria-controls="site-drawer"
          aria-label="Open navigation"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>

        <Link href="/" className="truncate text-[1.35rem] font-semibold tracking-[0.04em] text-ink sm:text-[1.5rem]">
          {profile.name}
        </Link>

        <ul className="ml-auto hidden h-full items-stretch lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href} className="flex">
                <Link
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`relative flex items-center px-4 text-[15px] transition-colors ${
                    active ? 'font-semibold text-ink' : 'text-nav hover:text-ink'
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-4 bottom-0 h-[3px] rounded-t bg-brand transition-opacity ${
                      active ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <a
          href={profile.resume}
          download={profile.resumeFileName}
          className="ml-auto grid h-11 w-11 place-items-center rounded-full text-muted hover:bg-black/5 hover:text-ink lg:ml-2"
          aria-label="Download CV (PDF)"
          title="Download CV"
        >
          <Download className="h-5 w-5" />
        </a>
      </nav>

      {open ? (
        <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Site navigation" id="site-drawer">
          <button
            type="button"
            className="absolute inset-0 h-full w-full cursor-default bg-black/40"
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
          />
          <div className="drawer-enter relative flex h-full w-[min(20rem,85vw)] flex-col bg-white shadow-xl">
            <div className="flex h-16 items-center gap-3 border-b border-line px-3">
              <button
                type="button"
                className="grid h-11 w-11 place-items-center rounded-full text-ink hover:bg-black/5"
                aria-label="Close navigation"
                onClick={() => setOpen(false)}
              >
                <Close className="h-6 w-6" />
              </button>
              <span className="truncate text-lg font-semibold tracking-[0.04em]">{profile.name}</span>
            </div>
            <ul className="flex-1 py-2">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? 'page' : undefined}
                      className={`block border-l-4 px-6 py-3 text-base ${
                        active ? 'border-brand bg-brand-tint font-semibold text-ink' : 'border-transparent text-body hover:bg-black/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="border-t border-line p-4">
              <a href={profile.resume} download={profile.resumeFileName} className="btn w-full bg-brand text-white hover:bg-brand-dark">
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
