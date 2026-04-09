import React from 'react';
import Navbar from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import Mission from './components/home/Mission';
import Services from './components/home/Services';
import OfferList from './components/home/OfferList';
import Testimonials from './components/home/Testimonials';
import Newsletter from './components/home/Newsletter';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-(--bg-primary) overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <Mission />
        <Services />
        <OfferList />
        <Testimonials />
        <Newsletter />
      </main>
      
    </div>
  );
}

export default App;
