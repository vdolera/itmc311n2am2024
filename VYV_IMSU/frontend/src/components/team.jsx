import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../team.css';

function TeamPage({ user, setUser }) {
  const [teams, setTeams] = useState([
    {
      college: 'College of Science, Engineering and Architecture',
      abbreviation: 'AXI',
      students: '',
      faculty: '',
    },
    {
      college: 'College of Humanities and Social Sciences',
      abbreviation: 'ACHSS',
      students: '',
      faculty: '',
    },
    {
      college: 'College of Business and Accountancy',
      abbreviation: 'ABBS',
      students: '',
      faculty: '',
    },
    {
      college: 'College of Business and Accountancy',
      abbreviation: 'JPIA',
      students: '',
      faculty: '',
    },
    {
      college: 'College of Computer Studies',
      abbreviation: 'COCS',
      students: '',
      faculty: '',
    },
    {
      college: 'College of Education',
      abbreviation: 'STEP',
      students: '',
      faculty: '',
    },
    {
      college: 'College of Nursing',
      abbreviation: 'ANSA',
      students: '',
      faculty: '',
    },
    {
      college: 'College of Law',
      abbreviation: 'COL',
      students: '',
      faculty: '',
    },
  ]);

  const [isEditing, setIsEditing] = useState(false); // Track edit mode

  const handleInputChange = (index, field, value) => {
    const updatedTeams = [...teams];
    updatedTeams[index][field] = value;
    setTeams(updatedTeams);
  };

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev); 
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="body">
      <aside className="sidebar">
        <h3>Intramurals Management System</h3>
        <ul className="nav">
          <li><Link to="/home" className="nav-link"><i className="ph-light ph-house"></i> Dashboard</Link></li>
          <li><Link to="/player" className="nav-link "><i className="ph-light ph-user-focus"></i> Player</Link></li>
          <li><Link to="/team" className="nav-link active"><i className="ph-light ph-users-three"></i> Team</Link></li>
          <li><Link to="/coach" className="nav-link"><i className="ph-light ph-megaphone"></i> Coach</Link></li>
          <li><Link to="/game" className="nav-link"><i className="ph-light ph-fire"></i> Game</Link></li>
          <li><Link to="/scores" className="nav-link"><i className="ph-light ph-chart-line"></i> Live Scores</Link></li>
          <li><Link to="/registration" className="nav-link"><i className="ph-light ph-pencil-simple-line"></i> Registration</Link></li>
        </ul>
        <div className="bottom-links">
          <Link to="/settings." className="bottom-link"><i className="ph-light ph-gear"></i> Settings</Link>
          <button onClick={handleLogout} className="bottom-link"><i className="ph-light ph-sign-out"></i> Logout</button>
        </div>
      </aside>

      <div className="main-content">
        <h1>Player Management | Hello, {user.username}!</h1>

        <div className="player-table">
            <div className="table-controls">
                <div class="show-filter">
                    <label for="show">Show:</label>
                        <select id="show">
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                    <label for="entries">entries</label>
                </div>

                <button className="edit-button" onClick={handleEditToggle}>
                {isEditing ? 'Save Changes' : 'Edit'}
                </button>
            </div>

        <table>
          <thead>
            <tr className="table-header">
              <th>College - Team Name</th>
              <th>No. of Students</th>
              <th>No. of Faculty</th>
            </tr>
          </thead>
                <tbody>
                    {teams.map((team, index) => (
                    <tr key={team.id || index}>
                        <td>{team.college} - {team.abbreviation}</td>
                        <td>
                        {isEditing ? (
                            <input
                            type="text"
                            value={team.students}
                            onChange={(e) =>
                                handleInputChange(index, 'students', e.target.value)
                            }
                            />
                        ) : (
                            team.students || 'N/A'
                        )}
                        </td>
                        <td>
                        {isEditing ? (
                            <input
                            type="text"
                            value={team.faculty}
                            onChange={(e) =>
                                handleInputChange(index, 'faculty', e.target.value)
                            }
                            />
                        ) : (
                            team.faculty || 'N/A'
                        )}
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
        


      </div>
    </div>
  );
}

export default TeamPage;
