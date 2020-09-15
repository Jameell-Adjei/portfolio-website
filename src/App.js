import React from 'react';
import './styles/app.scss';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Project from './components/Project';

function App() {
  return (
    
    <div className="App">
     
      <Navbar/>
      <Intro/>
      <About/>
      <Project/>
    </div>
  );
}

export default App;
