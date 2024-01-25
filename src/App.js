import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import React from 'react';
import Partners from './components/Partners';
// import Catalog from './components/Catalog';
import Contact from './components/Contact';
import Reviews from './components/Reviews';


function App() {
  return (
    <div>
      <Navbar />
      <Home /> 
      <About /> 
      <Partners/>
      {/* <Catalog/> */}
      <Reviews/>
      <Contact/>
      
    </div>
  );
}

export default App;
