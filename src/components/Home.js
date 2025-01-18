// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Home.css'; // Import your CSS for styling

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to Yellow Sail</h1>
            <p>Discover your favorite music and videos!</p>

            {/* Video Section */}
            <div className="video-section">
                <h2>Featured Videos</h2>
                <div className="video-thumbnails">
                    <div className="video-thumbnail">
                        <div className="thumbnail-container">
                            <img src="path/to/video1-thumbnail.jpg" alt="Video 1" />
                            <div className="play-button">▶</div>
                        </div>
                        <h3>Sabinus skit</h3>
                    </div>
                    <div className="video-thumbnail">
                        <div className="thumbnail-container">
                            <img src="path/to/video2-thumbnail.jpg" alt="Video 2" />
                            <div className="play-button">▶</div>
                        </div>
                        <h3>Elder skit</h3>
                    </div>
                    <div className="video-thumbnail">
                        <div className="thumbnail-container">
                            <img src="path/to/video3-thumbnail.jpg" alt="Video 3" />
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
        </div>
    );
};

export default Home;