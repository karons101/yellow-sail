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
import MusicGallery from './components/MusicGallery'; // MusicGallery component
import MediaGallery from './components/MediaGallery'; // MediaGallery component
import Upload from './components/Upload'; // Upload component
import Favorites from './components/Favorites'; // Favorites component
import Comments from './components/Comments'; // Comments component
import Notifications from './components/Notifications'; // Notifications component
import Settings from './components/Settings'; // Settings component
import NotFound from './components/NotFound'; // NotFound component for 404 pages
import Search from './components/Search'; // Import the Search component
import Footer from './components/Footer'; // Import the Footer component
import { AuthProvider } from './context/AuthContext'; // Import the AuthProvider
import ProtectedRoute from './routes/ProtectedRoute'; // Import the ProtectedRoute component
import Dashboard from './components/Dashboard'; // Dashboard component for registered users
import './App.css'; // Import your main CSS file for overall styling

function App() {
    const handleSearch = (query) => {
        console.log('Search query:', query);
        // Implement your search logic here
    };

    return (
        <AuthProvider>
            <Router>
                <Header />
                <div className="app-content">
                    <Search placeholder="Search for music..." onSearch={handleSearch} />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/playlist" element={<Playlist />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/media" element={<MediaGallery />} /> {/* Route for MediaGallery */}
                        <Route path="/media-player" element={<MediaPlayer />} />
                        <Route path="/video-gallery" element={<VideoGallery />} />
                        <Route path="/music-gallery" element={<MusicGallery />} />
                        <Route path="/upload" element={
                            <ProtectedRoute>
                                <Upload />
                            </ProtectedRoute>
                        } />
                        <Route path="/favorites" element={
                            <ProtectedRoute>
                                <Favorites />
                            </ProtectedRoute>
                        } />
                        <Route path="/comments" element={
                            <ProtectedRoute>
                                <Comments />
                            </ProtectedRoute>
                        } />
                        <Route path="/notifications" element={
                            <ProtectedRoute>
                                <Notifications />
                            </ProtectedRoute>
                        } />
                        <Route path="/settings" element={
                            <ProtectedRoute>
                                <Settings />
                            </ProtectedRoute>
                        } />
                        <Route path="/dashboard" element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        } />
                        <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 pages */}
                    </Routes>
                </div>
                <MediaPlayer /> {/* Always visible media player at the bottom */}
                <Footer /> {/* Include the Footer component here */}
            </Router>
        </AuthProvider>
    );
}

export default App;