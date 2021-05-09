import React from 'react';
import { Link } from '@reach/router';

import '../Css/Footer.css';

import flooop from '../Assets/flooop.png';

const Footer = () => {
    return (
        <div className='footer--container'>
            <div className='footer--container--top'>
                <div className='footer--container--column'>
                    <div className='pp'>
                        <p>Nybyvej 103</p>
                        <p>4340 Tølløse</p>
                        <p>+45 40 25 96 61</p>
                    </div>
                </div>
                <div className='footer--container--email'>
                    <p>borod.cb@gmail.com</p>
                    <p>cb@borødentreprise.dk</p>
                </div>
                <div className='bb'>
                    <a href='https://www.facebook.com/borodentreprise/' className='bb'>
                        Facebook
                    </a>
                </div>
            </div>
            <div className='footer--container--bottom'>
                <h1 className='h1'>Borød Entreprise</h1>
            </div>
            <div className='footer--container--full'>
                <div className='footer--container--middle'>
                    <Link to='/' className='nav--link notCurrent'>
                        Forside
                    </Link>
                    {/*  <Link to="/projekter" className="nav--link notCurrent">Projekter</Link> */}
                    <Link to='/services' className='nav--link notCurrent'>
                        Vi udfører
                    </Link>
                    <Link to='/kontakt' className='nav--link notCurrent'>
                        Kontakt
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
