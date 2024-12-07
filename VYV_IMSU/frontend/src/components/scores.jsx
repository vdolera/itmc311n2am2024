import React from 'react';
import underMaintenanceGif from '../assets/undermaintenance.gif'; // Import the GIF correctly

function Scores() {
    return (
        
        <div className="scoresBody">
            <aside className="sidebar">
            <h3>Intramurals Management System</h3>
            <ul className="nav">
                <li><Link to="/home" className="nav-link"><i className="ph-light ph-house"></i> Dashboard</Link></li>
                <li><Link to="/player" className="nav-link active"><i className="ph-light ph-user-focus"></i> Player</Link></li>
                <li><Link to="/team" className="nav-link"><i className="ph-light ph-users-three"></i> Team</Link></li>
                <li><Link to="/game" className="nav-link"><i className="ph-light ph-fire"></i> Game</Link></li>
                <li><Link to="/scores" className="nav-link"><i className="ph-light ph-chart-line"></i> Live Scores</Link></li>
                <li><Link to="/registration" className="nav-link"><i className="ph-light ph-pencil-simple-line"></i> Registration</Link></li>
            </ul>
            <div className="bottom-links">
                <Link to="/settings" className="bottom-link"><i className="ph-light ph-gear"></i> Settings</Link>
                <button onClick={handleLogout} className="bottom-link"><i className="ph-light ph-sign-out"></i> Logout</button>
            </div>
        </aside><div className="maintenance-container">
                <img
                    src={underMaintenanceGif}
                    alt="Under Maintenance GIF"
                    className="maintenance-gif" />
                <div className="maintenance-text">Under Maintenance</div>
            </div>
        </div>
    );
}

export default Scores;
