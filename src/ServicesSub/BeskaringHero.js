import React from 'react';

import '../Css/ServicesSub.css';

import Beskaring from '../Assets/Beskæring.jpg';

const BeskæringHero = () => {
    return (
        <div>
            <div className='hero--projekter container'>
                <div className='text--box--projekter'>Projekter</div>
                <img
                    className='gravemaskineprojekter gravemaskinecrop--projekter'
                    src={Beskaring}
                />
            </div>
        </div>
    );
};

export default BeskæringHero;
