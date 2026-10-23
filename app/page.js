import Hero from '@/components/Hero';
import About from '@/components/About';
import KeyResults from '@/components/KeyResults';
import Profiles from '@/components/Profiles';
import Contact from '@/components/Contact';
import { education, experience, profile } from '@/data/profile';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.title,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  address: { '@type': 'PostalAddress', addressRegion: 'MO', addressCountry: 'US' },
  worksFor: { '@type': 'Organization', name: experience[0].company },
  alumniOf: education.map((e) => ({ '@type': 'CollegeOrUniversity', name: e.school })),
  sameAs: [profile.linkedin],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c') }}
      />
      <Hero />
      <About />
      <KeyResults />
      <Profiles />
      <Contact withForm />
    </>
  );
}
