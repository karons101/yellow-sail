// src/components/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnchor, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import Font Awesome icons
import './NavBar.css'; // Import the CSS file for styling

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`navbar ${isMobileMenuOpen ? 'scrolled' : ''}`}>
            <div className="logo">
                <img src="/images/yellowwhite.png" alt="Logo" /> {/* Adjust the path to your logo */}
            </div>

            <div className="navigation">
                <div className="nav-links">
                    <NavLink to="/" exact activeClassName="active">Home</NavLink>
                    <NavLink to="/news" activeClassName="active">News</NavLink>
                    <NavLink to="/about" activeClassName="active">About Us</NavLink> {/* About Us link */}
                    <NavLink to="/login" activeClassName="active">Get Started</NavLink>
                </div>

                <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? (
                        <FontAwesomeIcon icon={faTimes} size="2x" color="#ffcc00" /> // Close icon
                    ) : (
                        <FontAwesomeIcon icon={faAnchor} size="2x" color="#ffcc00" /> // Anchor icon
                    )}
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="mobile-dropdown">
                    <NavLink to="/" exact onClick={toggleMobileMenu}>Home</NavLink>
                    <NavLink to="/news" onClick={toggleMobileMenu}>News</NavLink>
                    <NavLink to="/about" onClick={toggleMobileMenu}>About Us</NavLink> {/* About Us link */}
                    <NavLink to="/login" onClick={toggleMobileMenu}>Get Started</NavLink>
                </div>
            )}
        </nav>
    );
};

export default Navbar;