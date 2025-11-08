import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactForm } from '../components/forms/ContactForm';

const Contact: FC = () => {
  const navigate = useNavigate();

  const breadcrumbItems = [
    {
      label: 'Home',
      onClick: () => navigate('/'),
    },
    {
      label: 'Contact',
      isActive: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbItems} className="mb-6" />
      </div>
      <div className="container mx-auto max-w-6xl px-4 py-20">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-12">Get in touch with our team</p>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
