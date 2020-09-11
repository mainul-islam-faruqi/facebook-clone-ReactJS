import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import { useStateValue } from "./StateProvider";

function App() {
  const user = "Mainuyl";
  // const [{user}, dispatch] = useStateValue();
  return (
    // BEM namin convention
    <div className="app">
      {
        !user?(
        <Login/>
        ):(
          <>
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
        </>
        )
        
      }
        
    </div>
  );
}

export default App;
