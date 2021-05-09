import React, { useState } from 'react';

import '../Css/ServicesSub.css';

import Beskaring from '../Assets/Beskæring.jpg';

const StubfrasningGallery = () => {
    const [lightBox, setLightBox] = useState(false);
    const [imgClass, setImageClass] = useState('');
    const [imgSrc, setImageSrc] = useState('');

    // instead of true false, you can use numbers like 1/2/3/4 and have associated ratios for each,
    // 1 could be 16 x9 2 could be 14 x 8 etc you would need to check this in the loghtBoxOpen function
    // if (isPortrait === 1) {} else if (isPortrait === 2) {} if (isPortrait === 3) {}
    const lightBoxOpen = (e, isPortrait) => {
        setLightBox(true);
        // the image name needs to be set here, not the classname from the div, Google: 'react event target src'
        // -
        // replace this className with the src value eg. e.target.src
        if (isPortrait) {
            /* setImageSrc(`${e.target.className}`); */
            // class name is still needed to determine the size of the container
            setImageClass(
                `${e.target.className} height-override width-override`,
            );
        } else {
            /* setImageSrc(`${e.target.className}`); */
            setImageClass(`${e.target.className} height-override`);
        }
    };

    const lightBoxClose = () => {
        setLightBox(false);
        setImageClass('');
        /* setImageSrc(''); */
    };

    return (
        <div>
            {lightBox ? (
                <div onClick={lightBoxClose} className='full-overlay'>
                    {/* // replace with src for imagesuuu */}
                    <div className='lightbox-container'>
                        <div
                            className={`${imgClass}`} /* src={`${imgName}`} */
                        ></div>
                    </div>
                </div>
            ) : null}
            <div className='gallery-container'>
                <div className='gallery-section'>
                    <div
                        onClick={(e) => lightBoxOpen(e, true)}
                        className='rodfrasning1'
                        src='./image.jpeg'
                    ></div>
                    {/* below replaces big red*/}
                    {/* <img className="portrait (or landscape depending on the image)" src={importedImageName}/>*/}
                </div>
                <div className='gallery-section'>
                    <div
                        onClick={(e) => lightBoxOpen(e, true)}
                        className='rodfrasning2'
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default StubfrasningGallery;
