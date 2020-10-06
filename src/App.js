import React from "react";

import Nav from "./Sections/Nav";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Footer from "./Sections/Footer";

import "./App.css";

const App = () => {
  return (
    <div id="top">
      <Nav />
      <Hero />
      <About />
      <Footer />
    </div>
  );
};

export default App;
