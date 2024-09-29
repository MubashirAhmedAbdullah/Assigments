import { useEffect, useState } from "react";
import Footer from "../components/footer";
import axios from "axios";
import ProductCard from "../components/productCard";
import { data } from "autoprefixer";






function Products(){

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

   useEffect(()=>{
    axios.get('https://dummyjson.com/products')
    .then((res)=>{
        // console.log('res==>', res.data.products);
        setProducts(res.data.products)
    })
   },[])
    return (
        <div>
            <h1 className="text-center text-3xl font-bold pt-10">Products</h1>
            <div className="flex flex-wrap p-5 gap-2 mt-10">
                {products.map((data)=>{
                    return(
                        <ProductCard item={data} key={data.id} />
                    )
                })}

            </div>


            <Footer />

        </div>
    )
}


export default Products;