import React from 'react';
import assets from '../assets/designs.png';
import{AiFillInstagram,AiFillMail,AiOutlineWhatsApp}from'react-icons/ai';
import Footer from './footer';



const Contacts = React.forwardRef ((props,ref) => {
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

  const profileimage = {
    position: 'absolute', 
    top:'10%',
    Right: '50%',
    marginLeft: '100px',
    width: '460px', // Set the desired width
    height: '460px',
    objectFit: 'contain',
  };

  const content = {
    fontWeight: '400',
    marginBottom: '5px', 
    fontSize: '2em',
    color:'DarkSlateGrey',
    fontFamily: '  Georgia,serif',
    marginLeft:'600px',
    position: 'absolute', 
    top: '37%',
  };

  const subcontent = {
    paddingBottom: '10px',
    fontWeight:'300',
    marginBottom: '5px', 
    color:'DarkSlateGrey',
    fontFamily: '  Georgia,serif',
    marginLeft:'600px',
    alignItems: 'center',
    position: 'absolute', 
    top: '65%',
  };
  
  return(
  <div ref={ref}>
    <div style={bodyStyle}>
    <img src={assets} alt ='profile'className='w-80 h-30 overflow-hidden container' style={profileimage} />
    <h1 style={content}>To Choose From Our Endless designs<br></br> 
    <span className='text-gray-500'><a href= 'https://www.instagram.com/wall_art_heart?igsh=OHk4bmZrb3RkcjVy'> click here, </a></span>
    <br></br> Request your own custom made designs<br></br><span className='text-gray-500'>Contact us below:</span></h1>
    <h2 className='flex gap-5 text-3xl  pt-10'style={subcontent}>
    <a href="https://wa.me/+254745052800" target="_blank"><AiOutlineWhatsApp/></a>
    <a href= 'https://www.instagram.com/wall_art_heart?igsh=OHk4bmZrb3RkcjVy'>
          <AiFillInstagram/>
          </a>
          <a href='mailto:genmbesi@gmail.com'>
          <AiFillMail/>
          </a>
    </h2>
  </div> 
  <Footer/>
</div>
  );
}) ;

export default Contacts;