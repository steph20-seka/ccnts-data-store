import { Hero } from '../components/home/Hero';
import { Expertises } from '../components/home/Expertises';
import { MapOfTheDay } from '../components/home/MapOfTheDay';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { ProjectsCards } from '../components/home/ProjectsCards';
import { NewsSection } from '../components/home/NewsSection';
import { Testimonials } from '../components/home/Testimonials';
import { CTASection } from '../components/home/CTASection';
import { SEOHead } from '../components/SEOHead';

export function HomePage() {
  return (
    <>
      <SEOHead pageKey="home" />
      <Hero />
      <Expertises />
      <MapOfTheDay />
      <WhyChooseUs />
      <ProjectsCards />
      <NewsSection />
      <Testimonials />
      <CTASection />
    </>
  );
}

export default HomePage;