import React from 'react';

const Admin: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Admin Portal</h1>
        <p className="text-gray-600 mb-8">Manage product prices, view quote requests, and update site settings.</p>
        <div className="space-y-4">
          <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Manage Products</button>
          <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">View Quotes</button>
          <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Site Settings</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
