// src/components/PrivateRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider'; // Adjust the path if necessary

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div>Loading...</div>; // Optional: You can add a loading spinner here
    }

    if (!user) {
        return <Navigate to="/login" />; // Redirect to login if not authenticated
    }

    return children; // Render the children if authenticated
};

export default PrivateRoute;