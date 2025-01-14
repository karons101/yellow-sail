// src/components/VideoGallery.js
import React from 'react';
import './VideoGallery.css'; // Import the CSS file for styling

const VideoGallery = () => {
    return (
        <div className="video-gallery">
            <h2>Video Gallery</h2>
            <div className="video-items">
                {/* Example video items */}
                <div className="video-item">
                    <img src="%PUBLIC_URL%/images/video1.jpg" alt="Video 1" />
                    <p>Video Title 1</p>
                </div>
                <div className="video-item">
                    <img src="%PUBLIC_URL%/images/video2.jpg" alt="Video 2" />
                    <p>Video Title 2</p>
                </div>
                <div className="video-item">
                    <img src="%PUBLIC_URL%/images/video3.jpg" alt="Video 3" />
                    <p>Video Title 3</p>
                </div>
                {/* Add more video items as needed */}
            </div>
        </div>
    );
};

export default VideoGallery;