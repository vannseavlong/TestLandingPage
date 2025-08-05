// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.05, // Reduced for faster triggering
  rootMargin: '0px 0px -50px 0px' // Reduced for earlier activation
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in-view');
    } else {
      entry.target.classList.remove('animate-in-view');
    }
  });
}, observerOptions);

// Observe all animatable elements with immediate check
document.addEventListener('DOMContentLoaded', () => {
  const animatableElements = document.querySelectorAll('.animate-on-scroll');
  animatableElements.forEach(el => {
    observer.observe(el);
    // Check if element is already in viewport and add animation immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('animate-in-view');
    }
  });
});

export default observer;
