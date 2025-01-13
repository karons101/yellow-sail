// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Header component that includes NavBar
import Home from './components/Home'; // Home component
import Playlist from './components/Playlist'; // Playlist component
import Profile from './components/Profile'; // Profile component
import Login from './components/Login'; // Login component
import Register from './components/Register'; // Register component
import MediaPlayer from './components/MediaPlayer'; // MediaPlayer component
import VideoGallery from './components/VideoGallery'; // VideoGallery component
import MusicGallery from './components/MusicGallary'; // MusicGallery component
import Upload from './components/Upload'; // Upload component
import Favorites from './components/Favorites'; // Favorites component
import Comments from './components/Comments'; // Comments component
import Notifications from './components/Notifications'; // Notifications component
import Settings from './components/Settings'; // Settings component
import NotFound from './components/NotFound'; // NotFound component for 404 pages

function App() {
  return (
    <Router>
      <Header /> {/* Header includes NavBar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/media-player" element={<MediaPlayer />} />
        <Route path="/video-gallery" element={<VideoGallery />} />
        <Route path="/music-gallery" element={<MusicGallery />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 pages */}
      </Routes>
    </Router>
  );
}

export default App;