import './App.css'
import React from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Section4 from './components/section4';
import Section5 from './components/section5';
import Section6 from './components/section6';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Footer/>
    </div>
  );
}

export default App;
