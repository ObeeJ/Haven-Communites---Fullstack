import { FC } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { LogOut, Menu } from 'lucide-react';
import { useAuthContext } from '../../context/AuthContext';
import { useState } from 'react';

const AdminLayout: FC = () => {
  const { logout } = useAuthContext();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const menuItems = [
    { label: 'Dashboard', path: '/admin/dashboard' },
    { label: 'Properties', path: '/admin/properties' },
    { label: 'Blog', path: '/admin/blog' },
    { label: 'Contacts', path: '/admin/contacts' },
    { label: 'Newsletter', path: '/admin/newsletter' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-gray-900 text-white transition-all duration-300 fixed h-full md:static`}
      >
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-xl font-bold">Admin</h1>
        </div>
        <nav className="mt-8">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block px-4 py-3 hover:bg-gray-800 transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              {sidebarOpen ? item.label : item.label.charAt(0)}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-4 left-4 right-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded transition-colors"
          >
            <LogOut size={20} />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-0 md:ml-0">
        <header className="bg-white shadow">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden"
            >
              <Menu size={24} />
            </button>
            <h2 className="text-2xl font-bold text-gray-800">Admin Panel</h2>
            <div></div>
          </div>
        </header>
        <section className="p-6">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default AdminLayout;
