import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';

import Hero from './components/Hero.jsx';
import MainLayout from './layouts/MainLayout.jsx';

import Men from './pages/Men.jsx';
import Women from './pages/Women.jsx';
import Accessories from './pages/Accessories.jsx';

import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import { CartProvider } from './context/CartContext.jsx';
import Cart from './pages/Cart.jsx';
import Checkout from './pages/Checkout.jsx';
import Success from './pages/Success.jsx';
import SearchResults from './components/SearchResults.jsx';
import Tech from './pages/Tech.jsx';
import Home from './pages/Home.jsx';
import Beauty from './pages/Beauty.jsx';

function App() {
  const [error, setError] = useState('');
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    setError('');
    try {
      const response = await axios.get(
        'https://dummyjson.com/products?limit=200',
      );
      // console.log(response.data);
      setProducts(response.data.products);
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError('products not fetched properly');
      } else {
        setError('Failed to fetch data');
      }
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout products={products} />}>
            <Route path='/' element={<Hero />} />
            <Route path='/men' element={<Men />} />
            <Route path='/women' element={<Women />} />
            <Route path='/tech' element={<Tech />} />
            <Route path='/home' element={<Home />} />
            <Route path='/beauty' element={<Beauty />} />
            <Route path='/accessories' element={<Accessories />} />
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/success' element={<Success />} />
            <Route path='/search' element={<SearchResults />} />
          </Route>

          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
