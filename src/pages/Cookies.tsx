import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';

const Cookies: FC = () => {
  const navigate = useNavigate();

  const breadcrumbItems = [
    {
      label: 'Home',
      onClick: () => navigate('/'),
    },
    {
      label: 'Cookies Policy',
      isActive: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbItems} className="mb-6" />
      </div>
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold">Cookies Policy</h1>
        <p className="text-gray-600 mt-4">Information about how we use cookies</p>
      </div>
    </div>
  );
};

export default Cookies;
