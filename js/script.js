// script.js

// Smooth scroll to sections on link click (future-proofing)
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Animate sections on scroll
  const sections = document.querySelectorAll('section');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach(section => {
    section.classList.add('hidden'); // start hidden
    observer.observe(section);
  });
  
  // Optional: WhatsApp success toast
  function showWhatsAppToast() {
    const toast = document.createElement('div');
    toast.innerText = "WhatsApp QR loaded. Scan to chat!";
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.right = '20px';
    toast.style.background = '#25D366';
    toast.style.color = '#fff';
    toast.style.padding = '10px 20px';
    toast.style.borderRadius = '8px';
    toast.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
    toast.style.zIndex = '9999';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
  }
  
  window.addEventListener('load', () => {
    showWhatsAppToast();
  });
  



