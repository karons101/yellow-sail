import React, { useState, useRef, useEffect } from 'react';
import './MediaPlayer.css'; // Import your CSS for styling
import PlayIcon from '../assets/play-icon.svg'; // Adjust the path to your play icon
import PauseIcon from '../assets/pause-icon.svg'; // Adjust the path to your pause icon

const MediaPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(null);
    const [progress, setProgress] = useState(0); // Progress state
    const audioRef = useRef(null); // Reference to the audio element

    const tracks = [
        {
            id: 1,
            title: 'Track 1',
            url: 'path/to/track1.mp3',
            artist: 'Artist 1',
            album: 'Album 1',
            image: 'path/to/album1.jpg', // Replace with actual image path
        },
        {
            id: 2,
            title: 'Track 2',
            url: 'path/to/track2.mp3',
            artist: 'Artist 2',
            album: 'Album 2',
            image: 'path/to/album2.jpg', // Replace with actual image path
        },
        {
            id: 3,
            title: 'Track 3',
            url: 'path/to/track3.mp3',
            artist: 'Artist 3',
            album: 'Album 3',
            image: 'path/to/album3.jpg', // Replace with actual image path
        },
    ];

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTrackChange = (track) => {
        setCurrentTrack(track);
        setIsPlaying(true);
        setProgress(0); // Reset progress
        audioRef.current.src = track.url; // Set the new track URL
        audioRef.current.play(); // Play the new track
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
            {currentTrack && (
                <div className="now-playing">
                    <img src={currentTrack.image} alt={currentTrack.album} className="album-art" />
                    <div className="track-info">
                        <h3>{currentTrack.title}</h3>
                        <p>{currentTrack.artist}</p>
                    </div>
                </div>
            )}
            <div className="controls">
                <button onClick={handlePlayPause} className="play-pause-button">
                    <img src={isPlaying ? PauseIcon : PlayIcon} alt={isPlaying ? 'Pause' : 'Play'} />
                </button>
                <div className="progress-container">
                    <div className="progress-bar">
                        <div className="progress" style={{ width: `${progress}%` }}></div>
                    </div>
                    <span className="timer">
                        {currentTrack && `${formatTime(audioRef.current.currentTime)} / ${formatTime(audioRef.current.duration)}`}
                    </span>
                </div>
            </div>
            <div className="track-list">
                {tracks.map((track) => (
                    <button key={track.id} onClick={() => handleTrackChange(track)}>
                        {track.title}
                    </button>
                ))}
            </div>
            <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
        </div>
    );
};

export default MediaPlayer;