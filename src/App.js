import React from 'react';
import './App.css';


import {
  Gallery,
  WhatsOn,
  AboutUs,
  Footer,
  Header,
} from './container';

const App = () => (
  <div>
    <Header />
    <AboutUs />
    <WhatsOn />
    <Gallery />
    <Footer />
  </div>
);

export default App;
