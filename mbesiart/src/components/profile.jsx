import React from 'react';
import assets from '../assets/profile.jpg';
import Footer from './footer';

const Profile = React.forwardRef((props, ref) => {
  const bodyStyle = {
    backgroundColor: 'Gainsboro',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    margin: 0,
    padding: 0,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const profileimage = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    marginLeft: '100px',
    width: '400px', // Set the desired width
    height: 'auto',
    objectFit: 'cover',
  };

  const content = {
    fontWeight: '600',
    marginBottom: '5px',
    fontSize: '2em',
    color: 'DarkSlateGrey',
    fontFamily: 'Georgia, serif',
    marginLeft: '50px',
    left:'5%',
    position: 'absolute',
    top: '30%',
  };

  const subcontent = {
    paddingBottom: '10px',
    fontWeight: '600',
    marginBottom: '5px',
    fontSize: '1em',
    color: 'DarkSlateGrey',
    fontFamily: 'Georgia, serif',
    marginLeft: '50px',
    position: 'absolute',
    top: '45%',
    left:'5%',
  };

  // Media query for smaller screens
  const mediaQueryStyle = {
    '@media (max-width: 768px)': {
      profileimage: {
        width: '100%',
        marginLeft: '0',
      },
      content: {
        marginLeft: '0',
      },
      subcontent: {
        marginLeft: '0',
      },
    },
  };

  return (
    <div ref={ref}>
      <div style={bodyStyle}>
        <img src={assets} alt="profile" className='w-80 h-30 overflow-hidden container' style={profileimage} />
        <h1 style={{ ...content, ...mediaQueryStyle.content }}>WALLS THAT MAKE <br /> YOU WANT TO STAY</h1>
        <h2 style={{ ...subcontent, ...mediaQueryStyle.subcontent }}>Our specially designed Wall Art is created to<br />
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
