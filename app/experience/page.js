import PageBanner from '@/components/PageBanner';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Reveal from '@/components/Reveal';
import { profile } from '@/data/profile';
import { Download } from '@/components/Icons';

const page = profile.pages.experience;

export const metadata = {
  title: page.title,
  description: page.intro,
};

export default function ExperiencePage() {
  return (
    <>
      <PageBanner title={page.title} position="20% 60%" />
      <div className="container-site py-14 sm:py-16">
        <Reveal>
          <p className="prose-justify">{page.intro}</p>
        </Reveal>
        <h2 className="title mt-12">Professional Experience</h2>
        <div className="mt-4">
          <Experience />
        </div>
        <Reveal className="mt-6 border-t border-line pt-8">
          <a href={profile.resume} download={profile.resumeFileName} className="btn bg-brand text-white hover:bg-brand-dark">
            <Download className="h-4 w-4" />
            Download full CV (PDF)
          </a>
        </Reveal>
      </div>
      <Contact />
    </>
  );
}
