const var2 = document.getElementById('mobile-menu-page-id');
const var1 = document.getElementById('mobile-landing-id');
const var3 = document.getElementById('mobile-menu-close-id');
const header = document.getElementById('header');
const var4 = document.getElementById('mobileMenuid');

var2.style.display = 'none';
function openMobilemenu() {
  var1.style.backgroundColor = '#6070ff';
  var1.classList.add('blur');
  header.style.backgroundColor = '#6070ff';
  header.classList.add('blur');
  var2.style.display = 'block';
}
function mobileMenuclose() {
  var2.style.display = 'none';
  header.style.backgroundColor = 'white';
  var1.style.backgroundColor = 'white';
  var1.classList.remove('blur');
  header.classList.remove('blur');
}

var3.addEventListener('click', mobileMenuclose);
var4.addEventListener('click', openMobilemenu);