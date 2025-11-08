import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Desktop from '../imports/Desktop-34-7755';
import { MobileWithMenu } from '../components/MobileWithMenu';

export function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNavigate = (page: string) => {
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
      default:
        if (page.startsWith('project-') || page.includes('/projects/')) {
          const id = page.replace('project-', '');
          navigate(`/properties/${id}`);
        } else if (page.startsWith('blog-') || page.includes('/blog/')) {
          const id = page.replace('blog-', '');
          navigate(`/blog/${id}`);
        } else {
          navigate('/');
        }
    }
  };

  return isMobile ? <MobileWithMenu onNavigate={handleNavigate} /> : <Desktop onNavigate={handleNavigate} />;
}