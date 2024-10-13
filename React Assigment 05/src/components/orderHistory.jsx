import React from 'react';
import { RightOutlined } from '@ant-design/icons';

const OrderHistory = () => {
  // Sample order data
  const orders = [
    {
      id: '123-4567890-1234567',
      date: 'March 10, 2024',
      status: 'Delivered',
      total: '$99.99',
    },
    {
      id: '234-5678901-2345678',
      date: 'February 25, 2024',
      status: 'Shipped',
      total: '$49.99',
    },
    {
      id: '345-6789012-3456789',
      date: 'January 15, 2024',
      status: 'Processing',
      total: '$149.99',
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order History</h2>
      {orders.map((order) => (
        <div
          key={order.id}
          className="flex justify-between items-center border-b pb-4 mb-4"
        >
          <div>
            <p className="text-gray-700">Order ID: {order.id}</p>
            <p className="text-gray-600">Date: {order.date}</p>
            <p className="text-gray-600">Status: {order.status}</p>
          </div>
          <div className="flex items-center">
            <p className="text-gray-800 font-semibold mr-4">{order.total}</p>
            {/* <button className="text-blue-600 hover:text-blue-800 focus:outline-none flex items-center">
              View Details <RightOutlined className="ml-1" />
            </button> */}
          </div>
        </div>
      ))}
      {orders.length === 0 && (
        <p className="text-gray-600">You have no orders.</p>
      )}
    </div>
  );
};

export default OrderHistory;
