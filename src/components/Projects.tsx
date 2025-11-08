import MobileProjects from '../imports/Mobile-34-35713';
import DesktopProjects from '../imports/Desktop-34-38105';

interface ProjectsProps {
  onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void;
}

export function Projects({ onNavigate }: ProjectsProps) {
  return (
    <>
      {/* Mobile version - shown below 768px */}
      <div className="md:hidden">
        <MobileProjects onNavigate={onNavigate} />
      </div>
      
      {/* Desktop version - shown at 768px and above */}
      <div className="hidden md:block">
        <DesktopProjects onNavigate={onNavigate} />
      </div>
    </>
  );
}
