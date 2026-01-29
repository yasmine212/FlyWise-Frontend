document.addEventListener('DOMContentLoaded', () => {
  // Main Slider
  new Swiper('.swiper', {
    slidesPerView: 1,
    effect: 'creative',
    creativeEffect: {
      prev: {
        translate: [0, 0, -400],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    },
    loop: true,
    direction: 'horizontal',
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    speed: 400,
    spaceBetween: 100,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

 // Fleet Slider
new Swiper('.swiper2', {
  slidesPerView: 1, 
  spaceBetween: 20,
  loop: true,
  centerSlides: true,
  grabCursor: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  speed: 400,
  pagination: {
    el: '.swiper2 .swiper-pagination', 
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper2 .swiper-button-next', 
    prevEl: '.swiper2 .swiper-button-prev', 
  },
});
  // Testimonials Slider
  new Swiper('.swiper4', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    speed: 400,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});

