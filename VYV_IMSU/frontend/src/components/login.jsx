//IMSU-23
//Login Page where user types their registered details to login

import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles.css';

function Login({ onLoginSuccess, navigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('admin'); // 'admin/default' or 'user'

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    axios.post('https://vyv-imsu-server.vercel.app/login', { email, password, userType })
        .then(result => {
            console.log('Server response:', result); // Log info for the server 
            if (result.data.user) {  // Check if user data is present
                alert('Login successful!');
                onLoginSuccess(result.data.user); //notification
                navigate('/home'); // Navigate to home page
            } else {
                alert('Login failed, no user returned.'); 
            }
        })
        .catch(err => {
            console.error('Login error:', err.response.data);
            alert('Login failed, please check your credentials.');
        });
  };

  const togglePasswordVisibility = () => {
    const passwordInput = document.getElementById('password');
    const passwordType = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', passwordType);
  };

  return (
    <div className="container">
      <div className="left-section">
        <img src="/logo.svg" alt="IMS U Connect Logo" className="logo" />
        <div className="signup">
          <h2>Log In</h2>
          <div className="tabs">
            <button
              type="button"
              className={`tab admin-tab ${userType === 'admin' ? 'active' : ''}`}
              onClick={() => setUserType('admin')}
            >
              Admin
            </button>
            <button
              type="button"
              className={`tab user-tab ${userType === 'user' ? 'active' : ''}`}
              onClick={() => setUserType('user')}
            >
              User
            </button>
          </div>
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-3">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="password-field mb-3">
              <input
                type="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                &#128065;
              </button>
            </div>
            <div className="extra-options">
              <label>
                <input type="checkbox" name="remember" /> Remember me
              </label>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>
            <button type="submit" className="btn-btn-success-w-100">Log In</button>
          </form>
          <p className="login-link">
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </div>
      </div>
      <div className="right-section">
        <img src="/glogo.svg" alt="G Logo" className="g-logo" />
        <img src="/transparent.svg" alt="Torch Icon" className="torch-icon" />
        <div className="info">
          <h3>Intramural Management System for Universities</h3>
          <p>An all-in-one platform for team registrations, game scheduling, and live point tracking.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
