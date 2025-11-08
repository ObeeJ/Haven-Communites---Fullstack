import { useState, useEffect } from 'react';
import Desktop from './imports/Desktop-34-7755';
import { MobileWithMenu } from './components/MobileWithMenu';
import { EmailModal } from './components/EmailModal';
import { About } from './components/About';
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
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy'>('home');

  useEffect(() => {
    // Check screen size
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Only show modal on home page
    if (currentPage !== 'home') return;
    
    // Check if user has already subscribed
    const hasSubscribed = localStorage.getItem('hasSubscribed');
    
    if (!hasSubscribed) {
      // Show modal after 10 seconds
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [currentPage]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const navigateTo = (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {currentPage === 'home' && (
        isMobile ? <MobileWithMenu onNavigate={navigateTo} /> : <Desktop onNavigate={navigateTo} />
      )}
      {currentPage === 'about' && <About onNavigate={navigateTo} />}
      {currentPage === 'contact' && <Contact onNavigate={navigateTo} />}
      {currentPage === 'projects' && <Projects onNavigate={navigateTo} />}
      {currentPage === 'projectDetail' && <ProjectDetail onNavigate={navigateTo} />}
      {currentPage === 'blog' && <Blog onNavigate={navigateTo} />}
      {currentPage === 'blogDetail' && <BlogDetail onNavigate={navigateTo} />}
      {currentPage === 'privacyPolicy' && <PrivacyPolicy onNavigate={navigateTo} />}
      {currentPage === 'termsOfService' && <TermsOfService onNavigate={navigateTo} />}
      {currentPage === 'cookiesPolicy' && <CookiesPolicy onNavigate={navigateTo} />}
      <EmailModal isOpen={showModal} onClose={handleCloseModal} />
    </>
  );
}
