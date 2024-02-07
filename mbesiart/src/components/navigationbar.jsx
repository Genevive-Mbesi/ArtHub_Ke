import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
 
  const navContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  const headingStyle = {
    backgroundColor: 'DarkSlateGrey',
    color: 'Gainsboro',
    padding: '30px',
    fontFamily: '  Georgia,serif',
    color: 'white',
    cursor: 'pointer',
    fontFamily: 'Georgia, serif',
    alignItems:'center',
    justifyContent:'center',
  };
  
  return (
    <div style={headingStyle} >
      <nav style={navContainer} >
        <div className="flex items-center">
          <div className="lg:hidden lg:flex flex-col lg:items-center">
            <h1 onClick={toggleMenu} className="cursor-pointer">
              <AiOutlineMenu />
            </h1>
          </div>
        </div>
        <ul
          className={`${
            showMenu
              ? "flex flex-col  font-serif bg-gray-100 lg:hidden rounded-lg"
              : "hidden"
          } lg:flex lg:flex-row lg:items-center flex`}
        >
          <li style={headingStyle}>
            <Link to="/profile" >
              Profile
            </Link>
          </li>
          <li style={headingStyle}>
            <Link to="/services">
              Services
            </Link>
          </li>
          <li style={headingStyle}>
            <Link to="/listings">
              Listings
            </Link>
          </li>
          <li style={headingStyle}>
            <Link to="/contacts">
              Contacts
            </Link>
          </li>
          <li style={headingStyle}>
            <a
              href="https://www.instagram.com/wall_art_heart?igsh=OHk4bmZrb3RkcjVy">
              Designs
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
