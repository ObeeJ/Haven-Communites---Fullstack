import { useState } from 'react';
import { CONTACT_INFO } from '../../constants';

interface BrochureDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyName?: string;
}

export function BrochureDownloadModal({ isOpen, onClose, propertyName = "Property Brochure" }: BrochureDownloadModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store email for newsletter
      localStorage.setItem('brochureEmail', email);
      localStorage.setItem('brochureDownloaded', 'true');
      
      setIsSuccess(true);
      
      // Trigger download after 1 second
      setTimeout(() => {
        // Create a dummy PDF download link
        const link = document.createElement('a');
        link.href = '#'; // Replace with actual brochure URL
        link.download = `${propertyName.replace(/\s+/g, '_')}_Brochure.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Close modal after download
        setTimeout(() => {
          onClose();
          setIsSuccess(false);
          setEmail('');
        }, 1500);
      }, 1000);
      
    } catch (error) {
      console.error('Failed to submit email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
        >
          ×
        </button>
        
        {!isSuccess ? (
          <>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Download Brochure</h2>
            <p className="text-gray-600 mb-4">
              Enter your email to receive the {propertyName} brochure
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || !email}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-full font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Download Brochure'}
              </button>
            </form>
            
            <p className="text-xs text-gray-500 mt-3 text-center">
              We care about your data in our{' '}
              <span className="underline cursor-pointer hover:text-blue-600">
                privacy policy
              </span>
              .
            </p>
          </>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Success!</h3>
            <p className="text-gray-600">Your download will start shortly...</p>
          </div>
        )}
      </div>
    </div>
  );
}