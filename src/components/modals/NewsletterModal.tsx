import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NewsletterSchema } from '../../utils/validators';
import { apiService } from '../../services/api';
import { toast } from 'sonner';
import { X, Loader2 } from 'lucide-react';
import { usePreferences } from '../../context/PreferencesContext';
import type { z } from 'zod';

type NewsletterFormData = z.infer<typeof NewsletterSchema>;

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Newsletter Modal Component
 * Displays newsletter signup form with email collection
 * Integrates with Brevo backend for newsletter management
 */
export const NewsletterModal: FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  const { setNewsletterPromptShown } = usePreferences();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(NewsletterSchema),
  });

  if (!isOpen) return null;

  const onSubmit = async (data: NewsletterFormData) => {
    setSubmitError(null);
    try {
      await apiService.subscribeNewsletter(data);
      toast.success('Welcome to our newsletter!');
      setNewsletterPromptShown(true);
      reset();
      onClose();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to subscribe';
      setSubmitError(message);
      toast.error(message);
    }
  };

  const handleClose = () => {
    setNewsletterPromptShown(true);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">Join Our Newsletter</h2>
        <p className="text-gray-600 mb-6">
          Get updates on new properties, blog posts, and exclusive offers.
        </p>

        {submitError && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm">
            {submitError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input
              {...register('email')}
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-2 rounded transition-colors flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Subscribing...
              </>
            ) : (
              'Subscribe'
            )}
          </button>
        </form>

        <button
          onClick={handleClose}
          className="w-full mt-3 px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
        >
          Maybe Later
        </button>
      </div>
    </div>
  );
};
