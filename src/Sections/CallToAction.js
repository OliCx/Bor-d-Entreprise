import React, { useState } from 'react';
import { Link } from '@reach/router';

import '../Css/CallToAction.css';

const CallToAction = (props) => {
    return (
        <div className='CTA'>
            <div className='CTA--text--box'>
                <h1 className='CTA--title'>Klar til at vælge os?</h1>
                <p className='CTA--text'>
                    Tag et kig, på det arbejde som vi tilbyder på knappen til
                    højre og smid os en Mail eller et opkald, hvis det virker
                    interessant{' '}
                </p>
            </div>
            <div className='CTA--buttons'>
                {/* <Link to="/projekter" className="CTA--button">Projekter</Link> */}
                <Link to='/services' className='CTA--button'>
                    Vi udfører
                </Link>
            </div>
        </div>
    );
};

export default CallToAction;
