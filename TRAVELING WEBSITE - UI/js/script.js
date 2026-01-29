document.addEventListener('DOMContentLoaded', () => {
  // Menu Toggle
  const menus = document.querySelector('nav ul');
  const menuBtn = document.querySelector('.menu-btn');
  const closeBtn = document.querySelector('.close-btn');

  if (menuBtn && menus) {
    menuBtn.addEventListener('click', () => {
      menus.classList.add('display');
    });
  }

  if (closeBtn && menus) {
    closeBtn.addEventListener('click', () => {
      menus.classList.remove('display');
    });
  }

  // Sticky Header
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 20) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });
  }

  // Counter Animation
  const countersEl = document.querySelectorAll('.numbers');
  countersEl.forEach((counter) => {
    counter.textContent = '0';
    incrementCounter(counter);

    function incrementCounter(counter) {
      const dataCeil = parseInt(counter.getAttribute('data-ceil'));
      let currentNum = parseInt(counter.textContent);
      const increment = dataCeil / 25;

      currentNum = Math.ceil(currentNum + increment);
      if (currentNum < dataCeil) {
        counter.textContent = currentNum;
        setTimeout(() => incrementCounter(counter), 70);
      } else {
        counter.textContent = dataCeil;
      }
    }
  });

  // Popup Functionality
  const wrapper = document.querySelector('.wrapper');
  const loginLink = document.querySelector('.login-link');
  const registerLink = document.querySelector('.register-link');
  const btnPopup = document.querySelector('.btnLogin-popup');
  const iconClose = document.querySelector('.icon-close');

  if (wrapper && loginLink && registerLink && btnPopup && iconClose) {
    registerLink.addEventListener('click', () => {
      wrapper.classList.add('active');
    });

    loginLink.addEventListener('click', () => {
      wrapper.classList.remove('active');
    });

    btnPopup.addEventListener('click', () => {
      wrapper.classList.add('active-popup');
      document.body.classList.add('active-popup');
    });

    iconClose.addEventListener('click', () => {
      wrapper.classList.remove('active-popup');
      document.body.classList.remove('active-popup');
    });

    // Placeholder Form Submission
    document.querySelector('.form-box.Login form').addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.querySelector('.form-box.Login input[type="email"]').value;
      const password = document.querySelector('.form-box.Login input[type="password"]').value;
      console.log('Connexion soumise:', { email, password });
      alert('Formulaire de connexion soumis ! Vérifiez la console pour plus de détails.');
    });

    document.querySelector('.form-box.register form').addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.querySelector('.form-box.register input[type="text"]').value;
      const password = document.querySelector('.form-box.register input[type="password"]').value;
      console.log('Inscription soumise:', { username, password });
      alert('Formulaire d’inscription soumis ! Vérifiez la console pour plus de détails.');
    });
  } else {
    console.error('Un ou plusieurs éléments du popup sont introuvables.');
  }
});

