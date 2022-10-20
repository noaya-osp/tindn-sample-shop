import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Banner from './components/banner';

import Products from './pages/products';
import Checkout from './pages/checkout';
import Orders from './pages/orders';

function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [openBanner, setOpenBanner] = useState(localStorage.getItem('openBanner') ? false : true);

  useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Banner open={openBanner} setOpen={setOpenBanner}/> 
      <Navbar cart={cart} setCart={setCart}></Navbar>    
      <BrowserRouter>
        <div className="content">
          <Routes>
            <Route path="/" element={<Products cart={cart} setCart={setCart}/>} />
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart}/>} />
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
