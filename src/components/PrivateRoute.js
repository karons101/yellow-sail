// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Ensure this path is correct

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>; // Optional: You can add a loading spinner here
    }

    if (!user) {
        return <Navigate to="/login" />; // Redirect to login if not authenticated
    }

    return children; // Render the children if authenticated
};

export default PrivateRoute;