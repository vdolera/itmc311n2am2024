import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../home.css';
import '../calendar.css';



function Home({ user, setUser }) {
  const navigate = useNavigate();
  console.log('User object:', user);

  const handleLogout = () => {
    setUser(null); // Clear user
    localStorage.removeItem('user');
    navigate('/'); // Redirect to the login page
  };

  // Calendar state
  const [currentDate, setCurrentDate] = useState(new Date());

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // button script to next or back month
  const moveDate = (direction) => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(currentDate.getMonth() - 1);
    } else if (direction === 'next') {
      newDate.setMonth(currentDate.getMonth() + 1);
    }
    setCurrentDate(newDate); // Update calendar
  };

  // Generate days for the calendar
  const renderDays = () => {
    const dt = new Date(currentDate);
    dt.setDate(1); // Set to the first day of the month
    const firstDayOfMonth = dt.getDay();
    const today = new Date();
    const endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
    const prevMonthEndDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();

    const daysArray = [];
    
    // Add previous month's days
    for (let x = firstDayOfMonth; x > 0; x--) {
      daysArray.push(<div key={`prev-${x}`} className="prev_date">{prevMonthEndDate - x + 1}</div>);
    }

    // Add current month's days
    for (let i = 1; i <= endDate; i++) {
      const isToday = i === today.getDate() && dt.getMonth() === today.getMonth();
      daysArray.push(
        <div key={`day-${i}`} className={isToday ? 'today' : ''}>
          {i}
        </div>
      );
    }

    return daysArray;
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h3>Intramurals Management System</h3>
        <ul className="nav">
          <li><Link to="/home" className="nav-link active"><i className="ph-light ph-house"></i> Dashboard</Link></li>
          <li><Link to="/player" className="nav-link"><i className="ph-light ph-user-focus"></i> Player</Link></li>
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
        <h1>Dashboard | Hello, {user.username}!</h1>

        {/* Calendar */}
        <div className="calendar">
          <div className="month">
            <div className="prev" onClick={() => moveDate('prev')}>&#10094;</div>
            <div>
              <h2 className='month'>{months[currentDate.getMonth()]}</h2>
              <p>{currentDate.toDateString()}</p>
            </div>
            <div className="next" onClick={() => moveDate('next')}>&#10095;</div>
          </div>
          <div className="weekdays">
            {weekdays.map((day, index) => (
              <div key={index}>{day}</div>
            ))}
          </div>
          <div className="days">
            {renderDays()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
