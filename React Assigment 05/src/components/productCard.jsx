
import { StarFilled, ShoppingCartOutlined } from '@ant-design/icons';



const ProductCard = () => {
    // return (

    //         <div className="max-w-xs mx-auto bg-none rounded-lg overflow-hidden">
    //             <img className="w-full h-56 object-cover object-center" src="https://via.placeholder.com/150" alt="Product Title" />
    //             <div className="p-4">
    //                 <h2 className="text-lg font-semibold mb-2">Product Title</h2>
    //                 <p className="text-gray-600 mb-4">This is a short description of the product.</p>
    //                 <div className="flex items-center mb-4">
    //                     <div className="text-yellow-400">
    //                         <StarFilled className="mr-1 text-yellow-400" />
    //                         <StarFilled className="mr-1 text-yellow-400" />
    //                         <StarFilled className="mr-1 text-yellow-400" />
    //                         <StarFilled className="mr-1 text-yellow-400" />
    //                         <StarFilled className="mr-1 text-gray-300" />
    //                     </div>
    //                     <span className="ml-2 text-gray-600">4 / 5</span>
    //                 </div>
    //                 <div className="flex items-center justify-between">
    //                     <span className="text-xl font-bold">$29.99</span>
    //                     <button className="flex items-center bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
    //                         <ShoppingCartOutlined className="mr-1" /> Add to Cart
    //                     </button>
    //                 </div>
    //             </div>
    //         </div>

    // )

    return (
        
        <div className="max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-60 object-cover object-center" src="https://via.placeholder.com/300" alt="Product Title" />
            <div className="p-6">
                <h2 className="text-lg font-bold mb-2">Product Title</h2>
                <p className="text-gray-700 mb-4">This is a short description of the product. It provides a brief overview of the product features and benefits.</p>
                <div className="flex items-center mb-4">
                    <div className="text-yellow-400 flex">
                        <StarFilled className="mr-1" />
                        <StarFilled className="mr-1" />
                        <StarFilled className="mr-1" />
                        <StarFilled className="mr-1" />
                        <StarFilled className="text-gray-300" />
                    </div>
                    <span className="ml-2 text-gray-600">4 / 5</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">$29.99</span>
                    <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        <ShoppingCartOutlined className="mr-2" /> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}



export default ProductCard