// src/components/Header.js
import React from 'react';
import './Header.scss'; // Ensure this matches the file name exactly
import NavBar from './NavBar'; // Import the NavBar component

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="/images/yellowwhite.png" alt="Logo" /> {/* Correct path to the logo */}
                <h1 className="brand-name">Yellow Sail</h1>
            </div>
            <NavBar /> {/* Include the NavBar component */}
            <div className="tagline">
                <p className="adventure-text">Set Sail for Adventure!</p> {/* Simple text without spans */}
            </div>
        </header>
    );
};

export default Header;