// src/components/Login.js
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebaseConfig'; // Adjust the path if necessary
import './Auth.css'; // Optional: Create a CSS file for styling

const Login = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors
        setSuccess(''); // Clear previous success messages

        try {
            await signInWithEmailAndPassword(auth, email, password);
            setSuccess('Login successful!'); // Optionally set a success message
            setEmail(''); // Clear the email input
            setPassword(''); // Clear the password input
            // You can set a token or perform other actions after successful login
            // For example, you might want to redirect the user or update the app state
        } catch (err) {
            setError('Invalid email or password'); // Display a user-friendly error message
            setSuccess('');
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
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
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;