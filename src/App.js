import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import React from 'react';
import Partners from './components/Partners';


function App() {
  return (
    <div>
      <Navbar />
      <Home /> 
      <About /> 
      <Partners/>   
    </div>
  );
}

export default App;
