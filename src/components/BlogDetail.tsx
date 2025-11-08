import MobileBlogDetail from '../imports/Mobile-47-16423';
import DesktopBlogDetail from '../imports/Desktop-47-17873';

interface BlogDetailProps {
  onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void;
}

export function BlogDetail({ onNavigate }: BlogDetailProps) {
  return (
    <>
      {/* Mobile version - shown below 768px */}
      <div className="md:hidden w-full">
        <MobileBlogDetail onNavigate={onNavigate} />
      </div>
      
      {/* Desktop version - shown at 768px and above */}
      <div className="hidden md:block w-full">
        <DesktopBlogDetail onNavigate={onNavigate} />
      </div>
    </>
  );
}