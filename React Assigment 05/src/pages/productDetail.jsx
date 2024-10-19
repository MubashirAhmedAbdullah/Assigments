import { useNavigate, useParams } from "react-router";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";




function ProductsDetail() {
    const params = useParams();
    const { id } = params
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // console.log(id);
    // console.log('params==>', params);


    useEffect(() => {
        axios.get(`https://dummyjson.com/product/${id}`)
            .then((res) => {
                console.log('res===>', res.data);
                setProducts(res.data)
                setLoading(false)
            }).catch((err) => {
                console.log('err===>', err);
                setLoading(false)
            })
    }, [])

    const { brand, category, description, images, price, rating, title, weight, thumbnail, warrantyInformation, returnPolicy } = products




    const chekPrice = Math.ceil((price * 10) / 100)
    const orignalPrice = Math.ceil(chekPrice + price)
    const savedPrice = chekPrice


    const IsLoggedOut = true
    const navigate = useNavigate();

    return (
        <div>
            {
                loading ? (
                    <div role="status" className="flex items-center justify-center pt-28 pb-24">
                        <svg aria-hidden="true" className="w-24 h-24 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                ) : (
                    <div className="container mx-auto p-4">
                        <div className="flex flex-col md:flex-row">
                            {/* Image Section */}
                            <div className="w-full md:w-1/2 p-4">
                                <img
                                    src={thumbnail}
                                    alt="Product Image"
                                    className="w-full h-auto"
                                />
                                {/* Thumbnail Images */}
                                {/* <div className="flex mt-4">
                            <img
                                src="https://via.placeholder.com/100"
                                alt="Thumbnail 1"
                                className="w-16 h-16 mr-2 border"
                            />
                            <img
                                src="https://via.placeholder.com/100"
                                alt="Thumbnail 2"
                                className="w-16 h-16 mr-2 border"
                            />
                            <img
                                src="https://via.placeholder.com/100"
                                alt="Thumbnail 3"
                                className="w-16 h-16 mr-2 border"
                            />
                        </div> */}
                            </div>

                            {/* Product Details Section */}
                            <div className="w-full md:w-1/2 p-4">
                                <h1 className="text-2xl font-bold">{title}</h1>
                                <p className="text-gray-600">{brand}</p>
                                <div className="mt-2">
                                    <span className="text-yellow-500">★★★★☆</span>
                                    <span className="text-gray-600 ml-2">(120 reviews)</span>
                                </div>
                                <hr className="my-4" />
                                <p className="text-2xl font-bold text-red-600">${price}</p>
                                <p className="text-gray-600 mt-2">List Price: <span className="line-through">${orignalPrice}</span></p>
                                <p className="text-gray-600 mt-2">You Save: ${savedPrice} (10%) </p>
                                <div className="mt-4">
                                    <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
                                        Add to Cart
                                    </button>
                                    {
                                        IsLoggedOut ? (
                                            <button onClick={() => navigate('/Auth')} className="ml-4 bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300">
                                                Buy Now
                                            </button>
                                        ) : (
                                            <Link to={'/order'}> <button className="ml-4 bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300">
                                                Buy Now
                                            </button> </Link>

                                        )
                                    }
                                </div>
                                <hr className="my-4" />
                                <h2 className="text-xl font-bold">Product Description</h2>
                                <p className="text-gray-700 mt-2">
                                    {description}
                                </p>
                                <hr className="my-4" />
                                <h2 className="text-xl font-bold">Product Features</h2>
                                <ul className="list-disc list-inside text-gray-700 mt-2">
                                    <li>{warrantyInformation}</li>
                                    <li>{returnPolicy}</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }
            <Footer />
        </div>
    );
}

export default ProductsDetail;