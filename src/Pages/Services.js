import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';

import '../Css/Services.css';

import img1 from '../Assets/Huse.jpg';
import img2 from '../Assets/Gulv.jpg';
import img3 from '../Assets/Projekt6.jpg';
import img4 from '../Assets/Projekt7.jpg';
import beskæring from '../Assets/Beskæring.jpg';
import entreprenørabejde from '../Assets/Entreprenørabejde.jpg';
import grenknusning from '../Assets/Grenknusning.jpg';
import maskiner from '../Assets/Maskiner maskinudlejning.jpg';
import maskinudlejning from '../Assets/Maskinudlejning.jpg';
import rodfræsning from '../Assets/Rodfræsning.jpg';
import stupfræsning from '../Assets/Stupfræsning.jpg';
import træfældning from '../Assets/Træfældning.jpg';

const Services = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);

        props.setUserLocation('Services');
    }, []);

    return (
        <div className='Services'>
            {/* <h1 className="services--title">Services</h1> */}
            <div className='content--container'>
                <div className='content--row'>
                    <div className='content--image'>
                        <img
                            src={beskæring}
                            alt='service1'
                            className='orson--img'
                        />
                    </div>

                    <div className='content--text ud-container'>
                        <Link
                            to='/beskaring'
                            className='content--title--left nav--link1 '
                        >
                            Beskræring
                        </Link>
                        <p className='content--text'>
                            Beskæring af læhegn eller hækklipning med maskiner
                            vi har både store maskiner til det grove og små
                            maskiner til det lidt finere.
                        </p>
                    </div>
                    <div className='content--text mobile'>

                        <Link
                            to='/beskaring'
                            className='content--title--left nav--link1 '
                        >
                            Beskræring
                        </Link>
                        <p className='content--text'>
                            Beskæring af læhegn eller hækklipning med maskiner
                            vi har både store maskiner til det grove og små
                            maskiner til det lidt finere.
                        </p>
                    </div>
                </div>
                <div className='content--row'>
                    <div className='content--text desktop'>
                        <p className='content--text'>
                            Hvis der er enkeltstående stubbe i haven der skal
                            fræses har vi stubfræser der kun er 90 cm. bred, så
                            den kan komme ind i de fleste haver.
                        </p>
                        <Link
                            to='/stubfrasning'
                            className='content--title--right nav--link1'
                        >
                            Stubfræsning
                        </Link>
                    </div>
                    <div className='content--image desktop'>
                        <img
                            src={stupfræsning}
                            alt='service4'
                            className='orson--img5'
                        />
                    </div>

                    <div className='content--image mobile'>
                        <img
                            src={stupfræsning}
                            alt='service4'
                            className='orson--img5'
                        />
                    </div>
                    <div className='content--text ud-container mobile'>
                        <Link
                            to='/stubfrasning'
                            className='content--title--left nav--link1'
                        >
                            Stubfræsning
                        </Link>
                        <p className='content--text'>
                            Hvis der er enkeltstående stubbe i haven der skal
                            fræses har vi stubfræser der kun er 90 cm. bred, så
                            den kan komme ind i de fleste haver.
                        </p>
                    </div>
                </div>
                {/*  <div className="content--row">
        /*   <div className="content--text">
            <p className="content--text">Vi har gravemaskiner til udlejning fra 1.5 til 30 Ton. På bælter
Gravemaskiner på hjul op til 15 Ton.
Der er monteret 3D maskinstyring på flere af de større maskiner.
Gravemaskiner fra 8 ton og op lejes ikke ud uden fører.
</p>
            <h1 className="content--title--right">Entreprenørabejde</h1>
          </div> *
          * <div className="content--image">
            <img src={entreprenørabejde} alt="service2" className="orson--img2" />
          </div>  *
        </div> */}
                <div className='content--row'>
                    <div className='content--image'>
                        <img
                            src={grenknusning}
                            alt='service3'
                            className='orson--img3'
                        />
                    </div>

                    <div className='content--text ud-container'>

          
                        <Link
                            to='/grenknusning'
                            className='content--title--left nav--link1'
                        >
                            Grenknusning
                        </Link>
                        <p className='content--text'>
                            Vi tilbyder effektiv grenknusning af læhegn, jagt
                            spor, juletræskulturer, buske og træstubbe og
                            derefter rodfræsning, så arealet kan gendyrkes.
                        </p>
                    </div>
                    <div className='content--text mobile'>

                        <Link
                            to='/grenknusning'
                            className='content--title--left nav--link1'
                        >
                            Grenknusning
                        </Link>
                        <p className='content--text'>
                            Vi tilbyder effektiv grenknusning af læhegn, jagt
                            spor, juletræskulturer, buske og træstubbe og
                            derefter rodfræsning, så arealet kan gendyrkes.
                        </p>
                    </div>
                </div>
                <div className='content--row'>
                    <div className='content--text  desktop'>
                        <p className='content--text'>
                            Vi har gravemaskiner til udlejning fra 1.5 til 30
                            Ton. På bælter Gravemaskiner på hjul op til 15 Ton.
                            Der er monteret 3D maskinstyring på flere af de
                            større maskiner. Gravemaskiner fra 8 ton og op lejes
                            ikke ud uden fører.
                        </p>
                        <Link
                            to='/maskinudlejning'
                            className='content--title--right nav--link1'
                        >
                            Maskinudlejning
                        </Link>
                    </div>
                    <div className='content--image desktop'>
                        <img
                            src={maskiner}
                            alt='service4'
                            className='orson--img3'
                        />
                    </div>

                    <div className='content--image mobile'>
                        <img
                            src={maskiner}
                            alt='service4'
                            className='orson--img3'
                        />
                    </div>

                    <div className='content--text ud-container mobile'>
                        <Link
                            to='/maskinudlejning'
                            className='content--title--left nav--link1'
                        >
                            Maskinudlejning
                        </Link>
                        <p className='content--text'>
                            Vi har gravemaskiner til udlejning fra 1.5 til 30
                            Ton. På bælter Gravemaskiner på hjul op til 15 Ton.
                            Der er monteret 3D maskinstyring på flere af de
                            større maskiner. Gravemaskiner fra 8 ton og op lejes
                            ikke ud uden fører.
                        </p>

                    </div>
                </div>
                <div className='content--row'>
                    <div className='content--image'>
                        <img
                            src={rodfræsning}
                            alt='service3'
                            className='orson--img2'
                        />
                    </div>

                    <div className='content--text ud-container'>


                        <Link
                            to='/rodfrasning'
                            className='content--title--left nav--link1'
                        >
                            Rodfræsning
                        </Link>
                        <p className='content--text'>
                            Vi tilbyder rodfræsning ned i 25-30 cm dybde så der
                            efterfølgende er klar til plantning, såning af græs
                            og korn. vi anbefaler i de fleste tilfælde at der
                            grenknuses først så stubbe og grene bliver neddelt.
                        </p>
                    </div>
                    <div className='content--text mobile'>

                        <Link
                            to='/rodfrasning'
                            className='content--title--left nav--link1'
                        >
                            Rodfræsning
                        </Link>
                        <p className='content--text'>
                            Vi tilbyder rodfræsning ned i 25-30 cm dybde så der
                            efterfølgende er klar til plantning, såning af græs
                            og korn. vi anbefaler i de fleste tilfælde at der
                            grenknuses først så stubbe og grene bliver neddelt.
                        </p>
                    </div>
                </div>
                {/*         <div className="content--row">
          <div className="content--image">
              <img src={træfældning} alt="service3" className="orson--img3" />
          </div>
          <div className="content--text">
            <h1 className="content--title--left">Træfældning</h1>
            <p className="content--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae
              mi in erat lobortis ultrices. Duis vitae venenatis enim, vel lobortis
              odio. Nulla sagittis euismod purus, in aliquet nisl
              consequat convallis. Nulla ut ultrices neque. Quisque blandit finibus ligula,</p>
          </div>  
        </div> */}
            </div>
        </div>
    );
};

export default Services;
