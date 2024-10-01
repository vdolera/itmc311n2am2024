import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../home.css';

function Home({ user, setUser }) {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleLogout = () => {
    setUser(null); // Clear the user state
    navigate('/'); // Redirect to the login page
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h3>Intramurals Management System</h3>
        <ul className="nav">
          <li>
            <a href="dashboard.html" className="nav-link active">
              <i className="ph-light ph-house"></i> Dashboard
            </a>
          </li>
          <li>
            <a href="player.html" className="nav-link">
              <i className="ph-light ph-user-focus"></i> Player
            </a>
          </li>
          <li>
            <a href="team.html" className="nav-link">
              <i className="ph-light ph-users-three"></i> Team
            </a>
          </li>
          <li>
            <a href="coach.html" className="nav-link">
              <i className="ph-light ph-megaphone"></i> Coach
            </a>
          </li>
          <li>
            <a href="game.html" className="nav-link">
              <i className="ph-light ph-fire"></i> Game
            </a>
          </li>
          <li>
            <a href="scores.html" className="nav-link">
              <i className="ph-light ph-chart-line"></i> Live Scores
            </a>
          </li>
          <li>
            <a href="registration.html" className="nav-link">
              <i className="ph-light ph-pencil-simple-line"></i> Registration
            </a>
          </li>
        </ul>
        <div className="bottom-links">
          <a href="settings.html" className="bottom-link">
            <i className="ph-light ph-gear"></i> Settings
          </a>
          <button onClick={handleLogout} className="bottom-link">
            <i className="ph-light ph-sign-out"></i> Logout
          </button>
        </div>
      </aside>

      <div className="main-content">
        <h1>Dashboard | Hello, {user.name}!</h1>
        <div className="calendar">
          <div className="month">
            <div className="prev" onClick={() => moveDate('prev')}>&#10094;</div>
            <div>
              <h2 id="month"></h2>
              <p id="date_str"></p>
            </div>
            <div className="next" onClick={() => moveDate('next')}>&#10095;</div>
          </div>
          <div className="weekdays">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
          <div className="days" id="days"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
