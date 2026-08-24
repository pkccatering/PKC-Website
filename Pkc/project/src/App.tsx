import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import MenuPreview from './components/MenuPreview';
import Events from './components/Events';
import InstagramFeed from './components/InstagramFeed';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import LoadingScreen from './components/LoadingScreen';
import { useState, useEffect } from 'react';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-gradient-to-b from-ivory-50 to-sage-50 overflow-x-hidden">
        <Navigation />
        <main>
          <Hero />
          <About />
          <WhyChooseUs />
          <MenuPreview />
          <Events />
          <InstagramFeed />
          <Contact />
        </main>
        <WhatsAppButton />
      </div>
    </ErrorBoundary>
  );
}

export default App;