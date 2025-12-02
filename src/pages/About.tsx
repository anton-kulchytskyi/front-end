import { PageHeader } from '@components/common';

import {
  AboutFeaturesSection,
  AboutHeroSection,
  AboutHowItWorksSection,
  AboutStatsSection,
  AboutTechStackSection,
} from '@/components/blocks/about';
import { aboutPageContent } from '@/data';

const About = () => {
  const { header, hero, statistics, features, howItWorks, techStack } =
    aboutPageContent;

  return (
    <>
      <PageHeader
        title={header.title}
        subtitle={header.subtitle}
      />

      <AboutHeroSection
        title={hero.title}
        paragraphs={hero.paragraphs}
      />
      <AboutStatsSection
        title={statistics.title}
        items={statistics.items}
      />
      <AboutFeaturesSection
        title={features.title}
        items={features.items}
      />
      <AboutHowItWorksSection
        title={howItWorks.title}
        steps={howItWorks.steps}
      />
      <AboutTechStackSection techStack={techStack} />
    </>
  );
};

About.displayName = 'About';

export default About;
