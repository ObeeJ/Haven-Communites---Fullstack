import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';

const Privacy: FC = () => {
  const navigate = useNavigate();

  const breadcrumbItems = [
    {
      label: 'Home',
      onClick: () => navigate('/'),
    },
    {
      label: 'Privacy Policy',
      isActive: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbItems} className="mb-6" />
      </div>
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="text-gray-600 mt-4">Your privacy is important to us</p>
      </div>
    </div>
  );
};

export default Privacy;
