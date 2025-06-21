import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FloorPlans from '../components/FloorPlans';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Lifestyle from '../components/Lifestyle';
import Stats from '../components/Stats';
import WhyChooseUs from '../components/WhyChooseUs';

function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Lifestyle />
      <FloorPlans />
      <WhyChooseUs />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;