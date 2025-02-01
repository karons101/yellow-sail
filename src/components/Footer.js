// src/components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser , faSignInAlt, faMusic, faVideo } from '@fortawesome/free-solid-svg-icons';
import MediaPlayer from './MediaPlayer'; // Import your MediaPlayer component
import './Footer.css'; // Import your CSS for styling

const Footer = () => {
    return (
        <div className="footer-container">
            {/* Media Player Section */}
            <MediaPlayer /> {/* Use the existing MediaPlayer component */}

            {/* Footer Section */}
            <footer className="footer">
                <div className="footer-links">
                    <a href="/" aria-label="Home">
                        <FontAwesomeIcon icon={faHome} />
                    </a>
                    <a href="/profile" aria-label="Profile">
                        <FontAwesomeIcon icon={faUser } />
                    </a>
                    <a href="/login" aria-label="Login">
                        <FontAwesomeIcon icon={faSignInAlt} />
                    </a>
                    <a href="/media" aria-label="Media Gallery">
                        <FontAwesomeIcon icon={faMusic} />
                    </a>
                    <a href="/media/video-gallery" aria-label="Video Gallery">
                        <FontAwesomeIcon icon={faVideo} />
                    </a>
                </div>

                {/* Social Media Section */}
                <div className="footer-social">
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <p>Built with Love from Karons <span role="img" aria-label="yellow heart">💛</span></p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;