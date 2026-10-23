import Link from 'next/link';
import { companies, profile } from '@/data/profile';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <>
      {/* Title-card bullets right under the hero */}
      <section id="intro" className="container-site pt-14 sm:pt-16">
        <Reveal as="ul" className="square-list">
          {profile.roles.map((r) => (
            <li key={r.text}>
              {r.text}
              {r.link ? (
                <Link href={r.link.href} className="link">
                  {r.link.label}
                </Link>
              ) : null}
            </li>
          ))}
        </Reveal>
      </section>

      <section id="about" aria-labelledby="about-title" className="container-site pt-12 sm:pt-14">
        <Reveal>
          <SectionHeading id="about-title">About</SectionHeading>
          <p className="prose-justify mt-4">{profile.about}</p>
        </Reveal>
      </section>

      {/* Company strip (plain wordmarks, in place of press logos) */}
      <section aria-label="Companies Uneeb has worked with" className="container-site py-12 sm:py-14">
        <Reveal as="ul" className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:justify-between">
          {companies.map((c) => (
            <li key={c} className="text-[1.15rem] font-semibold tracking-[0.06em] text-muted/90 sm:text-[1.3rem]">
              {c}
            </li>
          ))}
        </Reveal>
      </section>

      <section id="biography" aria-labelledby="bio-title" className="container-site pb-16 sm:pb-20">
        <Reveal>
          <SectionHeading id="bio-title">Biography</SectionHeading>
          <div className="mt-4 space-y-4">
            {profile.biography.map((p) => (
              <p key={p.slice(0, 30)} className="prose-justify">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
