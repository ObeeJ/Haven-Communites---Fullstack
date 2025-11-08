import { FC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';

const BlogDetail: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const breadcrumbItems = [
    {
      label: 'Home',
      onClick: () => navigate('/'),
    },
    {
      label: 'Blog',
      onClick: () => navigate('/blog'),
    },
    {
      label: slug || 'Blog Post',
      isActive: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbItems} className="mb-6" />
      </div>
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold">Blog Post: {slug}</h1>
        <p className="text-gray-600 mt-4">Blog post content coming soon</p>
      </div>
    </div>
  );
};

export default BlogDetail;
