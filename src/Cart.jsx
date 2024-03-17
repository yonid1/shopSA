import React from 'react';
import { Link } from 'react-router-dom';
function Cart({ cart }) {
  return (
    <div>
      <h2>סל הקניות</h2>
      <ul>
        {cart.map((item, index) => (
          <Link key={item.id} to={`/product/${item.id}`} className="home-product-item">
          <img src={require(`./images/${item.name}.jpg`)} alt={item.name} />
          <h3>{item.name}</h3>
          <p>קטגוריה: {item.category}</p>
          <p>מחיר: ${item.price}</p>
        </Link>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
