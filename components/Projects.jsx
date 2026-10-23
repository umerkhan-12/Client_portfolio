import { focusAreas, projects } from '@/data/profile';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Projects() {
  return (
    <>
      <div className="container-site space-y-14 pb-14">
        {projects.map((project, i) => (
          <Reveal key={project.title}>
            <ProjectCard project={project} id={`project-${i}`} />
          </Reveal>
        ))}
      </div>

      {/* Stacked focus areas, alternating with a light band like the reference */}
      <section aria-labelledby="focus-title" className="bg-brand-tint py-14 sm:py-16">
        <div className="container-site">
          <Reveal>
            <SectionHeading id="focus-title">Areas of Focus</SectionHeading>
          </Reveal>
          <div className="mt-8 grid gap-10 md:grid-cols-3 md:gap-8">
            {focusAreas.map((area, i) => (
              <Reveal key={area.title} delay={i * 80}>
                <h3 className="font-display text-xl text-brand">{area.title}</h3>
                <div aria-hidden="true" className="mt-3 h-1 w-12 bg-brand" />
                <p className="mt-4 text-[1rem] leading-[1.7] text-ink">{area.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
