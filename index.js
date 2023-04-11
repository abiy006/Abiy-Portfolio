const burgerMenu = document.getElementById('mobileMenuid');
const mobileMenu = document.getElementById('mobile-menu-page-id');

const mobileLanding = document.getElementById('mobile-landing-id');
const mobileMenuClose = document.getElementById('mobile-menu-close-id');
const mobileMenuListLi = document.getElementById('moblie-menu-list-ul').querySelectorAll('li');

const header = document.getElementById('header');

mobileMenu.style.display = 'none';

function openMobilemenu() {
  mobileLanding.style.backgroundColor = '#6070ff';
  mobileLanding.classList.add('blur');
  header.style.backgroundColor = '#6070ff';
  header.classList.add('blur');
  mobileMenu.style.display = 'block';
}
function mobileMenuclose() {
  mobileMenu.style.display = 'none';
  header.style.backgroundColor = 'white';
  mobileLanding.style.backgroundColor = 'white';
  mobileLanding.classList.remove('blur');
  header.classList.remove('blur');
}

burgerMenu.addEventListener('click', openMobilemenu);
mobileMenuClose.addEventListener('click', mobileMenuclose);

mobileMenuListLi.forEach((listitems) => {
  listitems.addEventListener('click', mobileMenuclose);
});
