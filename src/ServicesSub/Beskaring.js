import React, { userState, useEffect } from 'react';

import BeskaringHero from './BeskaringHero';
import BeskaringGallery from './BeskaringGallery';

const Beskaring = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);

        props.setUserLocation('Beskaring');
    }, []);

    return (
        <div>
            <BeskaringHero />
            <BeskaringGallery />
        </div>
    );
};

export default Beskaring;
