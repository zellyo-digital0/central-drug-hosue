var swiper1 = new Swiper(".testiSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".testipagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".testi-next",
    prevEl: ".testi-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },

});



var swiper2 = new Swiper('.gallerySwiper', {
  slidesPerView: 5, // Number of slides visible in the viewport
  spaceBetween: 10, // Space between slides
  loop: true, // Enable continuous loop
  speed: 9000, // Transition speed in milliseconds
  autoplay: {
      delay: 0, // Delay before starting autoplay
      disableOnInteraction: false, // Keep autoplay running even when user interacts
  },
  breakpoints: {
      320: {
          slidesPerView: 2,
      },
      768: {
          slidesPerView: 3,
          spaceBetween: 10,
      },
      1200: {
          slidesPerView: 5,
          spaceBetween: 10,
      },
  },
});


var swiper3 = new Swiper('.gallerySwiper2', {
  slidesPerView: 5.1, // Number of slides visible in the viewport
  spaceBetween: 10, // Space between slides
  loop: true, // Enable continuous loop
  speed: 8500, // Transition speed in milliseconds
  autoplay: {
      delay: 0, // Delay before starting autoplay
      disableOnInteraction: false, // Keep autoplay running even when user interacts
  },
  breakpoints: {
      320: {
          slidesPerView: 2.1,
      },
      768: {
          slidesPerView: 3.1,
          spaceBetween: 10,
      },
      1200: {
          slidesPerView: 5.1,
          spaceBetween: 10,
      },
  },
});
// Listen for Swiper's 'transitionEnd' event to handle infinite loop
swiper.on('transitionEnd', function () {
  if (swiper.realIndex === swiper.slides.length - 1) {
      swiper.slideTo(swiper.params.slidesPerView - 1, 0, false);
  }
});

swiper.autoplay.start();
