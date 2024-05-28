import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WelcomeScreen = () => {
    // State to track dark mode
    const [darkMode, setDarkMode] = useState(false);

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(prevDarkMode => !prevDarkMode);
    };

    return (
        <div className={`welcome-screen ${darkMode ? 'dark-mode' : ''}`}>
            {/* Dark mode toggle button */}
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                {/* Displaying button text based on dark mode state */}
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>

            {/* Link to navigate to the Liked Pokemons page */}
            <Link to="/liked" className="liked-pokemons-link">
                {/* Button to access liked Pokemons */}
                <button className="liked-pokemons-toggle">
                    {/* Heart icon */}
                    <span className="heart-icon" role="img" aria-label="Heart">❤️</span>
                </button>
            </Link>

            {/* Instructions for the game */}
            <h2>How to Play PokeSwipe</h2>
            <h4>
                {/* Game instructions */}
                Pokemon Appear One at a Time <br/>
                Choose "Like" or "Dislike" <br/>
                Build Your Favorite Team
            </h4>

            {/* Start Button to begin the game */}
            <Link to={{ pathname: "/swipe", state: { darkMode } }}>
                <button className="link-btn">Let's Go!</button>
            </Link>
        </div>
    );
};

export default WelcomeScreen;
