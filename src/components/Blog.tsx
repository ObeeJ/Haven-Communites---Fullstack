import MobileBlog from '../imports/Mobile-34-48192';
import DesktopBlog from '../imports/Desktop-34-49489';

interface BlogProps {
  onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void;
}

export function Blog({ onNavigate }: BlogProps) {
  const handleBlogClick = () => {
    onNavigate?.('blogDetail');
  };

  return (
    <>
      {/* Mobile version - shown below 768px */}
      <div className="md:hidden w-full">
        <MobileBlog onNavigate={onNavigate} onBlogClick={handleBlogClick} />
      </div>
      
      {/* Desktop version - shown at 768px and above */}
      <div className="hidden md:block w-full">
        <DesktopBlog onNavigate={onNavigate} onBlogClick={handleBlogClick} />
      </div>
    </>
  );
}
