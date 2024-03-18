import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './style/ProductDetails.css';

const ProductDetails = ({ products, addToCart }) => {
  const { productId } = useParams();
  const product = products.find(product => product.id === parseInt(productId));

  if (!product) {
    return <p>מוצר לא נמצא</p>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>קטגוריה: {product.category}</p>
      <p>מחיר: ${product.price}</p>
      <button onClick={() => addToCart(product)}>הוסף לסל</button>
      <img src={require(`./images/${product.name}.jpg`)} alt={product.name} />
      <Link to="/products">חזור לרשימת המוצרים</Link>
    </div>
  );
}

export default ProductDetails;
