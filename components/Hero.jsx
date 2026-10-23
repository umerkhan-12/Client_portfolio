import Image from 'next/image';
import { profile } from '@/data/profile';
import { ChevronDown } from './Icons';

// Full-bleed photo hero with a centered headline and accent bar.
export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-[calc(100svh-4rem)] items-center justify-center overflow-clip">
      <Image
        src={profile.heroImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[35%_50%]"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[rgba(20,24,32,0.55)]" />

      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h1
          id="hero-title"
          className="rise font-display text-[2.6rem] font-light leading-[1.22] tracking-[-0.01em] text-white sm:text-6xl sm:leading-[1.2]"
        >
          {profile.headline}
        </h1>
        <div aria-hidden="true" className="rise mx-auto mt-7 h-2.5 w-32 bg-brand" style={{ '--rise-delay': '150ms' }} />
        <p className="rise mt-7 text-lg tracking-wide text-white/85" style={{ '--rise-delay': '250ms' }}>
          {profile.name} · {profile.title}
        </p>
      </div>

      <a
        href="#intro"
        className="nudge absolute bottom-6 left-1/2 -ml-6 grid h-12 w-12 place-items-center rounded-full text-white/80 hover:text-white"
        aria-label="Scroll to content"
      >
        <ChevronDown className="h-8 w-8" strokeWidth={2} />
      </a>
    </section>
  );
}
