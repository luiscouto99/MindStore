import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Profile from './pages/Profile/Profile';
import CartPage from "./pages/Cart/Cart"
import Checkout from './pages/Checkout/Checkout';


//https://fakestoreapi.com/products
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="productlistpage" element={<ProductListPage />} />
          <Route path="productlistpage/:id" element={<ProductDetail />} />
          <Route path="cart/:id" element={<CartPage />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;