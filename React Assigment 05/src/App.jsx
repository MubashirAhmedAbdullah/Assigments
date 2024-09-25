import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth/Auth'
import SignUp from './pages/Auth/SignUP'
import Login from './pages/Auth/login'
import Dashboard from './pages/main'
import Home from './pages/home'
import Products from './pages/products'
import ProductsDetail from './pages/productDetail'
import Cart from './pages/cart'
import Profile from './pages/profile'
import OrderPage from './pages/order'

function App() {

  return (
    <div>
     <BrowserRouter>
        <Routes>
          {/* auth parent route */}
          <Route path="/Auth">
            <Route index element={<Auth />} />
            <Route path="SignUP" element={<SignUp />} />
            <Route path="login" element={<Login />} />
          </Route>
          {/* auth ke elawa */}

          <Route path="/" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductsDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/order' element={<OrderPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
