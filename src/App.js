import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';


import Header from './components/Header'
import AboutCarousel from './components/AboutCarousel'
import AboutUs from './components/AboutUs'
import HelpUsSG4 from './components/HelpUsSG4'
// import HelpUsSG3 from './components/HelpUsSG3'
// import HelpUsSG2 from './components/HelpUsSG2'
// import HelpUsSG from './components/HelpUsSG'
// import HelpUsPH2 from './components/HelpUsPH2'
// import HelpUsPH from './components/HelpUsPH'
// import Volunteer from './components/Volunteer'
// import Visit from './components/Visit'
// import Donate from './components/Donate'
import Donate2 from './components/Donate2'
// import Dining from './components/Dining'
import Dining2 from './components/Dining2'
import Cooking from './components/Cooking'
import Gallery from './components/Gallery'

import Footer from './components/Footer'


const App = () => (
  <Container>
    <Header />
    <AboutCarousel/>
    <AboutUs />
    <HelpUsSG4 />
    {/* <HelpUsSG3 /> */}
    {/* <HelpUsSG2 /> */}
    {/* <HelpUsSG /> */}
    {/* <HelpUsPH2 /> */}
    {/* <HelpUsPH /> */}
    {/* <Volunteer /> */}
    {/* <Visit /> */}
    {/* <Donate /> */}
    <Donate2 />
    {/* <Dining /> */}
    <Dining2 />
    <Cooking />
    <Gallery />
    <Footer />
  </Container>
);

export default App;
