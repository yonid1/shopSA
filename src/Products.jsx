import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = ({ filteredProducts, addToCart }) => {
  return (
    <div>
      {filteredProducts.map(product => (
        <div key={product.id} className="product-item">
          <img src={require(`./images/${product.name}.jpg`)} alt={product.name} />
          <h3>{product.name}</h3>
          <p>קטגוריה: {product.category}</p>
          <p>מחיר: ${product.price}</p>
          <button onClick={() => addToCart(product)}>הוסף לסל</button>
          <Link to={`/product/${product.id}`}>צפה בפרטים נוספים</Link>
        </div>
      ))}
    </div>
  );
}

export default Products;
