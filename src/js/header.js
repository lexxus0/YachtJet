const button = document.querySelector('.headerButton');
const mobMenu = document.querySelector('.mobMenu');
const icon = document.querySelector('.iconUse');

const toggleMenu = () => {
  const isOpen = mobMenu.classList.toggle('isOpen');
  if (isOpen) {
    document.body.style.overflow = 'hidden';
    icon.setAttribute('href', './img/sprite.svg#icon-close');
  } else {
    document.body.style.overflow = '';
    icon.setAttribute('href', './img/sprite.svg#icon-burger');
  }
};

button.addEventListener('click', toggleMenu);
