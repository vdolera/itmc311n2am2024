import { useState } from 'react';
import Login from './components/login';
import Register from './components/register'; 
import Home from './components/home'; 
import Player from './components/player';
import Teams from './components/team';
import Game from './components/game'; 
import Scores from './components/scores'; 
import Registration from './components/registration'; 
import Settings from './components/settings'; 
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';


function App() {
  // Storage for user Data, so if the page was refreshed it wont log us out
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null; // retrieves user data when refreshed
  });

  // Handle login
  const handleLoginSuccess = (userData) => {
    setUser(userData); // Set user data on login
    localStorage.setItem('user', JSON.stringify(userData)); // Store user in a storage
  };

  // Handle logout
  const handleLogout = () => {
    setUser(null); // Clear user
    localStorage.removeItem('user'); // Remove user data from storage
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Route for register page */}
        <Route path="/register" element={<Register />} />

        {/* Redirect to Home if the user is logged in */}
        <Route path="/" element={user ? <Navigate to="/home" /> : (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100"><Login onLoginSuccess={handleLoginSuccess} /></div>
        )} />

        {/* Route for Home page */}
        <Route path="/home" element={user ? <Home user={user} setUser={setUser} onLogout={handleLogout} /> : <Navigate to="/" />} />

        {/* Route for Player page */}
        <Route path="/player" element={user ? <Player user={user} setUser={setUser} onLogout={handleLogout}/> : <Navigate to="/" />} />
        
        {/* Route for Team page */}
        <Route path="/team" element={user ? <Teams user={user} setUser={setUser} onLogout={handleLogout}/> : <Navigate to="/" />} />

        {/* Route for Game page */}
        <Route path="/game" element={user ? <Game user={user} setUser={setUser} onLogout={handleLogout}/> : <Navigate to="/" />} />

        {/* Route for Live Scores page */}
        <Route path="/scores" element={user ? <Scores user={user} setUser={setUser} onLogout={handleLogout}/> : <Navigate to="/" />} />

        {/* Route for Registration page */}
        <Route path="/registration" element={user ? <Registration user={user} setUser={setUser} onLogout={handleLogout}/> : <Navigate to="/" />} />

        {/* Route for Settings page */}
        <Route path="/settings" element={user ? <Settings user={user} setUser={setUser} onLogout={handleLogout}/> : <Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
