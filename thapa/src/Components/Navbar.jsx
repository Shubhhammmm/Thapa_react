import React from "react";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <ul>
            <li href="#">About</li>
            <li href="#">Home</li>
            <li href="#">Contact Us</li>
            <li href="#">Services</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              
              <FaFacebookSquare />
            </li>
            <li>
              
              <FaInstagramSquare />
            </li>
            <li>
              
              <FaYoutubeSquare />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
