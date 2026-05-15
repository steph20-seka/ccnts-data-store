import { HeroAcademy } from '../components/academy/HeroAcademy';
import { FreeCoursesSection } from '../components/academy/FreeCoursesSection';
import { YouTubeVideosSection } from '../components/academy/YouTubeVideosSection';
import { CourseCategoriesSection } from '../components/academy/CourseCategoriesSection';
import { AcademyCTA } from '../components/academy/AcademyCTA';
import { SEOHead } from '../components/SEOHead';

export function AcademyPage() {
  return (
    <>
      <SEOHead pageKey="academy" />
      <HeroAcademy />
      <FreeCoursesSection />
      <YouTubeVideosSection />
      <CourseCategoriesSection />
      <AcademyCTA />
    </>
  );
}

export default AcademyPage;