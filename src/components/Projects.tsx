import MobileProjects from '../imports/Mobile-34-35713';
import DesktopProjects from '../imports/Desktop-34-38105';

interface ProjectsProps {
  onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void;
}

export function Projects({ onNavigate }: ProjectsProps) {
  const handlePagination = {
    onPrevious: () => console.log('Previous page'),
    onNext: () => console.log('Next page'),
  };

  return (
    <>
      {/* Mobile version - shown below 768px */}
      <div className="md:hidden">
        <MobileProjects onNavigate={onNavigate} />
      </div>
      
      {/* Desktop version - shown at 768px and above */}
      <div className="hidden md:block">
        <DesktopProjects 
          onNavigate={onNavigate} 
          onPreviousPage={handlePagination.onPrevious}
          onNextPage={handlePagination.onNext}
        />
      </div>
    </>
  );
}
