import MobileCookiesPolicy from '../imports/Mobile-47-61236';
import DesktopCookiesPolicy from '../imports/Desktop-47-62829';

interface CookiesPolicyProps {
  onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void;
}

export function CookiesPolicy({ onNavigate }: CookiesPolicyProps) {
  return (
    <>
      {/* Mobile version - shown below 768px */}
      <div className="md:hidden w-full">
        <MobileCookiesPolicy onNavigate={onNavigate} />
      </div>
      
      {/* Desktop version - shown at 768px and above */}
      <div className="hidden md:block w-full">
        <DesktopCookiesPolicy onNavigate={onNavigate} />
      </div>
    </>
  );
}
