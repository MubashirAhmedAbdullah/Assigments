

import React from 'react';
import {
  UserOutlined,
  SettingOutlined,
  HistoryOutlined,
} from '@ant-design/icons';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const sections = [
    { name: 'Profile Information', icon: <UserOutlined /> },
    { name: 'Account Settings', icon: <SettingOutlined /> },
    { name: 'Order History', icon: <HistoryOutlined /> },
  ];

  return (
    <div className="hidden lg:block w-1/4 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6">My Account</h2>
      <ul>
        {sections.map((section) => (
          <li
            key={section.name}
            className={`flex items-center p-2 mb-2 cursor-pointer rounded ${
              activeSection === section.name
                ? 'bg-blue-500 text-white'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveSection(section.name)}
          >
            <span className="text-lg mr-2">{section.icon}</span>
            <span>{section.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
