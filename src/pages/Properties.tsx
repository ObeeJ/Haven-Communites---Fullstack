import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import PropertiesPage from '../imports/Desktop-34-38105';

const Properties: FC = () => {
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
        navigate('/projects');
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

  return <PropertiesPage 
    onNavigate={handleNavigate}
    onPreviousPage={() => console.log('Previous page')}
    onNextPage={() => console.log('Next page')}
  />;
};

export default Properties;
