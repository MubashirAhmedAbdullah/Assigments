import React from 'react';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined, CreditCardOutlined, RocketOutlined, UndoOutlined, PhoneOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h3 className="text-2xl font-bold text-white mb-4">Online Shop</h3>
            <p>Leading the way in e-commerce solutions with a wide range of products and services. Your satisfaction is our priority.</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="list-none">
              <li className="mb-2"><a href="#" className="hover:text-white">Home</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Products</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">User Products</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Cart</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Login</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h3 className="text-xl font-semibold text-white mb-4">Features</h3>
            <ul className="list-none">
              <li className="mb-2 flex items-center"><CreditCardOutlined className="mr-2" /> Secure Payments</li>
              <li className="mb-2 flex items-center"><RocketOutlined className="mr-2" /> Fast Shipping</li>
              <li className="mb-2 flex items-center"><UndoOutlined className="mr-2" /> Easy Returns</li>
              <li className="mb-2 flex items-center"><PhoneOutlined className="mr-2" /> 24/7 Support</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><FacebookOutlined /></a>
              <a href="#" className="text-gray-400 hover:text-white"><TwitterOutlined /></a>
              <a href="#" className="text-gray-400 hover:text-white"><InstagramOutlined /></a>
              <a href="#" className="text-gray-400 hover:text-white"><LinkedinOutlined /></a>
            </div>
          </div>
        </div>
        <div className="text-center border-t border-gray-700 pt-4">
          <p>&copy; {new Date().getFullYear()} E-Commerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
