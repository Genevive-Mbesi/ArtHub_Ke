import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [showPrices, setShowPrices] = useState(false);

  const togglePrices = () => {
    setShowPrices(!showPrices);
  };

  const headingStyle = {
    padding: '10px',
    paddingBottom: '10px',
    fontWeight: '300',
    marginBottom: '10px',
    color: 'DarkSlateGrey',
    cursor: 'pointer',
    fontFamily: 'Georgia, serif',
  };

  const itemStyle = {
    padding: '5px',
    marginBottom: '10px',
    color: 'DarkSlateGrey',
    cursor: 'pointer',
    backgroundColor: 'rgba(169, 169, 169, 0.5)', 
    borderRadius: '10px',
    margin: '5px', 
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Georgia, serif',
    
  };

  const containerStyle = {
    display: 'flex',
    padding: '5px',
    borderRadius: '10px',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '30px',
    margin: '5px',
  };
  

  return (
    <nav style={{ width: '80%', maxWidth: '600px', marginLeft: '50px' }}>
      <ul style={containerStyle}>
        <li style={itemStyle}>
          <Link to="/profile" style={headingStyle}>
            Profile
          </Link>
        </li>
        <li style={itemStyle}>
          <Link to="/services" style={headingStyle}>
            Services
          </Link>
        </li>
        <li style={itemStyle}>
          <Link to="/listings" style={headingStyle}>
            Team
          </Link>
        </li>
        <li style={itemStyle}>
          <Link to="/contacts" style={headingStyle}>
            Contacts
          </Link>
        </li>
        <li style={itemStyle}>
          <a href="https://www.instagram.com/wall_art_heart?igsh=OHk4bmZrb3RkcjVy" style={headingStyle}>
            Designs
          </a>
        </li>
        <li>
          {/* Button to toggle price display */}
          <div style={itemStyle} onClick={togglePrices}>
            {showPrices ? 'Hide Prices' : 'Prices'}
          </div>

          {/* Display prices when showPrices is true */}
          {showPrices && (
            <div style={itemStyle}>
              <p>A3 - Ksh 1550</p>
              <p>A4 - Ksh 550</p>
              <p>A5 - Ksh 450</p>
              <p>A6 - Ksh 300</p>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
