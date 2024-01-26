import React, {useState } from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {

  const [showPrices, setShowPrices] = useState(false);

  const togglePrices = () => {
    setShowPrices(!showPrices);
  };
  

  const headingStyle = {
    padding: '20px 5px',
    borderBottom:'1px solid DarkSlateGrey',
    paddingBottom: '10px',
    fontWeight: '600',
    marginBottom: '10px', 
    fontSize: '1em',
    color:'DarkSlateGrey',
    cursor: 'pointer',
    
  };
  const containerStyle = {
    display: 'inline-block',
    backgroundColor: 'rgba(169, 169, 169, 0.5)', 
    padding: '40px', 
    borderRadius: '10px', 
  };

  return (
    
       <nav style={{ width: '80%', maxWidth: '600px',marginLeft: '50px' }}>
        <ul style={containerStyle}>
        <li style={headingStyle}>
        <Link to='/profile'>
                 Profile
                </Link>
          </li>
          <li style={headingStyle}>
        <Link to='/services'>
                 Services
                </Link>
          </li>
          <li style={headingStyle}>
        <Link to='/listings'>
                 Team
                </Link>
          </li>
          <li style={headingStyle}>
        <Link to='/contacts'>
                 Contacts
                </Link>
          </li>
          <li style={headingStyle}>
          <a href= 'https://www.instagram.com/wall_art_heart?igsh=OHk4bmZrb3RkcjVy'> Designs </a>
          </li>
        <li>
        {/* Button to toggle price display */}
           <div style={headingStyle} onClick={togglePrices}>
            {showPrices ? 'Hide Prices' : 'Price List'}
          </div>

          {/* Display prices when showPrices is true */}
          {showPrices && (
            <div style={headingStyle}>
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
