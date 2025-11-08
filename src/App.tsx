import { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { EmailModal } from './components/EmailModal';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';
import { ProjectDetail } from './components/ProjectDetail';
import { Blog } from './components/Blog';
import { BlogDetail } from './components/BlogDetail';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { CookiesPolicy } from './components/CookiesPolicy';

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Only show modal on home page
    if (location.pathname !== '/') return;

    // Check if user has already subscribed
    const hasSubscribed = localStorage.getItem('hasSubscribed');

    if (!hasSubscribed) {
      // Show modal after 10 seconds
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleNavigate = useCallback((page: string) => {
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
        // Handle project and blog detail navigation
        if (page.startsWith('project-')) {
          const projectId = page.replace('project-', '');
          navigate(`/projects/${projectId}`);
        } else if (page.startsWith('blog-')) {
          const blogId = page.replace('blog-', '');
          navigate(`/blog/${blogId}`);
        } else {
          navigate('/');
        }
    }
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About onNavigate={handleNavigate} />} />
        <Route path="/contact" element={<Contact onNavigate={handleNavigate} />} />
        <Route path="/projects" element={<Projects onNavigate={handleNavigate} />} />
        <Route path="/projects/:id" element={<ProjectDetail onNavigate={handleNavigate} />} />
        <Route path="/blog" element={<Blog onNavigate={handleNavigate} />} />
        <Route path="/blog/:id" element={<BlogDetail onNavigate={handleNavigate} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy onNavigate={handleNavigate} />} />
        <Route path="/terms-of-service" element={<TermsOfService onNavigate={handleNavigate} />} />
        <Route path="/cookies-policy" element={<CookiesPolicy onNavigate={handleNavigate} />} />
      </Routes>
      <EmailModal isOpen={showModal} onClose={handleCloseModal} />
    </>
  );
}