import React from 'react';
import assets from '../assets/cover.png';
import Navigation from './navigationbar';

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
    
  };

  return (
    <body style={bodyStyle}>
    <Navigation/>  
    </body>
  );
};

export default Home;
