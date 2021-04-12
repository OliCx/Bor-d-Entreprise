import React, {useState, useEffect} from "react";

import Hero from "../Sections/Hero";
import About from "../Sections/About";
import CallToAction from "../Sections/CallToAction"

const Home = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0)
    
  }, [])
  
  props.setUserLocation("Home");
  return (
    <div>
      <Hero  />
      <About />
      <CallToAction />
    </div>
  );
};

export default Home;