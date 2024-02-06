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
    backgroundColor: 'rgba(169, 169, 169, 0.5)', 
    borderRadius: '10px',
    fontFamily: 'Georgia, serif',
    margin:'2px',
    
    
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
          <li style={itemStyle} className="mb-4 lg:mr-6">
            <Link to="/profile" className="py-2">
              Profile
            </Link>
          </li>
          <li style={itemStyle} className="mb-4 lg:mr-6">
            <Link to="/services" className="py-2">
              Services
            </Link>
          </li>
          <li style={itemStyle}className="mb-4 lg:mr-6">
            <Link to="/listings" className="py-2">
              Listings
            </Link>
          </li>
          <li style={itemStyle}className="mb-4 lg:mr-6">
            <Link to="/contacts" className="py-2">
              Contacts
            </Link>
          </li>
          <li style={itemStyle}className="mb-4">
            <a
              href="https://www.instagram.com/wall_art_heart?igsh=OHk4bmZrb3RkcjVy"
              className="py-2"
            >
              Designs
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
