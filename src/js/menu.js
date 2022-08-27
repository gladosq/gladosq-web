const menuButton = document.querySelector('.header__menu');

if (menuButton) {
  menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('header__menu--active');
  });
}
