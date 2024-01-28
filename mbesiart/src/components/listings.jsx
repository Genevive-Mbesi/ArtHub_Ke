import React from 'react';
import Footer from './footer';
import { Link } from 'react-router-dom';

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
  const itemStyle = {
    padding: '5px',
    marginBottom: '10px',
    color: 'DarkSlateGrey',
    cursor: 'pointer',
    backgroundColor: 'rgba(169, 169, 169, 0.5)', 
    borderRadius: '10px',
    margin: '3%', 
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Georgia, serif',
    borderTop: '2px solid DarkSlateGrey',
    
  };


  return (
    <div ref={ref}>
      <div style={bodyStyle}>
      <h1 style={itemStyle}>
          <Link to="/">
            Home Page
          </Link>
        </h1>
        <h1 style={subheading}>Art is a friendly way of expressing our imagination,<br></br>
          It speaks a lot about our world and our lives.
        </h1>
        <h1 style={myName}>Genevive Mbesi, CEO</h1>
      </div>
      <Footer />
    </div>
  );
});

export default Listings;
