document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('scrollingText');
    const text = "Découvrez le mini projecteur portable qui révolutionne vos présentations ! ";
    let offset = 0;
  
    function scrollText() {
      offset++;
      if (offset > text.length) {
        offset = 0;
      }
      textElement.textContent = text.substring(offset) + text.substring(0, offset);
      setTimeout(scrollText, 150);
    }
  
    if (textElement) {
      scrollText();
    }
  });
  
  function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          observer.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.3 }); 
  
    elements.forEach((element) => {
      observer.observe(element);
    });
  }
  

  document.addEventListener('DOMContentLoaded', function () {
    animateOnScroll();
  });
  
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
  
    if (contactForm) {
      contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
  
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
  
        if (name && email && message) {
          confirmationMessage.style.display = 'block';
  
          contactForm.reset();
  
          console.log('Nom:', name);
          console.log('Email:', email);
          console.log('Message:', message);
        } else {
          alert('Veuillez remplir tous les champs.');
        }
      });
    }
  });