import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import ProductCard from "../components/productsCard";
import Dropdown from "../components/categoeryDropdown";



function Products() {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [chosenCategoery, setChosenCategoery] = useState(["All"]); 
    const [loading, setLoading] = useState([true]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((data) => {
                console.log(data.products);
                setProducts(data.products)
                setLoading(false);
            }).catch((err) => {
                alert(err)
                setLoading(false)
            })
    }, [])



    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then((data) => {
                console.log("categories===>", data);
                setCategories(data)
                setLoading(false);
            }).catch((err) => {
                alert(err)
                setLoading(false)
            })
    }, [])


    return (
        <>



            <div className="container mx-12 mt-5">
                {loading ?
                    (<h1 className="text-center text-5xl underline">Loading...</h1>)
                    : (
                        <div className="w-full">
                            <h1 className="text-2xl underline font-bold mb-5">Categories</h1>
                            <div className=" flex overflow-x-scroll">
                                <Dropdown isChosen = {chosenCategoery === "All"} data={{
                                    slug: "All",
                                    name: "All"
                                }} />
                                {categories.map((data, index) => {
                                    return (
                                        <Dropdown isChosen={data.slug === chosenCategoery}
                                        data={data} key={index} />
                                    )
                                })}
                            </div>

                            <h1 className="text-center text-4xl underline font-bold mb-10 mt-10">Products</h1>
                            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                {products.map((data, index) => {
                                    return (
                                        <ProductCard data={data} key={index} />
                                    )
                                })}
                            </div>

                        </div>
                    )
                }
            </div>
        </>
    )

    // return (
    //     <>
    //         {/* <h1 className="text-center text-4xl underline font-bold">Products</h1> */}
    //         <section className="container mx-auto px-6 py-16">
    //             <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Products</h2>
    //             <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
    //                 {/* Product Card */}
    //                 {Array(4).fill().map((_, index) => (
    //                     <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
    //                         <img className="w-full h-56 object-cover" src={`https://via.placeholder.com/400x300?text=Product+${index + 1}`} alt={`Product ${index + 1}`} />
    //                         <div className="p-4">
    //                             <h3 className="text-xl font-semibold text-gray-800">Product {index + 1}</h3>
    //                             <p className="text-gray-600 mt-2 mb-4">This is a brief description of the product. It's a great product!</p>
    //                             <div className="flex items-center mb-4">
    //                                 <span className="text-yellow-500">★★★★☆</span>
    //                                 <span className="text-gray-600 ml-2">(34)</span>
    //                             </div>
    //                             <div className="flex justify-between items-center">
    //                                 <span className="text-xl font-bold text-gray-800">$99.99</span>
    //                                 <button className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600">Add to Cart</button>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 ))}
    //             </div>
    //         </section>

    //     </>
    // )
}


export default Products;