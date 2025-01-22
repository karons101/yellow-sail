import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Home.css'; // Import your CSS for styling

const Home = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    // Array of video data
    const videos = [
        {
            title: "House on Nature",
            videoSrc: "/videos/house-on-nature-480p.mp4",
            thumbnail: "/thumbnails/house-on-nature-360.jpg"
        },
        {
            title: "Boat Sail",
            videoSrc: "/videos/boat-sail-480p.mp4",
            thumbnail: "/thumbnails/boat-sail-360.jpg"
        },
        {
            title: "Two Boats Sail",
            videoSrc: "/videos/two-boats-sail-480p.mp4",
            thumbnail: "/thumbnails/two-boats-sail-360.jpg"
        }
    ];

    const handleVideoClick = (videoSrc) => {
        // If the same video is clicked again, toggle it off
        setSelectedVideo(selectedVideo === videoSrc ? null : videoSrc);
    };

    return (
        <div className="home">
            <h1>Welcome to Yellow Sail</h1>
            <p>Explore your favorite music and videos!</p>

            {/* Video Section */}
            <div className="video-section">
                <h2>Featured Videos</h2>
                <div className="video-thumbnails">
                    {videos.map((video, index) => (
                        <div 
                            className="video-thumbnail" 
                            key={index} 
                            onClick={() => handleVideoClick(video.videoSrc)}
                            role="button" // Accessibility improvement
                            tabIndex={0} // Make it focusable
                            onKeyPress={(e) => e.key === 'Enter' && handleVideoClick(video.videoSrc)} // Handle keyboard interaction
                        >
                            <div className="thumbnail-container">
                                <img src={video.thumbnail} alt={video.title} className="thumbnail-image" />
                                <div className="play-button">▶</div>
                            </div>
                            <h3>{video.title}</h3>
                        </div>
                    ))}
                </div>
                {/* Updated View More Videos Button */}
                <Link to="/video-gallery">
                    <button className="view-more-button">View More Videos</button>
                </Link>
            </div>

            {/* Video Player - Displayed in the same position as the thumbnail */}
            <div className="video-player">
                {selectedVideo && (
                    <video controls aria-label="Selected Video" className="inline-video" autoPlay>
                        <source src={selectedVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
        </div>
    );
};

export default Home;