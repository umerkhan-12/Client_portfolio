import { keyResults } from '@/data/profile';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

// Light-blue band with a bulleted list (like an "Awards" list).
export default function KeyResults() {
  return (
    <section id="results" aria-labelledby="results-title" className="bg-brand-tint py-14 sm:py-16">
      <Reveal className="container-site">
        <SectionHeading id="results-title">Key Results</SectionHeading>
        <ul className="square-list mt-4">
          {keyResults.map((r) => (
            <li key={r.text}>
              {r.text}, <span className="text-body">{r.org}</span>, <span className="whitespace-nowrap">{r.when}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
