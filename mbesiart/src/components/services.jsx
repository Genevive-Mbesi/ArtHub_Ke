import React from 'react';
import customize from '../assets/Customize.jpg';
import personalize from '../assets/personalize.jpg';
import office from '../assets/office.jpg';
import vibrance from '../assets/vibrance.jpg';
import Footer from './footer';


const Services = React.forwardRef ((props,ref) => {
  const bodyStyle = {
    backgroundColor: 'Gainsboro',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    margin: 0,
    padding: 0,
    height: '100vh',
    alignItems: 'center',
    display: 'flex',
  };

  const profileimage = {
    position: 'absolute', 
    top: '30%',
    marginLeft: '20px',
    width: '250px', // Set the desired width
    height: '250px',
  };

  const personal = {
    position: 'absolute', 
    top: '30%',
    marginLeft: '320px',
    width: '250px', // Set the desired width
    height: '250px',
    objectFit: 'cover',
  };

  const officeImage = {
    position: 'absolute', 
    top: '30%',
    marginLeft: '620px',
    width: '250px', // Set the desired width
    height: '250px',
    objectFit: 'cover',
  };

  const vibrantimage = {
    position: 'absolute', 
    top: '30%',
    marginLeft: '920px',
    width: '250px', // Set the desired width
    height: '250px',
    objectFit: 'cover',

  };

  const subcontent = {
    paddingBottom: '10px',
    fontWeight: '500', 
    fontSize: '1em',
    color:'DarkSlateGrey',
    fontFamily: '  Georgia,serif',
    marginLeft:'50px',
    alignItems: 'center',
    position: 'absolute', 
    top: '73%',
  };
  const content = {
    paddingBottom: '10px',
    fontWeight: '500', 
    fontSize: '1em',
    color:'DarkSlateGrey',
    fontFamily: '  Georgia,serif',
    marginLeft:'350px',
    alignItems: 'center',
    position: 'absolute', 
    top: '73%',
  };
  const officecontent = {
    paddingBottom: '10px',
    fontWeight: '500', 
    fontSize: '1em',
    color:'DarkSlateGrey',
    fontFamily: '  Georgia,serif',
    marginLeft:'650px',
    alignItems: 'center',
    position: 'absolute', 
    top: '73%',
  };
  const vibrancecontent = {
    paddingBottom: '10px',
    fontWeight: '500', 
    fontSize: '1em',
    color:'DarkSlateGrey',
    fontFamily: '  Georgia,serif',
    marginLeft:'950px',
    alignItems: 'center',
    position: 'absolute', 
    top: '73%',
  };
  const heading = {
    fontWeight: '200', 
    fontSize: '3em',
    color:'DarkSlateGrey',
    paddingTop: '10px',
    position: 'absolute', 
    top: '10%',
    left: '50%', 
   transform: 'translateX(-50%)',
   fontFamily: '  Georgia,serif',
   marginBottom: '10px', 
   borderBottom:'2px solid DarkSlateGrey',
  };

  return(
  <div ref={ref}>
    <div style={bodyStyle}>
      <h1 style={heading}>What We Offer</h1>
    <img src={customize} alt ='customized image'className='w-80 h-30 overflow-hidden container' style={profileimage} />
    <h1 style={subcontent}>Wall Art customization</h1>
    <img src={personalize} alt ='personalized'className='w-80 h-30 overflow-hidden container' style={personal} />
    <h1 style={content}>Framed directives</h1>
    <img src={office} alt ='office image'className='w-80 h-30 overflow-hidden container' style={officeImage} />
    <h1 style={officecontent}>Office space wall designs</h1>
    <img src={vibrance} alt ='thought wall'className='w-80 h-30 overflow-hidden container' style={vibrantimage} />
    <h1 style={vibrancecontent}>Image Framing</h1>
  </div> 
  <Footer/>
</div>
  );
}) ;

export default Services;