
import { StarFilled, ShoppingCartOutlined } from '@ant-design/icons';



const ProductCard = ({item}) => {
console.log('data==>',item);

const {thumbnail, title, category, id, description, rating, price} = item
    return (
        
        <div className="max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-60 object-cover object-center" src={thumbnail} alt="Product Title" />
            <div className="p-6">
                <h2 className="text-lg font-bold mb-2">{title}</h2>
                <p className="text-gray-700 mb-4">{description}</p>
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
                    <span className="text-2xl font-bold">${price}</span>
                    <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        <ShoppingCartOutlined className="mr-2" /> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}



export default ProductCard