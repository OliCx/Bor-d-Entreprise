import React, { useState } from 'react';
import { Router } from '@reach/router';

import Nav from './Sections/Nav';
import Footer from './Sections/Footer';
import Home from './Pages/Home';
import Projekter from './Pages/Projekter';
import Services from './Pages/Services';
import Kontakt from './Pages/Kontakt';
import Beskaring from './ServicesSub/Beskaring';
import Stubfrasning from './ServicesSub/Stubfrasning';
import Grenknusning from './ServicesSub/Grenknusning'
import Maskinudlejning from './ServicesSub/Maskinudlejning'
import Rodfrasning from './ServicesSub/Rodfrasning'

import './App.css';

const App = () => {
    const [myLocation, setUserLocation] = useState('initial');
    return (
        <div id='top'>
            <Nav myLocation={myLocation} />
            <Router>
                <Home path='/' setUserLocation={setUserLocation} />
                <Projekter
                    path='/projekter'
                    setUserLocation={setUserLocation}
                />
                <Services path='/services' setUserLocation={setUserLocation} />
                <Kontakt path='/kontakt' setUserLocation={setUserLocation} />
                <Beskaring
                    path='/beskaring'
                    setUserLocation={setUserLocation}
                />                
                <Stubfrasning path='/stubfrasning'
                setUserLocation={setUserLocation}
            />
             <Grenknusning path='/grenknusning'
                setUserLocation={setUserLocation}
            />
            
             <Maskinudlejning path='/maskinudlejning'
                setUserLocation={setUserLocation}
            />
            <Rodfrasning path='/rodfrasning'
            setUserLocation={setUserLocation}
        />
            </Router>
            <Footer />
        </div>
    );
};

export default App;
