import MobileTermsOfService from '../imports/Mobile-47-56469';
import DesktopTermsOfService from '../imports/Desktop-47-59002';

interface TermsOfServiceProps {
  onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService') => void;
}

export function TermsOfService({ onNavigate }: TermsOfServiceProps) {
  return (
    <>
      {/* Mobile version - shown below 768px */}
      <div className="md:hidden w-full">
        <MobileTermsOfService onNavigate={onNavigate} />
      </div>
      
      {/* Desktop version - shown at 768px and above */}
      <div className="hidden md:block w-full">
        <DesktopTermsOfService onNavigate={onNavigate} />
      </div>
    </>
  );
}
