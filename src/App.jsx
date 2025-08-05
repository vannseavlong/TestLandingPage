import { useEffect } from 'react'
import { LanguageProvider } from './contexts/LanguageContext.jsx'
import './assets/components/fonts.css'
import Navbar from './assets/components/navbar/navbar.jsx'
import HeroSection from './assets/components/section/HeroSection.jsx'
import SectionB from './assets/components/section/sectionB.jsx'
import SectionC from './assets/components/section/sectionC.jsx'
import Footer from './assets/components/footer/footer.jsx'
import { trackDevice } from './assets/utils/trackDevice.js' // Custom analytics or logging function
import { handleInitialHash, setupHashListener } from './assets/utils/scrollUtils.js'

function App() {
  useEffect(() => {
    async function trackAll() {
      try {
        await trackDevice(); // Custom analytics or logging function
        console.log('Device tracked');
      } catch (error) {
        console.error('Error tracking device:', error);
      }
      // Set page title
      document.title = 'bEasy Cambodia: Cleaning & Pest';
    }

    trackAll();
    
    // Handle initial URL hash and set up hash listener
    handleInitialHash();
    const cleanupHashListener = setupHashListener();
    
    // Cleanup function
    return () => {
      cleanupHashListener();
    };
  }, [])

  return (
    <LanguageProvider>
        <Navbar />
        <HeroSection id="home-page" />
        <SectionB id="services" />
        <SectionC id="download" />
        <Footer id="address" />
    </LanguageProvider>
  )
}

export default App
