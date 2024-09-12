import axios from "axios";
import { useEffect, useState } from "react";
import Items from "../components/product";
import CategoryCard from "../components/categoryCard";





function Products() {
    const [products, setProducts] = useState([]);
    const [category, setcategory] = useState([]);
    const [chosenCategory, setChosenCategory] = useState("All")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log("use is run");
        const url =
            chosenCategory === "All" ? 'https://dummyjson.com/products' : `https://dummyjson.com/products/category/${chosenCategory}`
        axios.get(url)
            .then((res) => {
                setProducts(res.data.products)
                setLoading(false)
            }).catch((err) => {
                console.log(err);
                setLoading(false)
            })
    }, [chosenCategory])



    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
            .then((res) => {
                console.log("category ==>", res.data);
                setcategory(res.data)
                setLoading(false)
            }).catch((err) => {
                console.log(err);
                setLoading(false)
            })
    }, [])
    return (
        <>
            <div className="container mx-auto">
                {loading ? (
                    <div className="flex justify-center pt-60"><div className="loader"></div></div>
                ) : (
                    <div>
                        <div className="ml-5 text text-2xl mt-10 mb-10 underline font-bold">Categories</div>
                        <div className="flex overflow-x-scroll">
                            <CategoryCard ischosen={chosenCategory === "All"}
                                key={category}
                                onClick={()=> setChosenCategory("All")}
                                category={{
                                    slug: "All",
                                    name: "All"
                                }} />


                            {category.map((category) => {
                                return (
                                    <CategoryCard onClick={() => {
                                        setChosenCategory(category.slug)
                                        console.log(chosenCategory);
                                    }}
                                        ischosen={chosenCategory === category.slug}
                                        category={category} key={category.slug} />
                                )
                            })}
                        </div>




                        <div className="text-center text text-4xl mt-10 mb-10 underline font-bold">Products</div>
                        <div className="flex flex-wrap -m-4">
                            {
                                products.map((item) => {
                                    return (
                                        <Items item={item} key={item.id} />
                                    )
                                })
                            } </div>
                    </div>
                )}
            </div>
        </>
    )
}


export default Products;