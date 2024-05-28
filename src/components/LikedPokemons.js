import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const LikedPokemons = () => {
    // Accessing the global state from the context
    const { state } = useAppContext();

    return (
        <div className="liked-pokemons">
            {/* Heading for the section */}
            <h2>Pokemons You Have Liked ! ❤️</h2>
            {/* List of liked Pokemons */}
            <div className="pokemons-list">
                {/* Mapping through the liked Pokemons and displaying them */}
                {state.likedPokemons.map(pokemon => (
                    <div key={pokemon.id} className="pokemon-likecards">
                        {/* Displaying the Pokemon's image */}
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt={pokemon.name} />
                        {/* Displaying the Pokemon's name */}
                        <h3>{pokemon.name}</h3>
                    </div>
                ))}
            </div>
            {/* Link to navigate back to the WelcomeScreen */}
            <Link to="/" className="back-btn">Back</Link>
        </div>
    );
};

export default LikedPokemons;
