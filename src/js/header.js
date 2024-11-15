const button = document.querySelector(".headerButton");
const header = document.querySelector(".headerWrapper");
const mobMenu = document.querySelector(".mobMenu");
const icon = document.querySelector(".iconUse");

const toggleMenu = () => {
  mobMenu.classList.toggle("isOpen");
  header.classList.toggle("fixed");
  if (icon.getAttribute("href") === "../img/sprite.svg#icon-burger") {
    icon.setAttribute("href", "../img/sprite.svg#icon-close");
  } else {
    icon.setAttribute("href", "../img/sprite.svg#icon-burger");
  }
};

button.addEventListener("click", toggleMenu);
