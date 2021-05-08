import React, { userState, useEffect } from 'react';

import BeskaringHero from './BeskaringHero';

const Beskaring = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);

        props.setUserLocation('Beskaring');
    }, []);

    return (
        <div>
            <BeskaringHero />
        </div>
    );
};

export default Beskaring;
