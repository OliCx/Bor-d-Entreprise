import React from "react";

import "../Css/Hero.css";

import stare from "../Assets/Stare.png";
import gravemaskinetest from "../Assets/Gravemaskine1.jpg";

const Hero = () => {
  return (
    <div>
      <div className="hero container">
        <div className="text--box">Borød Entreprise</div>
        <img
          className="gravemaskinetest gravemaskinecrop"
          src={gravemaskinetest}
        />
      </div>
    </div>
  );
};

export default Hero;
