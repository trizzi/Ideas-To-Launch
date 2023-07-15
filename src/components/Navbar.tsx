import React from "react";
import {  NavLink } from "react-router-dom";


const Navbar = () => {
  return <div>
    <div>Ideas To Launch</div>
    <div>
        <ul>
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>
    </div>
  </div>;
};

export default Navbar;
