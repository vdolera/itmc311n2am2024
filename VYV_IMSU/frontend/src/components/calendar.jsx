import React, { useState, useEffect } from 'react';
import '../calendar.css';


function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    renderDate(); // changes the calendar
  }, [currentDate]);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Move to next or previous month
  const moveDate = (direction) => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(currentDate.getMonth() - 1);
    } else if (direction === 'next') {
      newDate.setMonth(currentDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const renderDate = () => {
    const dt = new Date(currentDate);
    dt.setDate(1);
    const firstDayOfMonth = dt.getDay();
    const today = new Date();
    const endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
    const prevMonthEndDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();

    const daysArray = [];
    // Fill in previous month's days
    for (let x = firstDayOfMonth; x > 0; x--) {
      daysArray.push(<div key={`prev-${x}`} className="prev_date">{prevMonthEndDate - x + 1}</div>);
    }

    // Fill in current month's days
    for (let i = 1; i <= endDate; i++) {
      const isToday = i === today.getDate() && dt.getMonth() === today.getMonth();
      daysArray.push(
        <div key={`day-${i}`} className={isToday ? 'today' : ''}>
          {i}
        </div>
      );
    }

    // Set the calendar's HTML (days content)
    return daysArray;
  };

  return (
    <div className="calendar">
      <div className="month">
        <div className="prev" onClick={() => moveDate('prev')}>&#10094;</div>
        <div>
          <h2>{months[currentDate.getMonth()]}</h2>
          <p>{currentDate.toDateString()}</p>
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
      <div className="days">
        {renderDate()}
      </div>
    </div>
  );
}

export default Calendar;
