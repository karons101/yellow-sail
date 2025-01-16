// src/components/Register.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Ensure this is a named import
import './Auth.css'; // Optional: Create a CSS file for styling

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors
        setSuccess(''); // Clear previous success messages

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setSuccess('Registration successful!'); // Optionally set a success message
            setEmail(''); // Clear the email input
            setPassword(''); // Clear the password input
        } catch (err) {
            // Handle specific error messages
            if (err.code === 'auth/invalid-api-key') {
                setError('Invalid API key. Please check your Firebase configuration.');
            } else {
                setError(err.message); // Display the error message from Firebase
            }
            setSuccess('');
        }
    };

    return (
        <div className="auth-container">
            <h2>Register</h2>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;