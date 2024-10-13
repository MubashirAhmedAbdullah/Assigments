import React from 'react';
import { DeleteOutlined } from '@ant-design/icons';


const CartItems = () => {
    return (
        <div className="flex flex-col md:flex-row items-center bg-white p-4 rounded-lg shadow-md mb-4">
          {/* Product Image */}
          <img
            className="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
            src="https://via.placeholder.com/150"
            alt="Product"
          />
          
          {/* Product Details */}
          <div className="flex-grow">
            <h2 className="text-lg font-semibold text-gray-800">Product Name</h2>
            <p className="text-gray-600 mt-2">This is a short description of the product highlighting its features and benefits.</p>
            <p className="mt-4 text-xl font-bold text-blue-600">$99.99</p>
          </div>
          
          {/* Quantity Selector and Remove Button */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {/* Quantity Selector */}
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button className="px-3 py-1 text-gray-600 focus:outline-none">-</button>
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-12 text-center border-0 focus:ring-0"
              />
              <button className="px-3 py-1 text-gray-600 focus:outline-none">+</button>
            </div>
            
            {/* Remove Button */}
            <button className="text-red-600 hover:text-red-800 focus:outline-none">
              <DeleteOutlined className="text-2xl" />
            </button>
          </div>
        </div>
      );
};

export default CartItems;




