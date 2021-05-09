import React from 'react';

import '../Css/ServicesSub.css';

import Stubfrasning from '../Assets/Grenknusning1.jpg';

const StubfrasningHero = () => {
    return (
        <div>
            <div className='hero--projekter container'>
                <div className='text--box--projekter--grenknusning'>Grenknusning</div>
                <img
                    className='gravemaskineprojekter gravemaskinecrop--grenknusning'
                    src={Stubfrasning}
                />
            </div>
        </div>
    );
};

export default StubfrasningHero;
