import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Certifications } from './components/Certifications';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { QuotationModal } from './components/QuotationModal';
import { QuotationProvider } from './contexts/QuotationContext';

function App() {
  return (
    <QuotationProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />
        <Hero />
        <Benefits />
        <Features />
        <Testimonials />
        <Contact />
        <Certifications />
        <Footer />
        <WhatsAppFloat />
        <QuotationModal />
      </div>
    </QuotationProvider>
  );
}

export default App;