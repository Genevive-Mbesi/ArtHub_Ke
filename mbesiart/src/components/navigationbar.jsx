import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const itemStyle = {
    padding: '0.2rem',
    marginBottom: '0.2rem',
    color: 'DarkSlateGrey',
    cursor: 'pointer',
    borderRadius: '10px',
    fontFamily: 'Georgia, serif',
    margin:'2px',
    border: '1px solid DarkSlateGrey',
    
    
  };
  
  return (
    <div className="container items-center justify-center font-serif text-teal-800 text-s">
      <nav className="">
        <div className="flex items-center">
          <div className="lg:hidden lg:flex flex-col lg:items-center absolute top-4 right-4">
            <h1 onClick={toggleMenu} className="cursor-pointer">
              <AiOutlineMenu />
            </h1>
          </div>
        </div>
        <ul
          className={`${
            showMenu
              ? "flex flex-col  font-serif lg:hidden p-4 rounded-lg"
              : "hidden"
          } lg:flex lg:flex-row lg:items-center absolute top-12 right-4 text-s flex mt-2`}
        >
          <li style={itemStyle}>
            <Link to="/profile" >
              Profile
            </Link>
          </li>
          <li style={itemStyle}>
            <Link to="/services">
              Services
            </Link>
          </li>
          <li style={itemStyle}>
            <Link to="/listings">
              Listings
            </Link>
          </li>
          <li style={itemStyle}>
            <Link to="/contacts">
              Contacts
            </Link>
          </li>
          <li style={itemStyle}>
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
