import { Link } from "react-router-dom";
import CartItems from "../components/cartItemsCard"
import Footer from "../components/footer";




const Cart = () => {
  return (
    <div>
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-semibold mb-6 text-gray-800">Shopping Cart</h1>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-wrap md:flex-row items-center">
          <CartItems />
          <CartItems />
          <CartItems />
          <CartItems />
          <CartItems />
          <CartItems />
          <CartItems />
          <CartItems />
          <CartItems />
        </div>
        <div className="mt-8 flex justify-end">
          <Link to={'/order'}><button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none transition duration-200">
            Proceed to Checkout
          </button></Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}


export default Cart;