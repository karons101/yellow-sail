// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Import your CSS for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/playlist">Playlist</a></li>
                            <li><a href="/profile">Profile</a></li>
                            <li><a href="/login">Login</a></li>
                            <li><a href="/register">Register</a></li>
                            <li><a href="/media">Media Gallery</a></li>
                            <li><a href="/video-gallery">Video Gallery</a></li>
                            <li><a href="/music-gallery">Music Gallery</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="footer-social">
                    
                    <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                       <i className="fab fa-facebook-f"></i></a>
                    
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                       <i className="fab fa-twitter"></i></a>

                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                       <i className="fab fa-instagram"></i></a>

                        <p>Built with Love from Karons <span role="img" aria-label="yellow heart">💛</span></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;