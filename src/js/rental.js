import Swiper from 'swiper/bundle';
import 'swiper/css';

const swiper = new Swiper('.rental-swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,
  autoplay: {
    delay: 2000,
  },
  centerInsufficientSlides: false,
  centeredSlidesBounds: false,
  grabCursor: false,
  preventClicks: false,
});
