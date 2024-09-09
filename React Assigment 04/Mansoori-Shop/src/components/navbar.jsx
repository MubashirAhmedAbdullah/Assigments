import { Link } from "react-router-dom";




function Navbar() {
    return (
        <>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-2xl font-bold">Online Order</div>
                    <div className="space-x-4">
                        <Link className="text-gray-300 hover:text-white" to={"/"}>Home</Link>
                        <Link className="text-gray-300 hover:text-white" to={"/products"}>Products</Link>
                        <Link className="text-gray-300 hover:text-white" to={"/login"}>Login</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar;