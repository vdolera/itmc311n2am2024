import React from 'react';
import './scores.css'; // Import a separate CSS file for styling
import underMaintenanceGif from '../assets/undermaintenance.gif'; // Import the GIF correctly

function Scores() {
    return (
        <div className="maintenance-container">
            <img 
                src={underMaintenanceGif} 
                alt="Under Maintenance GIF" 
                className="maintenance-gif" 
            />
            <div className="maintenance-text">Under Maintenance</div>
        </div>
    );
}

export default Scores;
