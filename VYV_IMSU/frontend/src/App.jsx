import { useState } from 'react';
import Login from './components/login';
import Home from './components/home'; 
import Register from './components/register'; 
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null); // State to store user info

  const handleLoginSuccess = (userData) => {
    setUser(userData); // Set user data on successful login
  };

  return (
    <Router>
      <Routes>
        {/* Redirect to Home if the user is logged in */}
        <Route path="/" element={user ? <Navigate to="/home" /> : (
          // notification
          <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <Login onLoginSuccess={handleLoginSuccess} />
          </div>
        )} />

        {/* Route for Home page */}
        <Route path="/home" element={user ? <Home user={user} setUser={setUser}/> : <Navigate to="/" />} />

        {/* Route for register page */}
        <Route path="/register" element={<Register />} />

      </Routes>
    </Router>
  );
}

export default App;
