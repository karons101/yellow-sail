// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__links">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/playlist">Playlist</a></li>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                </ul>
            </div>
            <div className="footer__social">
                <h3>Follow Us</h3>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
                <p>© 2025 Karons Built with <span className="love-icon">❤️</span></p>
            </div>
        </footer>
    );
};

export default Footer;