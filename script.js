// Animation au défilement
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
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
  
  function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 200); 
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
  
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  
  window.addEventListener('scroll', throttle(function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, 100)); 
  
  document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
  
    if (contactForm) {
      contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
  
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
  
        if (name && email && message) {
          if (!validateEmail(email)) {
            alert('Veuillez entrer une adresse email valide.');
            return;
          }
  
          confirmationMessage.style.display = 'block';
          confirmationMessage.textContent = 'Merci ! Votre message a été envoyé.';
          confirmationMessage.classList.add('show');
  
          contactForm.reset();
  
          setTimeout(() => {
            confirmationMessage.classList.remove('show');
            confirmationMessage.style.display = 'none';
          }, 3000);
  
          console.log('Nom:', name);
          console.log('Email:', email);
          console.log('Message:', message);
        } else {
          alert('Veuillez remplir tous les champs.');
        }
      });
    }
  
    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  });