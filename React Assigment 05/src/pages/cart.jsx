import { Link, useNavigate } from "react-router-dom";
import CartItems from "../components/cartItemsCard"
import Footer from "../components/footer";




const Cart = () => {
  const navigate = useNavigate();

  const IsLoggedOut = true
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-6 text-gray-800">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row">
          {/* Cart Items Section */}
          <div className="lg:w-2/3 lg:pr-8">
            {/* Repeat CartItem as needed */}
            <CartItems />
            <CartItems />
            <CartItems />
            <CartItems />
            <CartItems />
            <CartItems />
            {/* Add more CartItem components as needed */}
          </div>

          {/* Order Summary Section */}
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h2>
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-800 font-semibold">$299.97</p>
              </div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-800 font-semibold">$15.00</p>
              </div>
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-700">Tax</p>
                <p className="text-gray-800 font-semibold">$25.00</p>
              </div>
              <div className="flex justify-between items-center mb-6">
                <p className="text-xl font-semibold text-gray-800">Total</p>
                <p className="text-xl font-semibold text-blue-600">$339.97</p>
              </div>
              {
                IsLoggedOut ? (<button onClick={() => navigate('/Auth')} className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none transition duration-200">
                Proceed to Checkout
              </button>) : (
                
              <Link to={'/order'}><button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none transition duration-200">
                Proceed to Checkout
              </button></Link>
              )
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default Cart;