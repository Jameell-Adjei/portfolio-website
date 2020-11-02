import React from 'react';

import './styles/app.scss';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {CustomPreloader} from 'react-preloaders';
import Logo from './components/Logo';


function App() {


  return (
    
    <div className="App">
     
      <Navbar/>
      <Intro/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>

      <CustomPreloader time={3500}background='#000000'>
        <Logo/>
      </CustomPreloader>
    </div>
  );
}

export default App;
