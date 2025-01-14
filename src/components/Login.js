// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css'; // Optional: Create a CSS file for styling

const Login = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://your-backend-api/login', {
                email,
                password,
            });
            setToken(response.data.token); // Assuming the token is returned in the response
            // Redirect or perform other actions after successful login
        } catch (err) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
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