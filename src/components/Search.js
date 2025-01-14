// src/components/Search.js
import React from 'react';
import './Search.css'; // Ensure you have the correct CSS file

const Search = ({ placeholder, onSearch }) => {
    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            onSearch(event.target.value);
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder={placeholder}
                onKeyPress={handleSearch}
                className="search-input"
            />
            <button className="search-button" onClick={() => onSearch(document.querySelector('.search-input').value)}>
                🔍
            </button>
        </div>
    );
};

export default Search;