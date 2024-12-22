import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import React from "react";
import Partners from "./components/Partners";
import Catalog from "./components/Catalog";
import Contact from "./components/Contact";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Product from "./components/Product";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Partners />
      <Product />
      <Catalog />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
