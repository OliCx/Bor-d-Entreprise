import React from "react";

import "../Css/ServicesSub.css";

import Beskæring from "../Assets/Beskæring.jpg"

const BeskæringHero = () => {
    return (
    <div>
        <div className="hero--projekter container">
            <div className="text--box--projekter">Projekter</div>
                <img
                    className="gravemaskineprojekter gravemaskinecrop--projekter"
                    src={Beskæring}
                />
        </div>
    </div>
    );
};

export default BeskæringHero;