import React from 'react';
import assets from '../assets/cover.png';

const Home = () => {
  const bodyStyle = {
    backgroundImage: `url(${assets})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    margin: 0,
    padding: 0,
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: 'brown', // Text color, adjust as needed
     // Center-align the text
    // Add any other styles you need for your content
  };

  const headingStyle = {
    textDecoration: 'underline',
    textDecorationColor: 'brown',
    padding: '20px', 
    fontWeight: 'bold' 
  };

  
  

  return (
    <body style={bodyStyle}>
       <div style={{ width: '80%', maxWidth: '600px',marginLeft: '50px' }}>
        <h1 style={headingStyle}>Profile</h1>
        <h1 style={headingStyle}>Services</h1>
        <h1 style={headingStyle}>Listings</h1>
        <h1 style={headingStyle}>Contact</h1>
      </div>
    </body>
  );
};

export default Home;
