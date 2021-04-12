import React from "react";

import "../Css/Projekterabout.css";
import Maskinudlejning2 from "../Assets/Maskinudlejning2.jpg"
import Maskinudlejning3 from "../Assets/Maskinudlejning3.jpg"
import Maskinudlejning4 from "../Assets/Maskinudlejning4.jpg"
import Maskinudlejning5 from "../Assets/Maskinudlejning5.jpg"


const Projekterabout = () => {
  return (
    <div className="projekterabout--container">
      <div className="projekterabout--container--one">
        <div className="projekterabout--container--one--title">
        <div className="projekterabout--container--one--title--text"> <h1>Vores Arbejde</h1></div>
        </div>
        <div className="projekterabout--container--one--nav">
          <div className="projekterabout--container--one--nav--row--one">
            <a href="#Trapper" className="projekterabout--container--one--nav--item--one notCurrent--projekter">
              <div className="projekterabout--container--one--nav--item--one--text">
              Maskinudlejning
              </div>
            </a>
            <a href="#SkovArbejde" className="projekterabout--container--one--nav--item--two notCurrent--projekter">
            <div className="projekterabout--container--one--nav--item--one--text">
              Entreprenørarbejde
              </div>
            </a>
            </div>
            <div className="projekterabout--container--one--nav--row--two">
            <a href="#Huse" className="projekterabout--container--one--nav--item--three notCurrent--projekter">
            <div className="projekterabout--container--one--nav--item--one--text">
              Beskæring
              </div>
            </a>
            <a href="#Gulv" className="projekterabout--container--one--nav--item--four notCurrent--projekter">
            <div className="projekterabout--container--one--nav--item--one--text">
              Træfældning
              </div>
            </a>
            </div>
        </div>
        <div className="projekterabout--container--one--title">
        <a id="Trapper" className="projekterabout--container--one--title--text"> <h1>Makinudlejning</h1></a>
        </div>
        <div className="projekterabout--container--work--meta">
        <div className="projekt--one--container">
        <img src={Maskinudlejning2} alt="Maskinudlejning2" className="projekt--one--image" />
            </div> 
        <div className="projekterabout--container--work">
            <div className="projekt--two--container">
            <img src={Maskinudlejning3} alt="Maskinudlejning3" className="projekt--two--image" />
               </div>
            <div className="projekt--seven--container"> 
            <img src={Maskinudlejning4} alt="Maskinudlejning4" className="projekt--seven--image" />
            </div>
            </div>
            <div className="projekt--five--container"> 
            <img src={Maskinudlejning5} alt="Maskinudlejning5" className="projekt--five--image" />
            </div>
        </div>
        <div className="projekterabout--container--one--title">
        <a id="SkovArbejde" className="projekterabout--container--one--title--text"> <h1>Entreprenørarbejde</h1></a>
        </div>
        <div className="projekterabout--container--work--meta">
        <div className="projekt--one--container"> </div>
        <div className="projekterabout--container--work">
            <div className="projekt--two--container"> </div>
            <div className="projekt--seven--container"> </div>
            </div>
            <div className="projekt--five--container"> </div>
        </div>
        <div className="projekterabout--container--one--title">
        <a id="Huse" className="projekterabout--container--one--title--text"> <h1>Beskæring</h1></a>
        </div>
        <div className="projekterabout--container--work--meta">
        <div className="projekt--one--container"> </div>
        <div className="projekterabout--container--work">
            <div className="projekt--two--container"> </div>
            <div className="projekt--seven--container"> </div>
            </div>
            <div className="projekt--five--container"> </div>
        </div>
        <div className="projekterabout--container--one--title">
        <a id="Gulv" className="projekterabout--container--one--title--text"> <h1>Træfældning</h1></a>
        </div>
        <div className="projekterabout--container--work--meta">
        <div className="projekt--one--container"> </div>
        <div className="projekterabout--container--work">
            <div className="projekt--two--container"> </div>
            <div className="projekt--seven--container"> </div>
            </div>
            <div className="projekt--five--container"> </div>
        </div>
      </div>
    </div>
  );
};

export default Projekterabout;
