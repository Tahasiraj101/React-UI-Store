import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Header from './header/Header';  
import Footer from './mainfooter/Footer';  
import Products from './Product/Product';  
import Login from './Login/Login';  
import ProductDetail from './ProductDetail/ProductDetail';
import Home from './Home/Home';

function App() {
  return (
    <Router>
      <Header />  {/* This will appear on all pages */}

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />  {/* Show product details */}
      </Routes>

      <Footer />  {/* This will appear on all pages */}
    </Router>
  );
}

export default App;
