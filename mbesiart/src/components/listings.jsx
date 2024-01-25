import React from 'react';
import Footer from './footer';


const Listings = React.forwardRef ((props,ref) => { 
  const bodyStyle = {
    backgroundColor: 'Gainsboro',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    margin: 0,
    padding: 0,
    height: '100vh',
    alignItems: 'center',
  };
  const subheading = {
    fontWeight: '300', 
    fontSize: '2em',
    color:'DarkSlateGrey', 
    paddingTop: '10px',
    position: 'absolute', 
    top: '30%',
    left: '50%',
   transform: 'translateX(-50%)',
   fontFamily: '  Georgia,serif',
  };
  const myName = {
    fontWeight: '300', 
    fontSize: 'em',
    color:'DarkSlateGrey', 
    position: 'absolute', 
    top: '57%',
    left: '50%',
   transform: 'translateX(-50%)',
   fontFamily: '  Georgia,serif',
   borderBottom:'2px solid DarkSlateGrey',
  };
  
  return(
    <div ref={ref} >
    <div style={bodyStyle}>

    <h1 style={subheading}> Art is a friendly of expressing our imagination,
     It speaks a lot about our world and our lives.</h1>
     <h1 style={myName}> Genevive Mbesi, CEO</h1>
    </div>
    <Footer/>
    </div> 
  
  );
});

export default Listings;