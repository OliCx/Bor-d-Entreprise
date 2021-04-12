import React from "react";

import "../Css/About.css";
import gravemaskinetest from "../Assets/Gravemaskine1.jpg";
import Erfaring from "../Assets/Erfaring.jpg"
import Team from "../Assets/Team.jpg"
import Quality from "../Assets/Quality.jpg"
import Speed from "../Assets/Speed.jpeg"

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about--container">
        <div className="about--container--one">
          <div className="box--zero--container">
            <h1 className="color box--zero--text--one">Vores<span className="red">Arbejde</span></h1>
            
          </div>
          <div className="color box--zero--container--two">
          <div className="about--container--work">
            <div className="projekt--three--container"> </div>
            <div className="projekt--four--container"> </div>
            <div className="projekt--six--container"> </div>
            <div className="projekt--eight--container"> </div>
            </div>
              </div>
        </div>
        <div className="about--container--two">
          <div className="about--two--text--container">
            <div className="about--two--text">
          <h1>Vores Firma</h1>
          </div>
          </div>
          <div className="choose--one">
            <div className="choose--one--flex">
            <div className="choose--one--meta--flex">
              <div className="choose--one--flex--title">
                <div className="choose--one--box--text">Erfaring</div>
            </div>
            <div className="choose--one--flex--description">Vi har som firma udført diverse entreprenørarbejde i over 20 over.
              Vores erfaring indebære arbejde som Maskinudlejning, Rodfræsning, Grenknusning, Træfældning, Beskæring og stupfræsning på Sjælland.</div>
              </div>
            </div>
            <div className="choose--two--flex">
            <div className="choose--one--meta--flex">
            <div className="choose--two--flex--title">
            <div className="choose--two--box--text">Team</div>
            </div>
            <div className="choose--two--flex--description">Vi er et tæt firma bestående af medarbejdere med flere års efaring indenfor de områder vi beskæftiger os med, såvel som arbejde sammen med hinanden.  </div>
              </div>
            </div>
          </div>
          <div className="choose--two">
            <div className="choose--three--flex">
            <div className="choose--one--meta--flex">
            <div className="choose--three--flex--title">
            <div className="choose--three--box--text">Kvalitet</div>
            </div>
            <div className="choose--four--flex--description">I Borød Entreprise har vi stærkt fokus på at leverer et produkt af høj kvalitet til en rimelig pris. Grundet vores mange års erfaring mener vi, at vi er i stand til at levere et produkt af samme kvalitet som større firmaer.</div>
              </div>
            </div>
            <div className="choose--four--flex">
            <div className="choose--one--meta--flex">
            <div className="choose--four--flex--title">
            <div className="choose--four--box--text">Tempo</div>
            </div>
            <div className="choose--four--flex--description">Udover fokus på kvalitet har vi i Borød Entpreprise også et tempo som vi overholder. Vi tilbyder gode deadlines til det arbejde du vil have udført, med garanti for at de bliver overholdt.</div>
            </div>
            </div>
          </div>
          <h1 className="about"></h1>
          <div className="box--one--text"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
