import MobileBlog from '../imports/Mobile-34-48192';
import DesktopBlog from '../imports/Desktop-34-49489';

interface BlogProps {
  onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void;
}

export function Blog({ onNavigate }: BlogProps) {
  const handleBlogClick = () => {
    onNavigate?.('blogDetail');
  };

  const handleTabs = {
    onViewAll: () => console.log('View all posts'),
    onLand: () => console.log('Land category'),
    onHomes: () => console.log('Homes category'),
    onConstruction: () => console.log('Construction category'),
    onInvestment: () => console.log('Investment category'),
  };

  const handlePagination = {
    onPrevious: () => console.log('Previous page'),
    onNext: () => console.log('Next page'),
    onPageClick: (page: number) => console.log('Go to page:', page),
  };

  const handleSubscribe = () => {
    console.log('Newsletter subscription');
  };

  return (
    <>
      {/* Mobile version - shown below 768px */}
      <div className="md:hidden w-full">
        <MobileBlog onNavigate={onNavigate} onBlogClick={handleBlogClick} />
      </div>
      
      {/* Desktop version - shown at 768px and above */}
      <div className="hidden md:block w-full">
        <DesktopBlog 
          onNavigate={onNavigate} 
          onBlogClick={handleBlogClick}
          onViewAll={handleTabs.onViewAll}
          onLand={handleTabs.onLand}
          onHomes={handleTabs.onHomes}
          onConstruction={handleTabs.onConstruction}
          onInvestment={handleTabs.onInvestment}
          onSubscribe={handleSubscribe}
          onPrevious={handlePagination.onPrevious}
          onNext={handlePagination.onNext}
          onPageClick={handlePagination.onPageClick}
        />
      </div>
    </>
  );
}
