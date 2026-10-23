import { skillGroups } from '@/data/profile';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

// Bulleted skill lists, flowing into columns on wider screens.
export default function Skills() {
  return (
    <div className="space-y-12">
      {skillGroups.map((group) => (
        <Reveal as="section" key={group.id} id={group.id} aria-labelledby={`${group.id}-title`}>
          <SectionHeading id={`${group.id}-title`}>{group.title}</SectionHeading>
          <ul className="square-list mt-4 gap-x-10 sm:columns-2 lg:columns-3 [&>li]:break-inside-avoid">
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}
