import React from 'react';
import assets from '../assets/profile.jpg';
import Footer from './footer';
import { Link } from 'react-router-dom';


const Profile = React.forwardRef((props, ref) => {
  const bodyStyle = {
    backgroundColor: 'Gainsboro',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    margin: 0,
    padding: 0,
    minHeight: '100vh', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const profileimage = {
    width: '400px', 
    height: 'auto',
    objectFit: 'cover',
    marginBottom: '20px',
  };

  const content = {
    fontWeight: '600',
    marginBottom: '5px',
    fontSize: '2em',
    color: 'DarkSlateGrey',
    fontFamily: 'Georgia, serif',
    textAlign: 'center', // Center text for responsiveness
  };

  const subcontent = {
    paddingBottom: '10px',
    fontWeight: '600',
    marginBottom: '5px',
    fontSize: '1em',
    color: 'DarkSlateGrey',
    fontFamily: 'Georgia, serif',
    textAlign: 'center', 
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
  };


  return (
    <div ref={ref}>
      <div style={bodyStyle}>
      <h1 style={itemStyle}>
          <Link to="/">
            Home
          </Link>
        </h1>
        <img src={assets} alt="profile" className='w-80 h-30 overflow-hidden container' style={profileimage} />
        <h1 style={content}>WALLS THAT MAKE <br /> YOU WANT TO STAY</h1>
        <h2 style={subcontent}>Our specially designed Wall Art is created to<br />
          especially give you an in-tune feeling with your environment<br />
          whether at home, office, leisure time, or hosting special events,<br />
          think of this as an elevator to your mood every time<br />
          that sets the tone of the room.
        </h2>
      </div>
      <Footer />
    </div>
  );
});

export default Profile;
