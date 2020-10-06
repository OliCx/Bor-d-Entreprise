import React from "react";

import "../Css/About.css";
import gravemaskinetest from "../Assets/Gravemaskine1.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about--container">
        <div className="about--container--one">
          <div className="box--zero">
            <h1 className="color">Text Text Entreprenør</h1>
          </div>
        </div>
        <div className="about--container--two">
          <div className="box--one">
            <img className="box--one-crop" src={gravemaskinetest} />
          </div>
          <h1 className="about"></h1>
          <div className="box--one--text"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
