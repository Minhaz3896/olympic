import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import React from 'react';
import Partners from './components/Partners';
import Catalog from './components/Catalog';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <Navbar />
      <Home /> 
      <About /> 
      <Partners/>
      <Catalog/>
      <Contact/>  
    </div>
  );
}

export default App;
