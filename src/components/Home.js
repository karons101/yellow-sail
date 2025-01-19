// src/components/Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Home.css'; // Import your CSS for styling

const Home = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleVideoClick = (videoSrc) => {
        setSelectedVideo(videoSrc);
    };

    return (
        <div className="home">
            <h1>Welcome to Yellow Sail</h1>
            <p>Discover your favorite music and videos!</p>

            {/* Video Section */}
            <div className="video-section">
                <h2>Featured Videos</h2>
                <div className="video-thumbnails">
                    <div className="video-thumbnail" onClick={() => handleVideoClick('/videos/house-by-nature.mp4')}>
                        <div className="thumbnail-container">
                            <img src="/thumbnails/house-on-nature-thumbnail.jpg" alt="House on Nature" />
                            <div className="play-button">▶</div>
                        </div>
                        <h3>House on Nature</h3>
                    </div>
                    <div className="video-thumbnail" onClick={() => handleVideoClick('/videos/video2.mp4')}>
                        <div className="thumbnail-container">
                            <img src="/thumbnails/video2-thumbnail.jpg" alt="Video 2" />
                            <div className="play-button">▶</div>
                        </div>
                        <h3>Elder skit</h3>
                    </div>
                    <div className="video-thumbnail" onClick={() => handleVideoClick('/videos/video3.mp4')}>
                        <div className="thumbnail-container">
                            <img src="/thumbnails/video3-thumbnail.jpg" alt="Video 3" />
                            <div className="play-button">▶</div>
                        </div>
                        <h3>DavidO song</h3>
                    </div>
                </div>
                {/* Updated View More Videos Button */}
                <Link to="/video-gallery">
                    <button className="view-more-button">View More Videos</button>
                </Link>
            </div>

            {/* Video Player Modal */}
            {selectedVideo && (
                <div className="video-modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setSelectedVideo(null)}>&times;</span>
                        <video controls aria-label="Selected Video" className="modal-video">
                            <source src={selectedVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;