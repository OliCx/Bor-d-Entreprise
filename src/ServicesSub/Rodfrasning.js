import React, { userState, useEffect } from 'react';

import RodfrasningHero from './RodfrasningHero';
import RodfrasningGallery from './RodfrasningGallery';

const Rodfrasning = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);

        props.setUserLocation('Rodfrasning');
    }, []);

    return (
        <div>
            <RodfrasningHero />
            <RodfrasningGallery />
        </div>
    );
};

export default Rodfrasning;
