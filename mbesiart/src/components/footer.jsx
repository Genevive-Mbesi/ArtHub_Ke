import React from 'react';
import { AiFillInstagram, AiFillMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = React.forwardRef((props, ref) => {
  const currentYear = new Date().getFullYear();
  const headingStyle = {
    backgroundColor: 'DarkSlateGrey',
    color: 'Gainsboro',
    padding: '20px',
    fontFamily: '  Georgia,serif',
  };

  const footerContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const socialIcons = {
    fontSize: 'em',
    color: 'Gainsboro',
  };

  const navigationLinks = {
    
    paddingTop: '10px',
    margin: '0',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'DarkSlateGrey', 

  };

  const linkItem = {
    marginRight: '20px',
  };

  const linkStyle = {
    color: 'Gainsboro',
    textDecoration: 'none',
    fontSize: 'em',
  };

  const copyrightText = {
    textAlign: 'center',
    paddingTop: '10px',
    backgroundColor: 'DarkSlateGrey', 
  };

  return (
    <div ref={ref}>
      <footer style={headingStyle}>
        <div style={footerContainer}>
          <div className="flex items-center gap-5 text-3xl pt-5">
            <a href="https://www.instagram.com/wall_art_heart?igsh=OHk4bmZrb3RkcjVy" style={socialIcons}>
              <AiFillInstagram />
            </a>
            <a href="mailto:genmbesi@gmail.com" style={socialIcons}>
              <AiFillMail />
            </a>
          </div>
          <ul style={navigationLinks} className="pt-5">
            <li style={linkItem}>
              <Link to="/" style={linkStyle}>
                Home
              </Link>
            </li>
            <li style={linkItem}>
              <Link to="/profile" style={linkStyle}>
                Profile
              </Link>
            </li>
            <li style={linkItem}>
              <Link to="/services" style={linkStyle}>
                Services
              </Link>
            </li>
            <li style={linkItem}>
              <Link to="/contacts" style={linkStyle}>
                Contacts
              </Link>
            </li>
          </ul>
          <p style={copyrightText}>genmbesi@gmail.com | &copy; {currentYear}</p>
        </div>
      </footer>
    </div>
  );
});

export default Footer;
