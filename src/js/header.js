const button = document.querySelector('.headerButton');
const mobMenu = document.querySelector('.mobMenu');

const toggleMenu = () => {
  const isOpen = mobMenu.classList.toggle('isOpen');
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
  document.querySelector('.iconBurger').classList.toggle('hidden');
  document.querySelector('.iconClose').classList.toggle('hidden');
};

button.addEventListener('click', toggleMenu);
