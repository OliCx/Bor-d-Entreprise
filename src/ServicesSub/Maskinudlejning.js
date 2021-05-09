import React, { userState, useEffect } from 'react';

import MaskinudlejningHero from './MaskinudlejningHero';
import MaskinudlejningGallery from './MaskinudlejningGallery';

const Maskinudlejning = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);

        props.setUserLocation('Maskinudlejning');
    }, []);

    return (
        <div>
            <MaskinudlejningHero />
            <MaskinudlejningGallery />
        </div>
    );
};

export default Maskinudlejning;
