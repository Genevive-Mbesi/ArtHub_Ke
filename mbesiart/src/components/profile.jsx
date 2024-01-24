import React from 'react';
import assets from '../assets/profile.jpg';


const Profile = React.forwardRef ((props,ref) => {
  const bodyStyle = {
    backgroundColor: 'Gainsboro',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    margin: 0,
    padding: 0,
    height: '100vh',
    alignItems: 'center',
  };

  const profileimage = {
    position: 'absolute', 
    top: '30%',
    left: '50%',
    marginLeft: '100px',
    width: '460px', // Set the desired width
    height: 'auto',
    objectFit: 'cover',
  };

  const content = {
    fontWeight: '600',
    marginBottom: '5px', 
    fontSize: '2em',
    color:'DarkSlateGrey',
    fontFamily: '  Georgia,serif',
    marginLeft:'50px',
    position: 'absolute', 
    top: '37%',
  };

  const subcontent = {
    paddingBottom: '10px',
    fontWeight: '600',
    marginBottom: '5px', 
    fontSize: '1em',
    color:'DarkSlateGrey',
    fontFamily: '  Georgia,serif',
    marginLeft:'50px',
    alignItems: 'center',
    position: 'absolute', 
    top: '55%',
  };
  
  return(
  <div ref={ref}>
    <div style={bodyStyle}>
    <img src={assets} alt ='profile image'className='w-80 h-30 overflow-hidden container' style={profileimage} />
    <h1 style={content}>WALLS THAT MAKE <br></br> YOU WANT TO STAY</h1>
    <h2 style={subcontent}>Our special designed Wall Art are created to<br></br> 
    especially give you an intune feeling with your environment<br></br> whether
     at home, office, leisure time or hosting special events,<br></br>think of 
     this as an elevator to your mood everytime<br></br>that sets the tone of  the room.
    </h2>
  </div> 
</div>
  );
}) ;

export default Profile;