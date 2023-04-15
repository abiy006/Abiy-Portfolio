const burgerMenu = document.getElementById('mobileMenuid');
const mobileMenu = document.getElementById('mobile-menu-page-id');

// const cardSectionId = document.getElementById('card-section-id');
const aMS = document.getElementById('ams');
const contactMeMobile = document.getElementById('contactMobileId');

const mobileLanding = document.getElementById('mobile-landing-id');
const mobileMenuClose = document.getElementById('mobile-menu-close-id');
const mobileMenuListLi = document.getElementById('moblie-menu-list-ul').querySelectorAll('li');

const headerId = document.getElementById('mobileHeader');

mobileMenu.style.display = 'none';

function openMobilemenu() {
  aMS.style.display = 'none';
  contactMeMobile.style.display = 'none';

  mobileLanding.style.backgroundColor = '#6070ff';
  mobileLanding.classList.add('blur');
  headerId.style.backgroundColor = '#6070ff';
  headerId.classList.add('blur');

  mobileMenu.style.display = 'block';
}

function mobileMenuclose() {
  mobileMenu.style.display = 'none';

  aMS.style.display = 'block';
  contactMeMobile.style.display = 'block';

  headerId.style.backgroundColor = 'white';
  mobileLanding.style.backgroundColor = 'white';
  mobileLanding.classList.remove('blur');
  headerId.classList.remove('blur');
}

burgerMenu.addEventListener('click', openMobilemenu);
mobileMenuClose.addEventListener('click', mobileMenuclose);

mobileMenuListLi.forEach((listitems) => {
  listitems.addEventListener('click', mobileMenuclose);
});
