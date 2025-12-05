import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Admin from './components/Admin';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Stats from './components/Stats';
import InstantQuotePage from './components/InstantQuote';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GuardianBlueISOSocketsAdapters from './components/GuardianBlueISOSocketsAdapters';
import GuardianBlueISDSockets from './components/GuardianBlueISDSockets';
import StandardSockets from './components/StandardSockets';
import BitHolders from './components/BitHolders';
import WobbleSockets from './components/WobbleSockets';
import Extensions from './components/Extensions';
import Adapters from './components/Adapters';
import Universals from './components/Universals';
import PulseToolSockets from './components/PulseToolSockets';
import AntiMarLugNutSockets from './components/AntiMarLugNutSockets';
import SpringLoadedCombinationSockets from './components/SpringLoadedCombinationSockets';
import SpringLoadedExtensions from './components/SpringLoadedExtensions';
import TorxSockets from './components/TorxSockets';
import SpringLoadedSockets from './components/SpringLoadedSockets';
import GearDrivenSockets from './components/GearDrivenSockets';
import HoldDriveSockets from './components/HoldDriveSockets';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const HomePage = () => (
    <>
      <section id="home">
        <Hero />
        <div className="flex justify-center mt-8">
          <a href="/quote" className="px-8 py-4 bg-green-700 text-white text-xl font-bold rounded-lg shadow-lg hover:bg-green-800 transition-all">
            Get an Instant Quote
          </a>
        </div>
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="products">
        <Products />
      </section>
      
      <section id="services">
        <Services />
      </section>
      
      <Stats />
      
      <section id="contact">
        <Contact />
      </section>
                <Route path="/admin" element={<Admin />} />
    </>
  );
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header activeSection={activeSection} onNavigate={scrollToSection} />
        

        <Routes>
          <Route path="/" element={<main><HomePage /></main>} />
          <Route path="/quote" element={<InstantQuotePage />} />
          <Route path="/guardian-blue-iso-sockets-adapters" element={<GuardianBlueISOSocketsAdapters />} />
          <Route path="/guardian-blue-isd-sockets" element={<GuardianBlueISDSockets />} />
          <Route path="/standard-sockets" element={<StandardSockets />} />
          <Route path="/bit-holders" element={<BitHolders />} />
          <Route path="/wobble-sockets" element={<WobbleSockets />} />
          <Route path="/extensions" element={<Extensions />} />
          <Route path="/adapters" element={<Adapters />} />
          <Route path="/universals" element={<Universals />} />
          <Route path="/pulse-tool-sockets" element={<PulseToolSockets />} />
          <Route path="/anti-mar-lug-nut-sockets" element={<AntiMarLugNutSockets />} />
          <Route path="/spring-loaded-combination-sockets" element={<SpringLoadedCombinationSockets />} />
          <Route path="/spring-loaded-extensions" element={<SpringLoadedExtensions />} />
          <Route path="/torx-sockets" element={<TorxSockets />} />
          <Route path="/spring-loaded-sockets" element={<SpringLoadedSockets />} />
          <Route path="/gear-driven-sockets" element={<GearDrivenSockets />} />
          <Route path="/hold-drive-sockets" element={<HoldDriveSockets />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;