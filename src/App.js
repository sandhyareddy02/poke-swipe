import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update the import to use Routes

import WelcomeScreen from './components/WelcomeScreen';
import PokemonCard from './components/PokemonCard';
import LikedPokemons from './components/LikedPokemons';
import { AppProvider } from './context/AppContext';
import './index.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentId, setCurrentId] = useState(1);

  return (
    <AppProvider>
      <Router>
        <div className='app'>
          <Routes>
            <Route path="/" element={<WelcomeScreen setDarkMode={setDarkMode} />} /> {/* Update to use element prop */}
            <Route path="/swipe" element={<PokemonCard currentId={currentId} darkMode={darkMode} />} /> {/* Update to use element prop */}
            <Route path="/liked" element={<LikedPokemons />} /> {/* Update to use element prop */}
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
