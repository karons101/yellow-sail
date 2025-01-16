// src/context/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebaseConfig'; // Correctly import the default export
import { onAuthStateChanged } from 'firebase/auth';

// Create the AuthContext
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
    const [user, setUser ] = useState(null); // Track the authenticated user
    const [loading, setLoading] = useState(true); // Track loading state

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser (user); // Set the user state
            setLoading(false); // Set loading to false once the user state is determined
        });

        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

// Create a custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};