import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CharactersList from './pages/CharacterDetails';

function App() {
  return (
    <>
    <header className='sticky top-0 bg-white shadow'>
      <nav className="mx-auto flex items-center justify-between px-14 py-3" aria-label="Global">
        <div className="flex justify-center lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="text-3xl text-gray-800 font-semibold">SWAPI</span>
          </a>
        </div>
      </nav>
    </header>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/characters/:id" Component={CharactersList} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
