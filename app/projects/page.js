import PageBanner from '@/components/PageBanner';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Reveal from '@/components/Reveal';
import { profile } from '@/data/profile';

const page = profile.pages.projects;

export const metadata = {
  title: page.title,
  description: page.intro,
};

export default function ProjectsPage() {
  return (
    <>
      <PageBanner title={page.title} position="50% 40%" />
      <div className="container-site pb-12 pt-14 sm:pt-16">
        <Reveal>
          <p className="prose-justify">{page.intro}</p>
        </Reveal>
      </div>
      <Projects />
      <Contact />
    </>
  );
}
