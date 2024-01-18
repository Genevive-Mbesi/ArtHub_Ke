import React from 'react';
import assets from '../assets/cover.png';

export default function Home() {
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
    justifyContent: 'center',
    color: 'white', // Text color, adjust as needed
    // Add any other styles you need for your content
  };

  return (
    <body style={bodyStyle}>
      {/* Your content goes here */}
    </body>
  );
}
