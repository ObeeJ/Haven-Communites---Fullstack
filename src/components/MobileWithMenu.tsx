import { useState, useEffect } from 'react';
import Mobile from '../imports/Mobile-34-4856';
import SlideOutMenu from '../imports/SlideOutMenu-34-4923';

interface MobileWithMenuProps {
  onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void;
}

export function MobileWithMenu({ onNavigate }: MobileWithMenuProps) {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showMenu]);

  const handleToggleMenu = (e: React.MouseEvent) => {
    // Check if the click is on the hamburger menu button
    const target = e.target as HTMLElement;
    const isMenuButton = target.closest('[data-name="_Nav menu button"]');
    
    if (isMenuButton) {
      e.stopPropagation();
      setShowMenu(true);
    }
  };

  const handleCloseMenu = (e: React.MouseEvent) => {
    // Close if clicking on backdrop or close button
    const target = e.target as HTMLElement;
    const isBackdrop = target.getAttribute('data-name') === 'Slide out menu';
    const isCloseButton = target.closest('[data-name="Button close X"]');
    
    if (isBackdrop || isCloseButton) {
      setShowMenu(false);
    }
  };

  const handleNavigate = (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => {
    setShowMenu(false);
    onNavigate?.(page);
  };

  return (
    <>
      <div onClick={handleToggleMenu}>
        <Mobile onNavigate={onNavigate} />
      </div>
      {showMenu && (
        <div 
          className="fixed inset-0 z-50 animate-in fade-in duration-200" 
          onClick={handleCloseMenu}
        >
          <div className="animate-in slide-in-from-left duration-300">
            <SlideOutMenu onNavigate={handleNavigate} />
          </div>
        </div>
      )}
    </>
  );
}