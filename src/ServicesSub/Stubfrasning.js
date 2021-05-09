import React, { userState, useEffect } from 'react';

import StubfrasningHero from './StubfrasningHero';
import StubfrasningGallery from './StubfrasningGallery';

const Stubfrasning = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);

        props.setUserLocation('Stubfrasning');
    }, []);

    return (
        <div>
            <StubfrasningHero />
            <StubfrasningGallery />
        </div>
    );
};

export default Stubfrasning;
