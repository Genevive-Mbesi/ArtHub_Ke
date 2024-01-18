import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
  

  const headingStyle = {
    
    padding: '20px 5px',
    borderBottom:'2px solid black',
    paddingBottom: '10px',
    fontWeight: 'bold',
    marginBottom: '10px', 
    fontWeight: 'bold',
    fontSize: '2em',
    
  };
  const containerStyle = {
    display: 'inline-block',
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
        <Link to='/contacts'>
                 Contact
                </Link>
          </li>
          <li style={headingStyle}>
        <Link to='/listings'>
                 Listings
                </Link>
          </li>
          <li style={headingStyle}>
        <Link to='/services'>
                 Services
                </Link>
          </li>
        
        </ul>
      </nav>
    
  );
};

export default Navigation;
