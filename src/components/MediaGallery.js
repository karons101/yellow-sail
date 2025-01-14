// src/components/MediaGallery.js
import React from 'react';
import MusicGallery from './MusicGallery';
import VideoGallery from './VideoGallery';
import './MediaGallery.css'; // Optional: Create a CSS file for additional styling

const MediaGallery = () => {
    return (
        <div className="media-gallery">
            <MusicGallery />
            <VideoGallery />
        </div>
    );
};

export default MediaGallery;