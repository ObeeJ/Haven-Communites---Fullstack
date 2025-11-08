import MobileProjectDetail from '../imports/Mobile-34-42992';
import DesktopProjectDetail from '../imports/Desktop-34-45968';

interface ProjectDetailProps {
  onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void;
}

export function ProjectDetail({ onNavigate }: ProjectDetailProps) {
  return (
    <>
      {/* Mobile version - shown below 768px */}
      <div className="md:hidden">
        <MobileProjectDetail onNavigate={onNavigate} />
      </div>
      
      {/* Desktop version - shown at 768px and above */}
      <div className="hidden md:block">
        <DesktopProjectDetail onNavigate={onNavigate} />
      </div>
    </>
  );
}