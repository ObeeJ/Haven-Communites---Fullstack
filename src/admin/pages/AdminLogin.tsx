import { FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AdminLoginSchema } from '../../utils/validators';
import { useAuthContext } from '../../context/AuthContext';
import { Loader2 } from 'lucide-react';
import type { z } from 'zod';

type LoginFormData = z.infer<typeof AdminLoginSchema>;

const AdminLogin: FC = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated, isLoading, error } = useAuthContext();
  const [isMobile, setIsMobile] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(AdminLoginSchema),
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin/dashboard');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const onSubmit = async (data: LoginFormData) => {
    await login(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className={`${isMobile ? 'w-full mx-4' : 'w-full max-w-md'} bg-white rounded-lg shadow-xl p-8`}>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Login</h1>
        <p className="text-gray-600 mb-6">Sign in to your account</p>

        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              {...register('email')}
              type="email"
              placeholder="admin@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              {...register('password')}
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting || isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-2 rounded transition-colors flex items-center justify-center gap-2"
          >
            {isSubmitting || isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
