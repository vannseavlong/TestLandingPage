// Scroll utilities for fragment navigation

/**
 * Scroll to a section by ID with smooth behavior and navbar offset
 * @param {string} sectionId - The ID of the section to scroll to
 */
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const navbarHeight = 70; // Height of fixed navbar
    const elementPosition = element.offsetTop - navbarHeight;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
    
    // Update URL hash without triggering page reload
    if (window.history.pushState) {
      window.history.pushState(null, null, `#${sectionId}`);
    } else {
      window.location.hash = sectionId;
    }
  }
};

/**
 * Handle initial page load with hash fragment
 */
export const handleInitialHash = () => {
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    // Delay to ensure components are rendered
    setTimeout(() => {
      scrollToSection(hash);
    }, 100);
  }
};

/**
 * Listen for hash changes in the URL
 */
export const setupHashListener = () => {
  const handleHashChange = () => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      scrollToSection(hash);
    }
  };

  window.addEventListener('hashchange', handleHashChange);
  
  // Return cleanup function
  return () => {
    window.removeEventListener('hashchange', handleHashChange);
  };
};
