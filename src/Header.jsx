import React from 'react';
import { Link } from 'react-router-dom';
// import ShoppingCartIcon from './ShoppingCartIcon'; // נניח שקיים רכיב ShoppingCartIcon

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src="לינק ללוגו החנות" alt="לוגו החנות" />
        </Link>
      </div>
      <div className="user-actions">
        <Link to="/cart">
          {/* <ShoppingCartIcon /> */}
        </Link>
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
