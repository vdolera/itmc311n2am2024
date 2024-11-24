//IMSU-22
//Registration page where regular users and admins must register first before they can login

import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('admin'); // 'admin/default' or 'user'
  const [alertMessage, setAlertMessage] = useState(null); // alert message
  const [alertType, setAlertType] = useState(''); // alert type 

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Reset the alert state
    setAlertMessage(null);
    setAlertType('');

    // Send a POST request with the signup details
    axios.post('https://vyv-imsu-server.vercel.app/register', { email, username, password, userType })
      .then(result => {
        console.log(result);
        // Show success message
        setAlertMessage('Registration successful!');
        setAlertType('success');
      })
      .catch(err => {
        console.log(err);
        // Show error message
        setAlertMessage('Registration failed. Please try again.');
        setAlertType('error');
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
        <img src="logo.svg" alt="IMS U Connect Logo" className="logo" />
        <div className="signup">
          <h2>Sign Up</h2>
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
          {/* Show alert message */}
          {alertMessage && (
            <div className={`alert ${alertType === 'success' ? 'alert-success' : 'alert-danger'}`}>
              {alertMessage}
            </div>
          )}
          <form onSubmit={handleSignupSubmit}>
            <div className="mb-3">
              <input
                type="email"
                placeholder="Email Address"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            <button type="submit" className="btn-btn-success-w-100">Register</button>
          </form>
          <p className="login-link">
            Already have an account? <Link to="/">Log in</Link> 
          </p>
        </div>
      </div>
      <div className="right-section">
        <img src="glogo.svg" alt="G Logo" className="g-logo" />
        <img src="transparent.svg" alt="Torch Icon" className="torch-icon" />
        <div className="info">
          <h3>Intramural Management System for Universities</h3>
          <p>An all-in-one platform for team registrations, game scheduling, and live point tracking.</p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
