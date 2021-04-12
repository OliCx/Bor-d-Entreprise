import React, { useState } from "react";
import { Router } from "@reach/router";

import Nav from "./Sections/Nav";
import Footer from "./Sections/Footer";
import Home from "./Pages/Home";
import Projekter from "./Pages/Projekter";
import Services from "./Pages/Services";
import Kontakt from "./Pages/Kontakt";
import Beskæring from "./ServicesSub/Beskæring";

import "./App.css";

const App = () => {
  const [myLocation, setUserLocation] = useState("initial");
  return (
    <div id="top">
      <Nav myLocation={myLocation} />
      <Router>
        <Home path="/"  setUserLocation={setUserLocation}/>
        <Projekter path="/projekter" setUserLocation={setUserLocation} />
        <Services path="/services"  setUserLocation={setUserLocation}/>
        <Kontakt path="/kontakt" setUserLocation={setUserLocation} />    
        <Beskæring path="/Beskæring" setUserLocation={setUserLocation} />
      </Router>
      <Footer />
      
    </div>
  );
};

export default App;