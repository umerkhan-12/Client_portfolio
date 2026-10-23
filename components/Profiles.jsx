import { profile } from '@/data/profile';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { FileText, LinkedIn, Mail, Phone } from './Icons';

// Centered "Profiles" row of link tiles.
export default function Profiles() {
  const items = [
    { label: 'LinkedIn', href: profile.linkedin, Icon: LinkedIn, external: true, tone: 'bg-[#0a66c2] text-white' },
    { label: 'CV (PDF)', href: profile.resume, Icon: FileText, download: profile.resumeFileName, tone: 'bg-brand text-white' },
    { label: 'Email', href: `mailto:${profile.email}`, Icon: Mail, tone: 'bg-white text-brand ring-1 ring-brand/30' },
    { label: 'Phone', href: profile.phoneHref, Icon: Phone, tone: 'bg-white text-brand ring-1 ring-brand/30' },
  ];

  return (
    <section aria-labelledby="profiles-title" className="container-site py-12 sm:py-14">
      <Reveal className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-14">
        <SectionHeading id="profiles-title" center className="sm:text-left">
          Profiles
        </SectionHeading>
        <ul className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {items.map(({ label, href, Icon, external, download, tone }) => (
            <li key={label}>
              <a
                href={href}
                className="group flex flex-col items-center gap-2 text-sm text-body hover:text-brand"
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                {...(download ? { download } : {})}
              >
                <span className={`grid h-14 w-14 place-items-center rounded-lg shadow-sm transition-transform group-hover:-translate-y-0.5 ${tone}`}>
                  <Icon className="h-7 w-7" />
                </span>
                {label}
                {external ? <span className="sr-only">(opens in a new tab)</span> : null}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
