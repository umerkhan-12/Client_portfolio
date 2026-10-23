import PageBanner from '@/components/PageBanner';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Reveal from '@/components/Reveal';
import { profile } from '@/data/profile';

const page = profile.pages.skills;

export const metadata = {
  title: page.title,
  description: page.intro,
};

export default function SkillsPage() {
  return (
    <>
      <PageBanner title={page.title} position="85% 60%" />
      <div className="container-site py-14 sm:py-16">
        <Reveal>
          <p className="prose-justify">{page.intro}</p>
        </Reveal>
        <div className="mt-12">
          <Skills />
        </div>
      </div>
      <div className="bg-brand-tint py-14 sm:py-16">
        <div className="container-site">
          <Education />
        </div>
      </div>
      <Contact />
    </>
  );
}
