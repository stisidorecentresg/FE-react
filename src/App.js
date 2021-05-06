import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';


import Header from './components/Header'
import AboutCarousel from './components/AboutCarousel'
import AboutUs from './components/AboutUs'
import HelpUsSG4 from './components/HelpUsSG4'
import Donate2 from './components/Donate2'
import Dining2 from './components/Dining2'
import Delivery from './components/Delivery'
import Cooking from './components/Cooking'
import Outreach from './components/Outreach'
import Gallery from './components/Gallery'

import Footer from './components/Footer'


const App = () => (
  <Container>
    <Header />
    <AboutCarousel/>
    <AboutUs />
    <HelpUsSG4 />
    <Donate2 />
    <Dining2 />
    <Delivery />
    <Cooking />
    <Outreach />
    <Gallery />
    <Footer />
  </Container>
);

export default App;
