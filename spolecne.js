const menuButton = document.querySelector('#menu-tlacitko');
const menuItems = document.querySelector('#menu-polozky');
const menuIcon = menuButton.querySelector('i');

menuButton.addEventListener('click', () => {
  menuItems.classList.toggle('show');
  menuIcon.classList.toggle('fa-bars');
  menuIcon.classList.toggle('fa-xmark');
});
