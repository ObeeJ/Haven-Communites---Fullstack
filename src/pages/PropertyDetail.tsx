import { FC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropertyDetailPage from '../imports/Desktop-34-45968';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CONTACT_INFO, EMAIL_TEMPLATES } from '../constants';

const PropertyDetail: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const handleNavigate = (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => {
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

  const breadcrumbItems = [
    {
      label: 'Home',
      onClick: () => navigate('/'),
    },
    {
      label: 'Properties',
      onClick: () => navigate('/properties'),
    },
    {
      label: slug || 'Property Detail',
      isActive: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbItems} className="mb-6" />
      </div>
      <PropertyDetailPage 
        onNavigate={handleNavigate}
        onReadMore={() => {
          // Scroll to more details or expand content
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
        }}
        onDownloadBrochure={() => {
          const propertyName = slug || 'Property';
          const subject = EMAIL_TEMPLATES.brochure;
          const body = `Please send me the brochure for ${propertyName}.`;
          window.open(`mailto:${CONTACT_INFO.email}?subject=${subject}&body=${encodeURIComponent(body)}`);
        }}
      />
    </div>
  );
};

export default PropertyDetail;
