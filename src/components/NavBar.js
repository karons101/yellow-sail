// src/components/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMenu, IoClose } from 'react-icons/io5'; // Use IoMenu for hamburger icon
import './NavBar.scss'; // Import the SCSS file for styling
import './NavBar.css'; // Import the CSS file for styling

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`navbar ${isMobileMenuOpen ? 'scrolled' : ''}`}>
            <div className="logo">
                <img src="/images/kmusic.png" alt="Logo" /> {/* Adjust the path to your logo */}
            </div>

            <div className="navigation">
                <div className="nav-links">
                    <NavLink to="/" exact activeClassName="active">Home</NavLink>
                    <NavLink to="/news" activeClassName="active">News</NavLink>
                    <NavLink to="/about" activeClassName="active">About Us</NavLink>
                    <NavLink to="/favorite" activeClassName="active">Favorite</NavLink>
                    <NavLink to="/location" activeClassName="active">Location</NavLink>
                    <NavLink to="/get-started" activeClassName="active">Get Started</NavLink>
                </div>

                <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <IoClose size={30} /> : <IoMenu size={30} />} {/* Hamburger icon */}
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="mobile-dropdown">
                    <NavLink to="/" exact onClick={toggleMobileMenu}>Home</NavLink>
                    <NavLink to="/news" onClick={toggleMobileMenu}>News</NavLink>
                    <NavLink to="/about" onClick={toggleMobileMenu}>About Us</NavLink>
                    <NavLink to="/favorite" onClick={toggleMobileMenu}>Favorite</NavLink>
                    <NavLink to="/location" onClick={toggleMobileMenu}>Location</NavLink>
                    <NavLink to="/get-started" onClick={toggleMobileMenu}>Get Started</NavLink>
                </div>
            )}
        </nav>
    );
};

export default Navbar;