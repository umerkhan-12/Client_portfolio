import Link from 'next/link';
import { profile } from '@/data/profile';
import ContactForm from './ContactForm';
import { LinkedIn } from './Icons';

// Blue contact band shown at the bottom of every page.
// On the home page it also includes the message form.
export default function Contact({ withForm = false }) {
  return (
    <section id="contact" aria-label="Contact" className="bg-brand text-white">
      <div className={`container-site py-14 sm:py-16 ${withForm ? 'grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16' : ''}`}>
        <div className="flex flex-col">
          <a
            href={`mailto:${profile.email}`}
            className="self-start text-[1.35rem] font-bold underline decoration-2 underline-offset-4 hover:decoration-white/60 sm:text-2xl"
          >
            {profile.email}
          </a>
          <address className="mt-6 not-italic leading-relaxed text-white/90">
            {profile.location}
            <br />
            <a href={profile.phoneHref} className="hover:underline">
              {profile.phone}
            </a>
          </address>
          {!withForm ? (
            <p className="mt-6 text-white/90">
              Prefer a form?{' '}
              <Link href="/#contact" className="font-semibold underline underline-offset-4">
                Send a message
              </Link>
            </p>
          ) : null}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (opens in a new tab)"
            className="mt-8 grid h-11 w-11 place-items-center self-start rounded-md border-2 border-white/90 hover:bg-white hover:text-brand"
          >
            <LinkedIn className="h-5 w-5" />
          </a>
        </div>

        {withForm ? <ContactForm email={profile.email} /> : null}
      </div>
    </section>
  );
}
