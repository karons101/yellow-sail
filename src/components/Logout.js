// src/components/Logout.js
import React from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth }  from '../firebaseConfig'; // Adjust the path if necessary

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            alert('You have been logged out successfully!'); // Optional: You can remove this line
            navigate('/login'); // Redirect to the login page
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <div>
            <h2>Logout</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;