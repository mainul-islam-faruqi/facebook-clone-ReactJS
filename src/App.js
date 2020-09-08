import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

function App() {
  return (
    // BEM namin convention
    <div className="app">
      {/* Header */}
      <Header></Header>

      {/* App body */}
      <div className="app__body">
          {/* Sidebar */}
          <Sidebar style={{width:"600px"}}></Sidebar>
          {/* Feed */}
          <Feed />
          {/* widgets */}
          <Widgets />
      </div>
        
    </div>
  );
}

export default App;
