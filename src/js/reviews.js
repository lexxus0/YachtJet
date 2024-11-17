import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
const swiperContainer = document.querySelector('.review-swiper');

const swiper = new Swiper(swiperContainer, {
  direction: 'horizontal',
  loop: true,
  wrapperClass: 'review-list',
  slideClass: 'review-list-item',
  slidesPerView: 1,
  spaceBetween: 32,

  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },

    1280: {
      slidesPerView: 3,
      spaceBetween: 26,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});
