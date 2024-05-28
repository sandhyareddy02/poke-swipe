import React from 'react';
import { useAppContext } from '../context/AppContext';

const LikeDislikeButtons = ({ pokemon, getNextPokemon }) => {
  // Accessing the global state and dispatch function from the context
  const { dispatch, state } = useAppContext();

  // Event handler for liking a Pokemon
  const handleLike = () => {
    // Dispatching an action to add the liked Pokemon to the global state
    dispatch({ type: 'LIKE_POKEMON', payload: pokemon });
    // Getting the next Pokemon
    getNextPokemon();
  };

  // Event handler for disliking a Pokemon
  const handleDislike = () => {
    // Getting the next Pokemon without adding to the liked list
    getNextPokemon();
  };

  // Checking if the current Pokemon is already liked
  const isLiked = state.likedPokemons.some(p => p.id === pokemon.id);

  return (
    <div className='buttons'>
      {/* Button for liking a Pokemon */}
      <button className='likebtn' onClick={handleLike}>
        {/* Adding a heart icon based on whether the Pokemon is already liked */}
        <i className={`fa${isLiked ? 's' : 'r'} fa-heart`}></i> Like
      </button>
      {/* Button for disliking a Pokemon */}
      <button className='dislikebtn' onClick={handleDislike}>Dislike</button>
    </div>
  );
};

export default LikeDislikeButtons;
