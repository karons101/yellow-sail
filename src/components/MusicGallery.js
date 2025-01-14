// src/components/MusicGallery.js
import React from 'react';
import './MusicGallery.css'; // Import the CSS file for styling

const MusicGallery = () => {
    return (
        <div className="music-gallery">
            <h2>Music Gallery</h2>
            <div className="music-items">
                {/* Example music items */}
                <div className="music-item">
                    <img src="%PUBLIC_URL%/images/music1.jpg" alt="Music 1" />
                    <p>Track Title 1</p>
                </div>
                <div className="music-item">
                    <img src="%PUBLIC_URL%/images/music2.jpg" alt="Music 2" />
                    <p>Track Title 2</p>
                </div>
                <div className="music-item">
                    <img src="%PUBLIC_URL%/images/music3.jpg" alt="Music 3" />
                    <p>Track Title 3</p>
                </div>
                {/* Add more music items as needed */}
            </div>
        </div>
    );
};

export default MusicGallery;