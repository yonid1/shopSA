import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ filteredProducts }) => {
  return (
    <div className='home-products-list' >
      {filteredProducts.map(product => (
        <Link key={product.id} to={`/product/${product.id}`} className="home-product-item">
          <img src={require(`./images/${product.name}.jpg`)} alt={product.name} />
          <h3>{product.name}</h3>
          <p>קטגוריה: {product.category}</p>
          <p>מחיר: ${product.price}</p>
        </Link>
      ))}
    </div>
  );
}

export default Home;
