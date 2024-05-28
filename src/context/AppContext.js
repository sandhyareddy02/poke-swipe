import React, { createContext, useReducer, useContext } from 'react';

// Initial state of the application
const initialState = {
    likedPokemons: [] // Initially, no Pokemons are liked
};

// Reducer function to manage state changes
const reducer = (state, action) => {
    switch (action.type) {
        // Action to like a Pokemon
        case 'LIKE_POKEMON':
            // Adding the liked Pokemon to the likedPokemons array in the state
            return { ...state, likedPokemons: [...state.likedPokemons, action.payload] };
        // Default case for unknown actions
        default:
            return state;
    }
};

// Creating a context for the application state
const AppContext = createContext();

// AppProvider component to provide state to the application
export const AppProvider = ({ children }) => {
    // Using useReducer hook to manage state with the defined reducer function and initial state
    const [state, dispatch] = useReducer(reducer, initialState);
    // Providing the state and dispatch function to the context
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children} {/* Rendering child components */}
        </AppContext.Provider>
    );
};

// Custom hook to access the application context
export const useAppContext = () => useContext(AppContext);
