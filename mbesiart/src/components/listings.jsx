import React from 'react';
import Footer from './footer';

import PriceList from '../assets/PriceList.png'

const Listings = React.forwardRef((props, ref) => {
  const bodyStyle = {
    backgroundColor: 'Gainsboro',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    margin: 0,
    padding: 0,
    minHeight: '100vh', // Using minHeight to ensure the content is centered vertically
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', // Center content vertically
  };
  const profileimage = {
    width: '500px',
    height: '500px',
    objectFit: 'contain',
    marginBottom: '20px', 
  };

  const subheading = {
    fontWeight: '300',
    fontSize: '2em',
    color: 'DarkSlateGrey',
    marginBottom: '10px', // Added margin to create space between subheading and myName
    textAlign: 'center', // Center text for responsiveness
    fontFamily: 'Georgia, serif',
  };

  const myName = {
    fontWeight: '300',
    fontSize: '1em',
    color: 'DarkSlateGrey',
    borderBottom: '2px solid DarkSlateGrey',
    textAlign: 'center', // Center text for responsiveness
    fontFamily: 'Georgia, serif',
  };
 


  return (
    <div ref={ref}>
      <div style={bodyStyle}>
        <img src={PriceList} alt='Price List'style={profileimage} />
        <h1 style={subheading}>Art is a friendly way of expressing our imagination,<br></br>
          It speaks a lot about our world and our lives.
        </h1>
        <h1 style={myName}>Genevive Mbesi, Artist</h1>
      </div>
      <Footer />
    </div>
  );
});

export default Listings;
