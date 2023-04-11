const burger_menu = document.getElementById('mobileMenuid');
const mobile_menu = document.getElementById("mobile-menu-page-id");

const mobile_landing = document.getElementById('mobile-landing-id');
const mobile_menu_close = document.getElementById('mobile-menu-close-id');
const mobile_menu_list_li = document.getElementById('moblie-menu-list-ul').querySelectorAll('li')

const header = document.getElementById('header');

mobile_menu.style.display = 'none';

burger_menu.addEventListener('click', openMobilemenu);
mobile_menu_close.addEventListener('click', mobileMenuclose);

mobile_menu_list_li.forEach(listitems => {
  listitems.addEventListener('click', mobileMenuclose)
  })

function openMobilemenu() {
  mobile_landing.style.backgroundColor = '#6070ff';
  mobile_landing.classList.add('blur');
  header.style.backgroundColor = '#6070ff';
  header.classList.add('blur');
  mobile_menu.style.display = 'block';
}
function mobileMenuclose() {
  mobile_menu.style.display = 'none';
  header.style.backgroundColor = 'white';
  mobile_landing.style.backgroundColor = 'white';
  mobile_landing.classList.remove('blur');
  header.classList.remove('blur');
}