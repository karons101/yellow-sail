// src/components/NavBar.js
import React, { useEffect, useState } from 'react';
import './NavBar.scss'; // Import the SCSS file for styling

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        setScrolled(offset > 200); // Change state based on scroll position
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="logo">
                <img src="/images/logo.png" alt="Logo" /> {/* Logo image */}
            </div>
            <div className="navigation">
                {/* Your navigation links here */}
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    );
};

export default NavBar;