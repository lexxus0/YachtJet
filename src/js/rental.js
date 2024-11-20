import Swiper from 'swiper/bundle';
import 'swiper/css';

const swiper = new Swiper('.rental-swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,
  breakpoints: {
    768: {
      spaceBetween: 32,
      slidesPerView: 2,
    },
    1280: {
      enabled: false,
      spaceBetween: 25,
      slidesPerView: 3,
    },
    1440: {
      enabled: false,
      spaceBetween: 32,
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 3000,
  },
  preventClicks: true,
});
