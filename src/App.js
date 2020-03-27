import React from 'react';
import Menu from './Menu/Menu';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import About from './About/About';
// import About from './About/About';
import Contact from './Contact/Contact';
import './App.css';

import  { FaLinkedin } from 'react-icons/fa';
import  { MdMail} from 'react-icons/md';

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
            <Route path="/About" exact component={About} />
            <Route path="/Contact" exact component={Contact} />
            <Route path="/Projects" exact component={Projects} />
            

          <div className="footer">
            <div className="footerIcons">
              <a href="mailto:daniel.arango@gmx.com" subject="Hi Dan"><MdMail /></a>
              <a href="https://www.linkedin.com/in/daniel-arango-68503427/" target="blank"><FaLinkedin /></a>
            </div>           
            <p className="footerTitle">An app by Dan Arango ™</p>
          </div>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
