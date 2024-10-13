import React, { useState } from 'react';
import ProfileInfo from '../components/profileInfo';
import AccountSettings from '../components/accountSetting';
import OrderHistory from '../components/orderHistory';
import Sidebar from '../components/sideBar';


const Profile = () => {
  const [activeSection, setActiveSection] = useState('Profile Information');

  const renderSection = () => {
    switch (activeSection) {
      case 'Profile Information':
        return <ProfileInfo />;
      case 'Account Settings':
        return <AccountSettings />;
      case 'Order History':
        return <OrderHistory />;
      default:
        return <ProfileInfo />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        {/* Main Content */}
        <div className="w-full lg:w-3/4 lg:pl-8">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default Profile;