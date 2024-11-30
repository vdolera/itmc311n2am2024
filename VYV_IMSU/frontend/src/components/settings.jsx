import React from 'react';
import underMaintenanceGif from '../assets/undermaintenance.gif'; 
import '../maintenance.css';

function Settings () {
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
export default Settings;