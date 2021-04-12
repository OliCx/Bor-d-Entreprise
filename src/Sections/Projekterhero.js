import React from "react";

import "../Css/ServicesSub.css";

import gravemaskineprojekter from "../Assets/gravemaskineprojekter.jpg";
import projekterbillede from "../Assets/Projekter-billede.jpg"

const Projekterhero = () => {
  return (
    <div>
      <div className="hero--projekter container">
        <div className="text--box--projekter">Projekter</div>
        <img
          className="gravemaskineprojekter gravemaskinecrop--projekter"
          src={projekterbillede}
        />
      </div>
    </div>
  );
};

export default Projekterhero;
