import React from 'react';
import { Link } from 'react-router-dom';
import './style/Header.css';
import Cart from './Cart';
// import ShoppingCartIcon from './ShoppingCartIcon'; // נניח שקיים רכיב ShoppingCartIcon

function Header({ cart, setCart ,products }) {

 

  return (
    <header className="header">
      <div className="logo-container">
        {/* <Link to="/"> */}
        {/* <img src="לינק ללוגו החנות" alt="לוגו החנות" /> */}
        {/* </Link> */}
      </div>

      <h1>מערכת חנות מוצרים</h1>

      <div className="cart-container">
        <Link to="/cart" className="cart-button">
          סל קניות
        </Link>
        <ul className="cart-list">
          <Cart cart={cart} /> 
        </ul>
      </div>

      <div className="user-actions"> 
       
       <div className="auth-links"> 
       <Link to="/login">התחברות</Link> 
       <span> | </span> 
       <Link to="/register">הרשמה</Link> 
       </div> 
       </div>
    </header>
  );
}

export default Header;
