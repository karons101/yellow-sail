// src/routes/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Adjust the path to your AuthContext

const ProtectedRoute = ({ children }) => {
    const { auth } = useAuth(); // Get authentication status from context

    if (!auth.token) {
        return <Navigate to="/login" replace />; // Redirect to login if not authenticated
    }

    return children; // Render the protected component if authenticated
};

export default ProtectedRoute;