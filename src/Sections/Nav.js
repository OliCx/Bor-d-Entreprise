import React from 'react';
import { Link } from '@reach/router';

import '../Css/Nav.css';
import flooop from '../Assets/flooop.png';

const Nav = (props) => {
    return (
        <div className='nav'>
            <div className='logo--box'>Borød Entreprise</div>
            <div className='nav--flex'>
                <Link
                    to='/'
                    className={`nav--link push ${
                        props.myLocation == 'Home' ? 'current' : 'notCurrent'
                    }`}
                >
                    Forside
                </Link>
                {/* <Link to="/projekter" className={`nav--link ${
          props.myLocation == "Projekter" ? "current" : "notCurrent"
        }`}>
        Projekter
      </Link>  */}
                <Link
                    to='/services'
                    className={`nav--link button--hover ${
                        props.myLocation == 'Services'
                            ? 'current'
                            : 'notCurrent'
                    }`}
                >
                    Vi udfører
                </Link>
                <Link
                    to='/kontakt'
                    className={`nav--link push1 ${
                        props.myLocation == 'Kontakt' ? 'current' : 'notCurrent'
                    }`}
                >
                    Kontakt
                </Link>
                
            </div>
            <div className='logo--box'></div>
        </div>
    );
};

export default Nav;
