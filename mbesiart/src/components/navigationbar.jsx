import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="container items-center justify-center mx-auto text-gray-100 text-s">
      <nav className="py-5 pl-4 lg:pl-0 flex flex-col lg:flex-row lg:justify-between fixed top-0 left-0 right-0  z-10">
        <div className="flex items-center">
          <div className="lg:hidden lg:flex flex-col lg:items-center absolute top-8 right-4 mt-2">
            <h1 onClick={toggleMenu} className="cursor-pointer">
              <AiOutlineMenu />
            </h1>
          </div>
        </div>
        <ul
          className={`${
            showMenu
              ? "flex flex-col bg-teal-800 p-4 rounded-lg"
              : "hidden"
          } lg:flex lg:flex-row lg:items-center absolute top-12 right-4 text-s flex mt-2`}
        >
          <li className=" mb-4 lg:mr-10  ">
            <Link to="/profile">Profile</Link>
          </li>
          <li className=" mb-4 lg:mr-10">
            <Link to="/services">Services</Link>
          </li>
          <li className=" mb-4 lg:mr-10">
            <Link to="/listings">listings</Link>
          </li>
          
          <li className=" mb-4 lg:mr-10">
            <Link to="/contacts">contacts</Link>
          </li>
          <li className=" mb-4 " >
            <a href="https://www.instagram.com/wall_art_heart?igsh=OHk4bmZrb3RkcjVy">
              Designs
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
