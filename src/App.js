import React from 'react';
import Menu from './Menu/Menu';
import Home from './Home/Home';
// import About from './About/About';
import Contact from './Contact/Contact';
import './App.css';
import {
  BrowserRouter,
  Route,
  } from 'react-router-dom';



function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          
            <Menu />
            
            <Route path="/" exact component={Home} />
            
            <Route path="/Contact" exact component={Contact} />
            

          <p className="footer">An app by Dan Arango ™</p>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
