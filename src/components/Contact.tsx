import { useState } from 'react';
import MobileContact from '../imports/Mobile-34-19558';
import DesktopContact from '../imports/Desktop-34-20344';
import { ContactModal } from './ContactModal';

interface ContactProps {
  onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void;
}

export function Contact({ onNavigate }: ContactProps) {
  const [showContactModal, setShowContactModal] = useState(false);

  const handleBookNow = () => {
    setShowContactModal(true);
  };

  return (
    <>
      {/* Mobile version - shown below 768px */}
      <div className="md:hidden">
        <MobileContact onNavigate={onNavigate} onBookNow={handleBookNow} />
      </div>
      
      {/* Desktop version - shown at 768px and above */}
      <div className="hidden md:block">
        <DesktopContact onNavigate={onNavigate} onBookNow={handleBookNow} />
      </div>

      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </>
  );
}
