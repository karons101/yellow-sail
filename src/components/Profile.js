// src/components/Profile.js
import React, { useEffect, useState } from 'react';
import { auth, db } from './firebase'; // Import your Firebase config
import { doc, getDoc, setDoc } from 'firebase/firestore';

const Profile = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserProfile = async () => {
            const currentUser  = auth.currentUser ;
            if (currentUser ) {
                const userDoc = await getDoc(doc(db, 'profiles', currentUser.uid));
                if (userDoc.exists()) {
                    setUsername(userDoc.data().username);
                    setEmail(currentUser.email);
                }
            }
            setLoading(false);
        };

        fetchUserProfile();
    }, []);

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        const currentUser  = auth.currentUser ;

        if (currentUser ) {
            await setDoc(doc(db, 'profiles', currentUser.uid), {
                username,
                updated_at: new Date(),
            });
            alert('Profile updated successfully!');
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h2>User Profile</h2>
            <form onSubmit={handleUpdateProfile}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} readOnly />
                </div>
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default Profile;