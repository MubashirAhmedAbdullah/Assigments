import React from 'react';
import { LockOutlined } from '@ant-design/icons';

const AccountSettings = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Account Settings</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Current Password</label>
          <div className="flex items-center border rounded-lg">
            <LockOutlined className="text-gray-500 p-2" />
            <input
              type="password"
              className="w-full p-2 border-0 focus:ring-0"
              placeholder="Enter current password"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">New Password</label>
          <div className="flex items-center border rounded-lg">
            <LockOutlined className="text-gray-500 p-2" />
            <input
              type="password"
              className="w-full p-2 border-0 focus:ring-0"
              placeholder="Enter new password"
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Confirm New Password</label>
          <div className="flex items-center border rounded-lg">
            <LockOutlined className="text-gray-500 p-2" />
            <input
              type="password"
              className="w-full p-2 border-0 focus:ring-0"
              placeholder="Confirm new password"
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none transition duration-200"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default AccountSettings;
