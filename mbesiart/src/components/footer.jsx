import React from 'react';
import{AiFillInstagram,AiFillMail}from'react-icons/ai'
import {Link} from "react-router-dom";

const Footer = React.forwardRef ((props,ref) => {
    const currentYear = new Date().getFullYear();
    const headingStyle = {
        backgroundColor: 'DarkSlateGrey',
        color:'Gainsboro',
        
      };

  return (
    <div ref={ref}>
    <footer style={headingStyle}>
      <div id='footer' className="container mx-auto  flex items-center justify-center flex gap-5 text-3xl  pt-5">
          <a href= 'https://www.instagram.com/wall_art_heart?igsh=OHk4bmZrb3RkcjVy'>
          <AiFillInstagram/>
          </a>
          <a href='mailto:genmbesi@gmail.com'>
          <AiFillMail/>
          </a>
      </div>
      <div>
        <ul className=' flex justify-center pt-5'>
            <li className='mr-10 list-disc'>
             <Link to='/profile'>
              Profile
             </Link>
            </li>
            <li className='mr-10 list-disc'>
             <Link to='/services'>
             Services
             </Link>
            </li>
            <li className='list-disc'>
             <Link to='/contacts'>
             Contacts
             </Link>
            </li>
        </ul>
      </div>
      <p className=' flex justify-center pt-5'>genmbesi@gmail.com | &copy; {currentYear}</p>
    </footer>
    </div>
  );
});

export default Footer;
