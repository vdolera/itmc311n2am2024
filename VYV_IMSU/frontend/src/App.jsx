// src/App.js
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/register';
import Login from './components/login';
import Home from './components/home'; 
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const [isRegister, setIsRegister] = useState(true); // Toggle between Register and Login
  const [user, setUser] = useState(null); // State to store user info

  const handleLoginSuccess = (userData) => {
    setUser(userData); // Set user data on successful login
  };

  return (
    <Router>
      <Routes>
        {/* Redirect to Home if the user is logged in */}
        <Route path="/" element={user ? <Navigate to="/home" /> : (
          <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            {isRegister ? <Register /> : <Login onLoginSuccess={handleLoginSuccess} />}
            <div className="text-center mt-3">
              <p>{isRegister ? 'Already have an account?' : "Don't have an account?"}</p>
              <button
                className="btn btn-default border bg-light rounded-0 text-decoration-none"
                onClick={() => setIsRegister(!isRegister)}
              >
                {isRegister ? 'Login' : 'Register'}
              </button>
            </div>
          </div>
        )} />

        {/* Route for Home page */}
        <Route path="/home" element={user ? <Home user={user} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
