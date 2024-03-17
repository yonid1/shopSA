import React, { useState } from 'react';
import './Login.css'
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div>
      <h2>התחברות</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label htmlFor="email">כתובת דוא"ל:</label>
          <input
            type="email"
            id="email"
            className="email-input"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">סיסמה:</label>
          <input
            type="password"
            id="password"
            className="password-input"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">התחבר</button>
      </form>
    </div>
  );
}

export default Login;
