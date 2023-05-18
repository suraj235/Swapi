import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CharactersList from './pages/CharacterDetails';

function App() {
  return (
    <>
    <header className='sticky top-0 bg-white shadow'>
      <nav className="mx-auto flex items-center justify-between md:px-14 px-5 py-3 w-full" aria-label="Global">
        <div className="flex justify-center w-full">
          <a href="/" className=" p-1.5">
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
