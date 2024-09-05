

function Home() {
    return (
        <>
            {/* <h1 className="text-center text-4xl underline font-bold">Home</h1> */}
            {/* Hero Section */}
            <section className="bg-cover bg-center h-[70vh]" style={{ backgroundImage: "url('https://via.placeholder.com/1600x900')" }}>
                <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                    <div className="text-center">
                        <h1 className="text-white text-5xl font-bold">Discover Your Next Favorite Product</h1>
                        <p className="text-gray-300 mt-4">Shop the latest and greatest in tech, fashion, and more.</p>
                        <a href="#" className="mt-8 inline-block px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600">Shop Now</a>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="container mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-gray-800 text-center">Featured Products</h2>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Product Card */}
                    {Array(4).fill().map((_, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img className="w-full h-48 object-cover" src={`https://via.placeholder.com/400x300?text=Product+${index + 1}`} alt={`Product ${index + 1}`} />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800">Product {index + 1}</h3>
                                <p className="text-gray-600 mt-2">This is a brief description of the product. It's a great product!</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="text-gray-800 font-bold">$99.99</span>
                                    <button className="px-3 py-1 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}


export default Home;