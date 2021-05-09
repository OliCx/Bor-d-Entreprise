import React from 'react';

import '../Css/ServicesSub.css';

import Stubfrasning from '../Assets/Stupfræsning.jpg';

const StubfrasningHero = () => {
    return (
        <div>
            <div className='hero--projekter container'>
                <div className='text--box--projekter--stubfrasning'>Stubfræsning</div>
                <img
                    className='gravemaskineprojekter gravemaskinecrop--stubfrasning'
                    src={Stubfrasning}
                />
            </div>
        </div>
    );
};

export default StubfrasningHero;
