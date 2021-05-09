import React, { userState, useEffect } from 'react';

import GrenknusningHero from './GrenknusningHero';
import GrenknusningGallery from './GrenknusningGallery';

const Grenknusning = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);

        props.setUserLocation('Grenknusning');
    }, []);

    return (
        <div>
            <GrenknusningHero />
            <GrenknusningGallery />
        </div>
    );
};

export default Grenknusning;
