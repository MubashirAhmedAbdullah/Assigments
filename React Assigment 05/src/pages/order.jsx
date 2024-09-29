import React from 'react';
import { CreditCardOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import Footer from '../components/footer';

const OrderPage = () => {
  return (
    <div>
      <div className=" mx-auto px-8 py-8 bg-gray-100">
        <h1 className="text-3xl font-semibold mb-6 text-gray-800">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Billing, Shipping, and Payment Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Billing Details</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700">Full Name</label>
                  <div className="flex items-center border rounded-lg">
                    <UserOutlined className="text-gray-500 p-2" />
                    <input type="text" className="w-full p-2 border-0 focus:ring-0" placeholder="Enter your full name" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email Address</label>
                  <div className="flex items-center border rounded-lg">
                    <UserOutlined className="text-gray-500 p-2" />
                    <input type="email" className="w-full p-2 border-0 focus:ring-0" placeholder="Enter your email address" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Phone Number</label>
                  <div className="flex items-center border rounded-lg">
                    <UserOutlined className="text-gray-500 p-2" />
                    <input type="tel" className="w-full p-2 border-0 focus:ring-0" placeholder="Enter your phone number" />
                  </div>
                </div>
              </form>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shipping Address</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700">Address</label>
                  <div className="flex items-center border rounded-lg">
                    <HomeOutlined className="text-gray-500 p-2" />
                    <input type="text" className="w-full p-2 border-0 focus:ring-0" placeholder="Enter your address" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">City</label>
                  <div className="flex items-center border rounded-lg">
                    <HomeOutlined className="text-gray-500 p-2" />
                    <input type="text" className="w-full p-2 border-0 focus:ring-0" placeholder="Enter your city" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Postal Code</label>
                  <div className="flex items-center border rounded-lg">
                    <HomeOutlined className="text-gray-500 p-2" />
                    <input type="text" className="w-full p-2 border-0 focus:ring-0" placeholder="Enter your postal code" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Country</label>
                  <div className="flex items-center border rounded-lg">
                    <HomeOutlined className="text-gray-500 p-2" />
                    <input type="text" className="w-full p-2 border-0 focus:ring-0" placeholder="Enter your country" />
                  </div>
                </div>
              </form>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Method</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700">Card Number</label>
                  <div className="flex items-center border rounded-lg">
                    <CreditCardOutlined className="text-gray-500 p-2" />
                    <input type="text" className="w-full p-2 border-0 focus:ring-0" placeholder="Enter your card number" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Expiry Date</label>
                  <div className="flex items-center border rounded-lg">
                    <CreditCardOutlined className="text-gray-500 p-2" />
                    <input type="text" className="w-full p-2 border-0 focus:ring-0" placeholder="MM/YY" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">CVV</label>
                  <div className="flex items-center border rounded-lg">
                    <CreditCardOutlined className="text-gray-500 p-2" />
                    <input type="text" className="w-full p-2 border-0 focus:ring-0" placeholder="Enter your CVV" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h2>
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-800 font-semibold">$199.98</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-800 font-semibold">$10.00</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-700">Total</p>
                <p className="text-gray-800 font-semibold">$209.98</p>
              </div>
            </div>
            <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none transition duration-200">
              Place Order
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderPage;
