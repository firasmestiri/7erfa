import React from 'react';
import './Style.css'; // Import your CSS file

const TTeam = () => {
  return (
    <div className="center">
      {/* Button with Gradient Color Effect */}
      <div className="outer button">
        <button>Hover Me</button>
        <span></span>
        <span></span>
      </div>

      {/* Circle with Gradient Color Effect */}
      <div className="outer circle">
        <button>Hover Me</button>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default TTeam;
