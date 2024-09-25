import React from 'react';
import { DeleteOutlined } from '@ant-design/icons';


const CartItems = () => {
    return (
        <div>
            <img className="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6" src='data:image/jpeg;base64,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' alt="Product" />
            <div className="flex-grow">
                <h2 className="text-2xl font-semibold text-gray-800">Product Name</h2>
                <p className="text-gray-600 mt-2">A brief description of the product that highlights its main features and benefits.</p>
                <p className="mt-4 text-lg font-bold text-blue-600">$99.99</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <div className="flex items-center border border-gray-300 rounded-lg">
                    <button className="px-3 py-1 text-gray-600 focus:outline-none">-</button>
                    <input type="number" min="1" defaultValue="1" className="w-12 text-center border-0 focus:ring-0" />
                    <button className="px-3 py-1 text-gray-600 focus:outline-none">+</button>
                </div>
                <button className="text-red-600 hover:text-red-800 focus:outline-none">
                    <DeleteOutlined className="text-2xl" />
                </button>
            </div>
        </div>
    );
};

export default CartItems;




