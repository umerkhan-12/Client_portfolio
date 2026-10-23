import { certifications, education } from '@/data/profile';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Education() {
  return (
    <div className="space-y-12">
      <Reveal as="section" id="education" aria-labelledby="education-title">
        <SectionHeading id="education-title">Education</SectionHeading>
        <ul className="square-list mt-4">
          {education.map((e) => (
            <li key={e.degree}>
              <span className="font-semibold">{e.degree}</span>
              <br />
              <span className="italic text-body">
                {e.school}, {e.location}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal as="section" id="certifications" aria-labelledby="certifications-title">
        <SectionHeading id="certifications-title">Certifications</SectionHeading>
        <ul className="square-list mt-4">
          {certifications.map((c) => (
            <li key={c.name}>
              {c.issuer} – {c.name}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
