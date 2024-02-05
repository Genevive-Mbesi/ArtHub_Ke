import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";

const Navigation = () => {

  const headingStyle = {
    padding: '10px',
    paddingBottom: '10px',
    marginBottom: '10px',
    color: 'DarkSlateGrey',
    cursor: 'pointer',
    fontFamily: 'Georgia, serif',
  };

  const itemStyle = {
    padding: '0.2rem',
    marginBottom: '0.2rem',
    color: 'DarkSlateGrey',
    cursor: 'pointer',
    fontFamily: 'Georgia, serif',
    margin: '2px',
  };

  const containerStyle = {
    display: 'flex',
    padding: '0.2rem',
    borderRadius: '10px',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '30px',
    margin: '5px',
  };
  
  const navStyle = {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center', // Center the content
  };

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav style={navStyle}>
      <h1 onClick={toggleMenu} className="cursor-pointer">
        <AiOutlineMenu />
      </h1>
      <ul
        className={`${
          showMenu
            ? "flex flex-col bg-teal-800 p-4 rounded-lg"
            : "hidden"
        } lg:flex lg:flex-row lg:items-center mt-2`}
        style={containerStyle}
      >
        {/* Render only on large screens */}
        <li style={itemStyle}>
          <Link to="/profile" style={headingStyle}>
            Profile
          </Link>
        </li>
        <li style={itemStyle}>
          <Link to="/services" style={headingStyle}>
            Services
          </Link>
        </li>
        <li style={itemStyle}>
          <Link to="/listings" style={headingStyle}>
            Team
          </Link>
        </li>
        <li style={itemStyle}>
          <Link to="/contacts" style={headingStyle}>
            Contacts
          </Link>
        </li>
        <li style={itemStyle}>
          <a href="https://www.instagram.com/wall_art_heart?igsh=OHk4bmZrb3RkcjVy" style={headingStyle}>
            Designs
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
