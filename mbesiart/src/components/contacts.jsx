import React from 'react';
import assets from '../assets/designs.png';
import { AiFillInstagram, AiFillMail, AiOutlineWhatsApp } from 'react-icons/ai';
import Footer from './footer';
import { Link } from 'react-router-dom';

const Contacts = React.forwardRef((props, ref) => {
  const bodyStyle = {
    backgroundColor: 'Gainsboro',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    margin: 0,
    padding: 0,
    minHeight: '100vh', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const profileimage = {
    width: '460px',
    height: '460px',
    objectFit: 'contain',
    marginBottom: '20px', 
  };

  const content = {
    fontWeight: '400',
    marginBottom: '5px',
    fontSize: '2em',
    color: 'DarkSlateGrey',
    fontFamily: 'Georgia, serif',
    textAlign: 'center', 
  };

  const subcontent = {
    paddingBottom: '10px',
    fontWeight: '300',
    marginBottom: '5px',
    color: 'DarkSlateGrey',
    fontFamily: 'Georgia, serif',
    alignItems: 'center',
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
            Home Page
          </Link>
        </h1>
        <img src={assets} alt='profile' className='w-80 h-30 overflow-hidden container' style={profileimage} />
        <h1 style={content}>
          To Choose From Our Endless designs<br />
          <span className='text-gray-500'>
            <a href='https://www.instagram.com/wall_art_heart?igsh=OHk4bmZrb3RkcjVy'> click here, </a>
          </span>
          <br /> Request your own custom made designs<br />
          <span className='text-gray-500'>Contact us below:</span>
        </h1>
        <h2 className='flex gap-5 text-3xl pt-10' style={subcontent}>
        <a href='https://wa.me/+254745052800' target='_blank' rel='noreferrer'> 

            <AiOutlineWhatsApp />
          </a>
          <a href='https://www.instagram.com/wall_art_heart?igsh=OHk4bmZrb3RkcjVy'>
            <AiFillInstagram />
          </a>
          <a href='mailto:genmbesi@gmail.com'>
            <AiFillMail />
          </a>
        </h2>
      </div>
      <Footer />
    </div>
  );
});

export default Contacts;
