import { experience } from '@/data/profile';
import Reveal from './Reveal';

// Stacked, single-column list of roles (styled like a publications list).
export default function Experience() {
  return (
    <ol className="divide-y divide-line">
      {experience.map((job) => {
        const meta = [job.team, job.division].filter(Boolean).join(' · ');
        return (
          <Reveal as="li" key={`${job.company}-${job.start}`} className="py-9 first:pt-2">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-[1.2rem] font-bold text-ink">
                {job.role}
                {job.current ? (
                  <span className="ml-3 align-middle text-[12px] font-semibold uppercase tracking-wider text-brand">[Current]</span>
                ) : null}
              </h3>
              <p className="text-[15px] text-muted">
                <time>{job.start}</time> – <time>{job.end}</time>
              </p>
            </div>
            <p className="mt-1 italic text-body">
              {job.company}
              {meta ? ` · ${meta}` : ''}
              {job.location ? ` · ${job.location}` : ''}
            </p>

            {job.tags.length ? (
              <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[14px] font-semibold text-brand">
                {job.tags.map((t) => (
                  <span key={t}>[{t}]</span>
                ))}
              </p>
            ) : null}

            <ul className="square-list mt-4 text-[1rem]">
              {job.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </Reveal>
        );
      })}
    </ol>
  );
}
