import React from 'react';

import '../Css/ServicesSub.css';

import Beskaring from '../Assets/Maskinudlejning.jpg';

const BeskæringHero = () => {
    return (
        <div>
            <div className='hero--projekter container'>
                <div className='text--box--projekter--maskinudlejning'>Maskinudlejning</div>
                <img
                    className='gravemaskineprojekter gravemaskinecrop--maskinudlejning'
                    src={Beskaring}
                />
            </div>
        </div>
    );
};

export default BeskæringHero;
