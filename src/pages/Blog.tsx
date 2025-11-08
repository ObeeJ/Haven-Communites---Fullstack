import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogPage from '../imports/Desktop-34-49489';
import { WHATSAPP_LINKS, CONTACT_INFO } from '../constants';

const Blog: FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (page: 'home' | 'about' | 'contact' | 'projects' | 'blog' | 'blogDetail' | 'projectDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => {
    switch (page) {
      case 'home':
        navigate('/');
        break;
      case 'about':
        navigate('/about');
        break;
      case 'contact':
        navigate('/contact');
        break;
      case 'projects':
        navigate('/properties');
        break;
      case 'blog':
        navigate('/blog');
        break;
      case 'privacyPolicy':
        navigate('/privacy-policy');
        break;
      case 'termsOfService':
        navigate('/terms-of-service');
        break;
      case 'cookiesPolicy':
        navigate('/cookies-policy');
        break;
      case 'blogDetail':
        navigate('/blog/1');
        break;
      case 'projectDetail':
        navigate('/projects/1');
        break;
      default:
        navigate('/');
    }
  };

  const handleSubscribe = () => {
    const subject = 'Newsletter Subscription';
    const body = 'I would like to subscribe to the Haven Communities newsletter.';
    window.open(`mailto:${CONTACT_INFO.newsletterEmail}?subject=${subject}&body=${encodeURIComponent(body)}`);
  };

  const handlePagination = {
    onPrevious: () => console.log('Previous page'),
    onNext: () => console.log('Next page'),
    onPageClick: (page: number) => console.log('Go to page:', page),
  };

  // Category filter handlers
  const handleCategoryFilter = (category: string) => {
    // TODO: Implement actual category filtering
    // For now, could fetch filtered blog posts or update local state
    console.debug(`Filtering by category: ${category}`);
  };

  const handleTabs = {
    onViewAll: () => handleCategoryFilter('all'),
    onLand: () => handleCategoryFilter('land'),
    onHomes: () => handleCategoryFilter('homes'),
    onConstruction: () => handleCategoryFilter('construction'),
    onInvestment: () => handleCategoryFilter('investment'),
  };

  return (
    <BlogPage
      onNavigate={handleNavigate}
      onSubscribe={handleSubscribe}
      {...handlePagination}
      {...handleTabs}
    />
  );
};

export default Blog;
