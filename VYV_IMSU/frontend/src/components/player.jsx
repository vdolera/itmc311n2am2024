import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../player.css';

function Player({ user, setUser }) {
    const navigate = useNavigate();
    const [filters, setFilters] = useState({
        yearLevel: '',
        college: '',
        event: '',
        role: ''
    });

    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage] = useState(10);

    const [filteredData, setFilteredData] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);

    const tableData = [
        { name: "Yuan Piamonte", year: "3rd Year", gender: "Male", college: "COCS", event: "Volleyball", role: "Player", email: "ypiamonte@gbox.adnu.edu.ph" },
        { name: "Vivianne Alano", year: "3rd Year", gender: "Female", college: "COCS", event: "N/A", role: "N/A", email: "vfalano@gbox.adnu.edu.ph" },
        { name: "Vincent Dolera", year: "3rd Year", gender: "Male", college: "COCS", event: "N/A", role: "N/A", email: "vdolera@gbox.adnu.edu.ph" },
        { name: "Dwayne Jacar", year: "3rd Year", gender: "Male", college: "ANSA", event: "N/A", role: "N/A", email: "djacar@gbox.adnu.edu.ph" },
        { name: "Kelly Buenafe", year: "3rd Year", gender: "Female", college: "JPIA", event: "Swimming", role: "Player", email: "fybuenafe@gbox.adnu.edu.ph" },
        { name: "James Aguilar", year: "3rd Year", gender: "Male", college: "COCS", event: "N/A", role: "N/A", email: "jaguilar@gbox.adnu.edu.ph" },
        { name: "Breech Fernandez", year: "3rd Year", gender: "Male", college: "ANSA", event: "Basketball", role: "Player", email: "brfernandez@gbox.adnu.edu.ph" }
    ];

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user');
        navigate('/');
    };

    const handleFilterChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        });
    };

    const applyFilters = () => {
        const filtered = tableData.filter(row => {
            return (
                (!filters.yearLevel || row.year === filters.yearLevel) &&
                (!filters.college || row.college === filters.college) &&
                (!filters.event || row.event === filters.event) &&
                (!filters.role || row.role === filters.role)
            );
        });
        setIsFiltered(true);
        setFilteredData(filtered);
        setCurrentPage(1); 
    };

    // Pagination
    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = isFiltered ? filteredData.slice(indexOfFirstEntry, indexOfLastEntry) : tableData.slice(indexOfFirstEntry, indexOfLastEntry);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const totalPages = isFiltered ? Math.ceil(filteredData.length / entriesPerPage) : Math.ceil(tableData.length / entriesPerPage);

    return (
        <div className='body'>
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
            </aside>
            
            <div className="main-content">
                <h1>Player Management | Hello, {user.username}!</h1>
                <div className="player-table">
                    <div className="table-controls">
                        <div className="filter">
                            <select name="yearLevel" value={filters.yearLevel} onChange={handleFilterChange}>
                                <option value="">Year Level</option>
                                <option value="1st Year">1st Year</option>
                                <option value="2nd Year">2nd Year</option>
                                <option value="3rd Year">3rd Year</option>
                                <option value="4th Year">4th Year</option>
                            </select>
                            <select name="college" value={filters.college} onChange={handleFilterChange}>
                                <option value="">College</option>
                                <option value="ANSA">ANSA</option>
                                <option value="COCS">COCS</option>
                                <option value="COL">COL</option>
                                <option value="JPIA">JPIA</option>
                                <option value="ABBS">ABBS</option>
                                <option value="AXI">AXI</option>
                                <option value="ACHSS">ACHSS</option>
                                <option value="STEP">STEP</option>
                            </select>
                            <select name="event" value={filters.event} onChange={handleFilterChange}>
                                <option value="">Event</option>
                                <option value="Basketball">Basketball</option>
                                <option value="Volleyball">Volleyball</option>
                                <option value="LITMUSDA">LITMUSDA</option>
                                <option value="Swimming">Swimming</option>
                                <option value="Table Tennis">Table Tennis</option>
                            </select>
                            <select name="role" value={filters.role} onChange={handleFilterChange}>
                                <option value="">Role</option>
                                <option value="Player">Player</option>
                                <option value="Volunteer">Volunteer</option>
                                <option value="Manager">Manager</option>
                                <option value="N/A">N/A</option>
                            </select>
                            <button onClick={applyFilters} className="filter-btn">Filter</button>
                        </div>
                    </div>
                    
                    <table>
                        <thead>
                            <tr className="table-header">
                                <th>Name</th>
                                <th>Year-Level</th>
                                <th>Gender</th>
                                <th>College</th>
                                <th>Event</th>
                                <th>Role</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentEntries.length > 0 ? currentEntries.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.name}</td>
                                    <td>{row.year}</td>
                                    <td>{row.gender}</td>
                                    <td>{row.college}</td>
                                    <td>{row.event}</td>
                                    <td>{row.role}</td>
                                    <td>{row.email}</td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="7">No results found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className="pagination">
                        {currentPage > 1 && (
                            <button onClick={() => paginate(currentPage - 1)}>Previous</button>
                        )}
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                            <button key={number} onClick={() => paginate(number)} className={number === currentPage ? 'active' : ''}>
                                {number}
                            </button>
                        ))}
                        {currentPage < totalPages && (
                            <button onClick={() => paginate(currentPage + 1)}>Next</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Player;
