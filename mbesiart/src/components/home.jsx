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
  const heading = {
    fontWeight: '300', 
    fontSize: '3em',
    color:'White',
    paddingTop: '10px',
    position: 'absolute', // Position the text absolutely within the container
    top: '20%',
    left: '50%', // Center it horizontally within the container
   transform: 'translateX(-50%)',
   fontFamily: '  Georgia,serif',
   
  };
  const subheading = {
    fontWeight: '300', 
    fontSize: '2em',
    color:'rgba(169, 169, 169, 0.9)', 
    paddingTop: '10px',
    position: 'absolute', // Position the text absolutely within the container
    top: '30%',
    left: '50%', // Center it horizontally within the container
   transform: 'translateX(-50%)',
   fontFamily: '  Georgia,serif',
   
  };

  return (
    <body style={bodyStyle}>
    <Navigation/>  
    <h1 style={heading}>MbesiArt</h1>
    <h1 style={subheading}>Your affordable Wall Decor designs</h1>
    </body>
  );
};

export default Home;
