/* в этот файл добавляет скрипты*/

/* Burger-menu */
const buttonMenu = document.querySelector('.burger-menu');
const burgerMenu = document.querySelector('.main-navigation');

const shownBurgerMenu = function () {
  buttonMenu.classList.toggle('burger-menu--opened');
  burgerMenu.classList.toggle('main-navigation--opened-menu');
};

buttonMenu.addEventListener('click', shownBurgerMenu);
