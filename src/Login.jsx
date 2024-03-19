import React, { useState } from 'react';
import './style/Login.css'
import { useNavigate  } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serverUrl = 'http://localhost:5000';
    
    try {
      const response = await fetch(`${serverUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        localStorage.setItem('token', token);

        navigate('/');
        console.log('The login was successful!');
      } else {
        console.error('Login error');
      }
    } catch (error) { 
      console.error('Error executing the request:', error);
    }
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
