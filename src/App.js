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
      {/* <CustomPreloader time={3500}background='#09054a'>
        <Logo/>
      </CustomPreloader>      */}
      <Navbar/>
      <Intro/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
