


function ProductCard(data) {

    // console.log("data ==>", data.data);


    const { thumbnail, category, title, price, id, description
    } = data.data
    return (
        <>
            {/* <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                    <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={thumbnail}
                    />
                </a>
                <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                        {title}
                    </h2>
                    <p className="mt-1">${price}</p>
                </div>
            </div> */}

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img className="w-full h-48 object-cover" src={thumbnail} />
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">Product {id}</h3>
                    <p className="text-gray-600 mt-2">{description}</p>
                    <div className="mt-4 flex justify-between items-center">
                        <span className="text-gray-800 font-bold">${price}</span>
                        <button className="px-3 py-1 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600">Details</button>
                    </div>
                </div>
            </div>

        </>
    )
}



export default ProductCard