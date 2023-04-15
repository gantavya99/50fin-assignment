import React from 'react';
import './Nav.css'; // Import the CSS file for styling
import logo from "../../assets/logo1.png";
const Nav = () => {
    return (
        <nav>
            <ul>
                
                <img className="logo" src={logo}/>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Nav;
