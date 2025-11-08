import { FC, ReactNode } from 'react';
import { WHATSAPP_LINKS } from '../../constants';

interface WhatsAppButtonProps {
  message?: string;
  propertyName?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: ReactNode;
}

export const WhatsAppButton: FC<WhatsAppButtonProps> = ({
  message,
  propertyName,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
}) => {
  const handleClick = () => {
    let link = WHATSAPP_LINKS.sales;
    
    if (propertyName) {
      link = WHATSAPP_LINKS.property(propertyName);
    } else if (message) {
      link = `${WHATSAPP_LINKS.sales}&text=${encodeURIComponent(message)}`;
    }
    
    window.open(link, '_blank');
  };

  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors cursor-pointer';
  
  const variantClasses = {
    primary: 'bg-green-600 text-white hover:bg-green-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    outline: 'border-2 border-current text-current hover:bg-current hover:text-white',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
};