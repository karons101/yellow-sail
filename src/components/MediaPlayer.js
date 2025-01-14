// src/components/MediaPlayer.js
import React, { useState } from 'react';
import './MediaPlayer.css'; // Import your CSS for styling
import VolumeIcon from '../assets/volume-icon.svg'; // Adjust the path to your volume icon

const MediaPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(null);
    const [volume, setVolume] = useState(50); // Volume state (0-100)

    const tracks = [
        { id: 1, title: 'Track 1', url: 'path/to/track1.mp3' },
        { id: 2, title: 'Track 2', url: 'path/to/track2.mp3' },
        { id: 3, title: 'Track 3', url: 'path/to/track3.mp3' },
    ];

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
        if (!isPlaying && currentTrack) {
            console.log('Playing:', currentTrack.title);
        } else {
            console.log('Paused');
        }
    };

    const handleTrackChange = (track) => {
        setCurrentTrack(track);
        setIsPlaying(true);
        console.log('Now playing:', track.title);
    };

    const handleVolumeChange = (event) => {
        setVolume(event.target.value);
        console.log('Volume set to:', event.target.value);
    };

    return (
        <div className="media-player">
            <h3>Now Playing: {currentTrack ? currentTrack.title : 'No track selected'}</h3>
            <div className="controls">
                <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
                <div className="track-list">
                    {tracks.map((track) => (
                        <button key={track.id} onClick={() => handleTrackChange(track)}>
                            {track.title}
                        </button>
                    ))}
                </div>
            </div>
            <div className="volume-control">
                <img src={VolumeIcon} alt="Volume Control" />
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={handleVolumeChange}
                />
            </div>
        </div>
    );
};

export default MediaPlayer;