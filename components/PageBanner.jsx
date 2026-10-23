import Image from 'next/image';
import { profile } from '@/data/profile';

// Shorter photo banner used at the top of inner pages.
export default function PageBanner({ title, position = '60% 55%' }) {
  return (
    <section aria-labelledby="page-title" className="relative isolate flex min-h-[15rem] items-center justify-center overflow-clip sm:min-h-[19rem]">
      <Image
        src={profile.heroImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
        style={{ objectPosition: position }}
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[rgba(20,24,32,0.6)]" />
      <div className="px-6 py-16 text-center">
        <h1 id="page-title" className="rise font-display text-[2.4rem] font-light leading-tight text-white sm:text-[3.25rem]">
          {title}
        </h1>
        <div aria-hidden="true" className="rise mx-auto mt-5 h-2 w-24 bg-brand" style={{ '--rise-delay': '120ms' }} />
      </div>
    </section>
  );
}
