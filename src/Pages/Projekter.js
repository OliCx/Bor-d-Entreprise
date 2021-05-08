import React, { useState, useEffect } from 'react';

import Projekterhero from '../Sections/Projekterhero';
import Projekterabout from '../Sections/Projekterabout';

const Projekter = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        props.setUserLocation('Projekter');
    }, []);

    return (
        <div>
            <Projekterhero />
            <Projekterabout />
        </div>
    );
};

export default Projekter;
