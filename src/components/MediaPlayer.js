import React, { useState, useRef, useEffect } from 'react';
import './MediaPlayer.css'; // Import your CSS for styling
import PlayIcon from '../assets/icons/play-icon.svg'; // Adjust the path to your play icon
import PauseIcon from '../assets/icons/pause-icon.svg'; // Adjust the path to your pause icon

const MediaPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0); // Progress state
    const audioRef = useRef(null); // Reference to the audio element

    // Define the current track as a constant
    const currentTrack = {
        title: 'Track 1',
        url: 'path/to/track1.mp3',
        artist: 'Artist 1',
        image: 'path/to/album1.jpg', // Replace with actual image path
    };

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const updateProgress = () => {
        if (audioRef.current) {
            const currentProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
            setProgress(currentProgress);
        }
    };

    useEffect(() => {
        const interval = setInterval(updateProgress, 1000); // Update progress every second
        return () => clearInterval(interval); // Cleanup on unmount
    }, [isPlaying]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="media-player">
            <div className="now-playing">
                <img src={currentTrack.image} alt={currentTrack.album} className="album-art" />
                <div className="track-info">
                    <p className="track-title">{currentTrack.title}</p>
                    <p className="track-artist">{currentTrack.artist}</p>
                </div>
                <button onClick={handlePlayPause} className="play-pause-button">
                    <img src={isPlaying ? PauseIcon : PlayIcon} alt={isPlaying ? 'Pause' : 'Play'} />
                </button>
                <div className="progress-container">
                    <div className="progress-bar">
                        <div className="progress" style={{ width: `${progress}%` }}></div>
                    </div>
                    <span className="timer">
                        {audioRef.current && `${formatTime(audioRef.current.currentTime)} / ${formatTime(audioRef.current.duration)}`}
                    </span>
                </div>
            </div>
            <audio ref={audioRef} src={currentTrack.url} onEnded={() => setIsPlaying(false)} />
        </div>
    );
};

export default MediaPlayer;