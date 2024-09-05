import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Home from './pages/home'
import Products from './pages/products'
import Login from './pages/login'

function App() {
  return(
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
