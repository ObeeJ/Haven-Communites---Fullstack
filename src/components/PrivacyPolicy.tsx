import MobilePrivacyPolicy from '../imports/Mobile-47-39877';
import DesktopPrivacyPolicy from '../imports/Desktop-47-41877';

interface PrivacyPolicyProps {
  onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy') => void;
}

export function PrivacyPolicy({ onNavigate }: PrivacyPolicyProps) {
  return (
    <>
      {/* Mobile version - shown below 768px */}
      <div className="md:hidden w-full">
        <MobilePrivacyPolicy onNavigate={onNavigate} />
      </div>
      
      {/* Desktop version - shown at 768px and above */}
      <div className="hidden md:block w-full">
        <DesktopPrivacyPolicy onNavigate={onNavigate} />
      </div>
    </>
  );
}
