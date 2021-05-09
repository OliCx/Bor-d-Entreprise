import React, { useState, useEffect } from "react";

import "../Css/Hero.css";

import gravemaskinetest from "../Assets/Gravemaskine1.jpg";
import Forside1 from "../Assets/Forside1.jpg"
import Forside2 from "../Assets/Forside2.jpg"
import Forside3 from "../Assets/Forside3.jpg"
import Forside4 from "../Assets/Forside4.jpg"
import Forside5 from "../Assets/Forside5.jpg"
import Forside6 from "../Assets/Forside6.jpg"
import Forside7 from "../Assets/ForsideTraktor.jpg"

const Hero = (props) => {
  const [imageRender, setImageRender] = useState(1)
  const [animateState, setAnimateState] = useState(1)

  useEffect(() => {
    if(imageRender === 1) {
      setTimeout(() => {
        setImageRender(2)
      }, 0)
    }
    
    setTimeout(() => {
      if(imageRender === 4) {
        setImageRender(2)
      } else {
        setImageRender(imageRender + 1)
      }
      
    }, 12000)

  }, [imageRender])  

  return (
    <div>
      <div className="hero--container">
        <div className="text--box">Borød Entreprise</div>
        <img
          className={`gravemaskinetest gravemaskinecrop  ${imageRender === 2 ? ('rendered') : ('hidden')} ${imageRender === 2 ? ('unzoomed') : ('zoomed')}`}
          src={Forside1}
        />
        <img
          className={`gravemaskinetest gravemaskinecrop  ${imageRender === 3 ? ('rendered') : ('hidden')} ${imageRender === 3 ? ('unzoomed') : ('zoomed')}`}
          src={Forside7}
        />
        <img
          className={`gravemaskinetest gravemaskinecrop ${imageRender === 4 ? ('rendered') : ('hidden')} ${imageRender === 4 ? ('unzoomed') : ('zoomed')}`}
          src={Forside6}
        />
      </div>
    </div>
  );
};

export default Hero;