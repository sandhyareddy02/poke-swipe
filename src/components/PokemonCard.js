import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LikeDislikeButtons from './LikeDislikeButtons';

// Function to fetch Pokemon data from the API
const fetchPokemon = async (id) => {
    // Fetching Pokemon data from the API using the provided ID
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    // Returning the retrieved data
    return response.data;
};

const PokemonCard = ({ currentId, darkMode }) => {
    // State to store the fetched Pokemon data
    const [pokemon, setPokemon] = useState(null);

    // Effect to fetch Pokemon data when the component mounts or currentId changes
    useEffect(() => {
        // Function to fetch and set Pokemon data
        const getPokemon = async () => {
            // Fetching Pokemon data based on the currentId
            const data = await fetchPokemon(currentId);
            // Setting the fetched Pokemon data to state
            setPokemon(data);
        };
        // Calling the getPokemon function
        getPokemon();
    }, [currentId]); // Dependency array to re-run effect when currentId changes

    // Function to get the next Pokemon
    const getNextPokemon = () => {
        // Generating a random ID for the next Pokemon
        const nextId = Math.floor(Math.random() * 151) + 1;
        // Fetching and setting the next Pokemon data
        fetchPokemon(nextId)
            .then(data => setPokemon(data))
            .catch(error => console.error('Error fetching next pokemon:', error));
    };

    // If Pokemon data is not fetched yet, display loading message
    if (!pokemon) return <div>Loading...</div>;

    // Render the Pokemon card with fetched data
    return (
        <div className={`pokemon-card ${darkMode ? 'dark-mode' : ''}`}>
            {/* Displaying the Pokemon image */}
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt={pokemon.name} />
            {/* Displaying the Pokemon name */}
            <h2>{pokemon.name}</h2>
            {/* Displaying Pokemon abilities and types */}
            <div className='card-list'>
                <div className='abilities'>
                    {pokemon.abilities.map((ability, index) => (
                        <div key={index} className='ability-box'>
                            {ability.ability.name}
                        </div>
                    ))}
                </div>
                <div className='types'>
                    {pokemon.types.map((type, index) => (
                        <div key={index} className='type-box'>
                            {type.type.name}
                        </div>
                    ))}
                </div>
            </div>
            {/* Rendering Like and Dislike buttons */}
            <LikeDislikeButtons pokemon={pokemon} getNextPokemon={getNextPokemon} />
        </div>
    );
};

export default PokemonCard;
