import React from "react";

import "../Css/Nav.css";
import flooop from "../Assets/flooop.png";

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo--box">
        <img className="logo" src={flooop} />
      </div>
      <a href="#top" className="nav--link push">
        Forside
      </a>{" "}
      <a href="#top" className="nav--link">
        Om os
      </a>{" "}
      <a href="#top" className="nav--link button--hover">
        Projekter
      </a>
      <a href="#about" className="nav--link push1">
        Kontakt
      </a>
      <div className="logo--box"></div>
    </div>
  );
};

export default Nav;
