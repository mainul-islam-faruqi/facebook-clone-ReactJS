import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  return (
    // BEM namin convention
    <div className="app">
      <h1> let's build facebook </h1>
      {/* Header */}
      <Header></Header>

      {/* App body */}
        {/* Sidebar */}
        {/* Feed */}
        {/* widgets */}
    </div>
  );
}

export default App;
