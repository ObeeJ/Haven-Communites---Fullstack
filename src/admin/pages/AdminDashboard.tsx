import { FC } from 'react';
import { useAuthContext } from '../../context/AuthContext';

const AdminDashboard: FC = () => {
  const { user, timeUntilExpiry } = useAuthContext();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Properties</h3>
          <p className="text-3xl font-bold">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Blog Posts</h3>
          <p className="text-3xl font-bold">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Contacts</h3>
          <p className="text-3xl font-bold">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Newsletter</h3>
          <p className="text-3xl font-bold">0</p>
        </div>
      </div>

      {user && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Account Info</h2>
          <p className="text-gray-600">
            Logged in as: <span className="font-medium">{user.email}</span>
          </p>
          {timeUntilExpiry && (
            <p className="text-gray-600 mt-2">
              Session expires in: <span className="font-medium">{timeUntilExpiry} seconds</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
