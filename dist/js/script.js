const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', function() {
    this.classList.toggle('hamburger-active');
    nav.classList.toggle('hidden');
});


window.onscroll = function() {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  
  if(window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed')
  }
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    slidesPerView: "2.5",
    breakpoints: {
      "@0.00": {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      "@1.00": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.50": {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});

const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    slidesPerView: "4",
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});
