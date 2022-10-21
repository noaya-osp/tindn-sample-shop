import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Banner from './components/banner';
import ProtectedRoute from './components/protectedRoute';

import Products from './pages/products';
import Checkout from './pages/checkout';
import Orders from './pages/orders';
import Account from './pages/account';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import FAQ from './pages/faq';

function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [openBanner, setOpenBanner] = useState(localStorage.getItem('openBanner') ? false : true);

  useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Banner open={openBanner} setOpen={setOpenBanner}/>   
      <BrowserRouter>
      <Navbar cart={cart} setCart={setCart}></Navbar>  
        <div className="content">
          <Routes>
            <Route path="/" element={<Products cart={cart} setCart={setCart}/>} />
            <Route path="/account" element={<ProtectedRoute><Account/></ProtectedRoute>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/faq" element={<FAQ/>}/>
            <Route path="/orders" element={<ProtectedRoute><Orders/></ProtectedRoute>}/>
            <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart}/>} />
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
