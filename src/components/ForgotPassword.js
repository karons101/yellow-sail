// src/components/ForgotPassword.js
import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../firebaseConfig'; // Adjust the path if necessary
import './Auth.css'; // Optional: Create a CSS file for styling

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors
        setSuccess(''); // Clear previous success messages

        try {
            await sendPasswordResetEmail(auth, email);
            setSuccess('Password reset email sent! Please check your inbox.'); // Success message
            setEmail(''); // Clear the email input
        } catch (err) {
            setError('Error sending password reset email. Please check the email address.'); // Error message
            setSuccess('');
        }
    };

    return (
        <div className="auth-container">
            <h2>Reset Password</h2>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <form onSubmit={handleResetPassword}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Send Password Reset Email</button>
            </form>
        </div>
    );
};

export default ForgotPassword;