import React, { useState, useEffect } from 'react';

import boss from '../Assets/Erfaring.jpg';
import map from '../Assets/map.png';
import kontakt from '../Assets/kontakt.jpg';

import '../Css/Kontakt.css';

const Kontakt = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);

        props.setUserLocation('Kontakt');
    }, []);
    return (
        <div className='Kontakt'>
            <div className='contact--container'>
                <div className='contact--left'>
                    <img src={kontakt} alt='kontakt' className='boss' />
                </div>
                <div className='contact--right'>
                    <h1 className='contact--title'>Kontakt</h1>
                    <p className='contact--text'>+45 40 25 96 61</p>
                    <p className='contact--text'>borod.cb@gmail.com</p>
                    <p className='contact--text'>Nybyvej 103 4340 tølløse</p>
                    <img src={map} alt='map' className='map' />
                    <a
                        href='https://www.facebook.com/'
                        className='contact--text'
                    >
                        Facebook
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Kontakt;
