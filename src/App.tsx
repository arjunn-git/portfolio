import React, { useState, useRef } from 'react';
import { Preloader } from './components/Preloader/Preloader';
import { Navbar } from './components/Navigation/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Expertise } from './components/Expertise/Expertise';
import { Projects } from './components/Projects/Projects';
import { Services } from './components/Services/Services';
import { Process } from './components/Process/Process';
import { Pricing } from './components/Pricing/Pricing';
import { Trust } from './components/Trust/Trust';
import { Playground } from './components/Playground/Playground';
import { Experience } from './components/Experience/Experience';
import { Contact, ContactRef } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

export const App: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const contactRef = useRef<ContactRef>(null);

  const scrollToContact = (enquiryType?: string) => {
    if (contactRef.current && enquiryType) {
      contactRef.current.setEnquiryAndScroll(enquiryType);
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-midnight text-iceWhite selection:bg-electricBlue selection:text-white">
      {/* Cinematic Studio Preloader */}
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}

      {/* Main Experience Layout */}
      <Navbar onStartProjectClick={() => scrollToContact('Freelance Project')} />

      <main>
        <Hero
          onExploreWorkClick={scrollToProjects}
          onStartProjectClick={() => scrollToContact('Freelance Project')}
        />
        <About />
        <Expertise />
        <Projects />
        <Services onSelectService={(service) => scrollToContact(service)} />
        <Process />
        <Pricing onRequestQuote={(tier) => scrollToContact(`Package Quote: ${tier}`)} />
        <Trust />
        <Playground />
        <Experience />
        <Contact ref={contactRef} />
      </main>

      <Footer />
    </div>
  );
};

export default App;
