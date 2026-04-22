import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoSection } from './components/VideoSection';
import { About } from './components/About';
import { OurMission } from './components/OurMission';
import { OurProcess } from './components/OurProcess';
import { FeaturedProducts } from './components/FeaturedProducts';
import { WhyChoose } from './components/WhyChoose';
import { Stats } from './components/Stats';
import { ClientsGallery } from './components/ClientsGallery';
import { ContactInfo } from './components/ContactInfo';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Preloader } from './components/ui/Preloader';
import { useState, useEffect } from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`min-h-screen relative ${isLoading ? 'overflow-hidden' : ''}`}>
      <Preloader onLoadingComplete={() => setIsLoading(false)} />
      {/* Global water background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1626690392822-6591984d3c96?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.08,
          }}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <VideoSection />
        <About />
        <OurMission />
        <OurProcess />
        <FeaturedProducts />
        <WhyChoose />
        <Stats />
        <ClientsGallery />
        <ContactInfo />
        <div className="relative bg-white z-20">
          <Footer />
        </div>
      </div>

      <ScrollToTop />
    </div>
  );
}