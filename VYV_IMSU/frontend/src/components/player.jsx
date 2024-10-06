import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../player.css';

function Player({ user, setUser }) {
    const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null); // Clear user
    localStorage.removeItem('user');
    navigate('/'); // Redirect to the login page
  };
    return (
      <div className='body'>
            <aside className="sidebar">
                <h3>Intramurals Management System</h3>
                <ul className="nav">
                    <li><Link to="/home" className="nav-link"><i className="ph-light ph-house"></i> Dashboard</Link></li>
                    <li><Link to="/player" className="nav-link active"><i className="ph-light ph-user-focus"></i> Player</Link></li>
                    <li><Link to="/team" className="nav-link"><i className="ph-light ph-users-three"></i> Team</Link></li>
                    <li><Link to="/coach" className="nav-link"><i className="ph-light ph-megaphone"></i> Coach</Link></li>
                    <li><Link to="/game" className="nav-link"><i className="ph-light ph-fire"></i> Game</Link></li>
                    <li><Link to="/scores" className="nav-link"><i className="ph-light ph-chart-line"></i> Live Scores</Link></li>
                    <li><Link to="/registration" className="nav-link"><i className="ph-light ph-pencil-simple-line"></i> Registration</Link></li>
                </ul>

                <div className="bottom-links">
                    <Link to="/settings" className="bottom-link"><i className="ph-light ph-gear"></i> Settings</Link>
                    <button onClick={handleLogout} className="bottom-link"><i className="ph-light ph-sign-out"></i> Logout</button>
                </div>
            </aside>
            
            <div className="main-content">
                <h1>Player Management | Hello, {user.username}!</h1>
                <div className="player-table">
                    <div className="table-controls">
                        <div className="entries">
                            <label htmlFor="show-entries">Show</label>
                            <select id="show-entries">
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                            </select>
                            <label>entries</label>
                        </div>
                        <div className="search">
                            <input type="text" placeholder="Search..." />
                        </div>
                        <div className="add-button">
                            <button className="edit-button">+ Edit Player</button>
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Player</th>
                                <th>Team</th>
                                <th>Profile</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Yuan Piamonte</td>
                                <td>COCS</td>
                                <td><button className="view-button">View</button></td>
                            </tr>
                            <tr>
                                <td>Vincent Dolera</td>
                                <td>COCS</td>
                                <td><button className="view-button">View</button></td>
                            </tr>
                            <tr>
                                <td>Vivianne Alano</td>
                                <td>COCS</td>
                                <td><button className="view-button">View</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="pagination">
                        <button>Previous</button>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>Next</button>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default Player;
