import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home'; 
import Products from './Products'; 
import ProductDetails from './ProductDetails';

const productsData = [
  { id: 1, name: 'Product A', category: 'Electronics', price: 20 },
  { id: 2, name: 'Product B', category: 'Clothing', price: 30 },
  { id: 3, name: 'Product C', category: 'Electronics', price: 25 },
  // Add more products as needed
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [sortBy, setSortBy] = useState('');
  const [cart, setCart] = useState([]); 

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
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>מערכת חנות מוצרים</h1>
          <div class="cart-container">

          <div className="cart-icon">
            <h2>סל קניות</h2>
            <ul>
              {cart.map((item, index) => (
                <div className='cart'>
                  
                  <div key={index}>{item.name}</div>
                   </div>
              ))}
            </ul>
          </div>
          </div>
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
          {/* <div> */}
            <Routes>
              <Route path="/" element={<Home filteredProducts={filteredProducts} />} />
              <Route
                path="/products"
                element={<Products filteredProducts={filteredProducts} addToCart={addToCart} />}
              />
              <Route path="/product/:productId" element={<ProductDetails products={productsData} addToCart={addToCart} />} />
            </Routes>
          {/* </div>     */}
        </header>
      </div>
    </Router>
  );
}

export default App;
