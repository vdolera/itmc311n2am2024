import React from 'react';


function Registration () {
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
export default Registration;