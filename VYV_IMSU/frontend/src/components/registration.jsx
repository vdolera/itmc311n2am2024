import React, { useState } from 'react';
import axios from 'axios';

const Registration = ({ onEventAdded }) => {
  const [eventDetails, setEventDetails] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
  });

  const handleInputChange = (e) => {
    setEventDetails({ ...eventDetails, [e.target.name]: e.target.value });
  };

  const handleEventSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/add-event', eventDetails);
      alert('Event added successfully!');
      setEventDetails({
        title: '',
        description: '',
        date: '',
        time: '',
      });
      if (onEventAdded) {
        onEventAdded(); // Notify parent to refresh events
      }
    } catch (error) {
      console.error('Error adding event:', error);
      alert('Failed to add event.');
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Add a New Event</h2>
      <form onSubmit={handleEventSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={eventDetails.title}
          onChange={handleInputChange}
          required
          style={{ marginBottom: '10px', padding: '10px' }}
        />
        <textarea
          name="description"
          placeholder="Event Description"
          value={eventDetails.description}
          onChange={handleInputChange}
          required
          style={{ marginBottom: '10px', padding: '10px', resize: 'none', height: '80px' }}
        />
        <input
          type="date"
          name="date"
          value={eventDetails.date}
          onChange={handleInputChange}
          required
          style={{ marginBottom: '10px', padding: '10px' }}
        />
        <input
          type="time"
          name="time"
          value={eventDetails.time}
          onChange={handleInputChange}
          required
          style={{ marginBottom: '10px', padding: '10px' }}
        />
        <button
          type="submit"
          style={{
            padding: '10px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default Registration;
