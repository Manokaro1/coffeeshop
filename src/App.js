import React from 'react';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <h1>Welcome to CoffeeShop</h1>
        <p>Best Coffee in Town</p>
      </div>
    </div>
  );
}

export default App;
