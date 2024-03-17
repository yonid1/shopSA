import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home'; 
import Products from './Products'; 
import ProductDetails from './ProductDetails';
import Header from './Header';
import Cart from './Cart';
import Login from './Login';
import Register from './Register';



function App() {
  const [productsData, setProductsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [cart, setCart] = useState([]); 

  useEffect(() => {
    fetch("http://127.0.0.1:5000/products")
      .then(response => response.json())
      .then(data => {
        setProductsData(data);
        setFilteredProducts(data);
      })
      .catch(error => console.error('Error fetching products:', error))
  }, [])

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const filtered = productsData.filter(product =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleSort = (type) => {
    let sortedProducts;
    if (type === 'price') {
      sortedProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
    } else if (type === 'name') {
      sortedProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
    }
    setFilteredProducts(sortedProducts);
    setSortBy(type);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router basename=""> {/* Add basename here */}
      <div>
        <Header cart={cart} />
        <div className="App">
          <div className="App-product">
            <input
              type="text"
              placeholder="חיפוש מוצרים"
              value={searchTerm}
              onChange={handleSearch}
            />
            <div className="sorting-options">
              <span>מיין לפי: </span>
              <button onClick={() => handleSort('price')}>מחיר</button>
              <button onClick={() => handleSort('name')}>שם</button>
            </div>
            <Routes>
              <Route path="/" element={<Home filteredProducts={filteredProducts} />} />
              <Route path="/products" element={<Products filteredProducts={filteredProducts} addToCart={addToCart} />} />
              <Route path="/product/:productId" element={<ProductDetails products={productsData} addToCart={addToCart} />} />
              <Route path="/cart" element={<Cart cart={cart} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
