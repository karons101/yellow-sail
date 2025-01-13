// src/components/NavBar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu, IoClose, IoAnchor } from "react-icons/io5"; // Importing icons
import './NavBar.css'; // Import the CSS file for styling

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close state
    };

    return (
        <nav className="navbar">
            <div className="nav__toggle" onClick={toggleMenu}>
                {isMenuOpen ? <IoClose /> : <IoMenu />} {/* Toggle icon */}
            </div>
            <ul className={`nav__list ${isMenuOpen ? "show-menu" : ""}`}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/playlist">Playlist</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
            </ul>
            <div className="nav__logo">
                <img src={`${process.env.PUBLIC_URL}/images/kmusic.png`} alt="Logo" />
            </div>
            <div className="nav__anchor">
                <IoAnchor /> {/* Ship anchor icon */}
            </div>
        </nav>
    );
};

export default NavBar;