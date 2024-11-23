const mobMenu = document.querySelector('.mobMenu');
const openButton = document.querySelector('.iconBurger');
const closeButton = document.querySelector('.iconClose');

const toggleMenu = () => {
  const isOpen = mobMenu.classList.toggle('isOpen');

  document.body.style.overflow = isOpen ? 'hidden' : '';

  openButton.classList.toggle('hidden');
  closeButton.classList.toggle('hidden');

  const isMenuOpen = openButton.getAttribute('aria-expanded') === 'true';
  openButton.setAttribute('aria-expanded', !isMenuOpen);

  const anchors = mobMenu.querySelectorAll('a[href*="#"]');
  if (isOpen) {
    anchors.forEach(anchor => anchor.addEventListener('click', closeMenu));
  } else {
    anchors.forEach(anchor => anchor.removeEventListener('click', closeMenu));
  }
};

const closeMenu = () => {
  mobMenu.classList.remove('isOpen');
  document.body.style.overflow = '';
  openButton.classList.remove('hidden');
  closeButton.classList.add('hidden');
  openButton.setAttribute('aria-expanded', false);
};

openButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);
