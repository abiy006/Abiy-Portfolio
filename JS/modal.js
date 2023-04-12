// const buttons = document.getElementById('works').querySelectorAll('button')

const modalId = document.getElementById('modal-id');
const headerDialog = document.getElementById('header-dialog-section');
// modalId.style.display = 'none';

// const cardButtons = document.getElementById('card-section-id').querySelectorAll('button');
const cardButtons = document.getElementById("card-section-id").querySelectorAll('button');

const openModal = () => {
  // document.getElementById('modal').classList.add('open')
  // document.getElementById('modal-id').classList.add('open')
  // modalId.style.display = 'block';
  //  alert("This is cutome alert")
};

// button.onclick = () => {
//     window.open('https://javascript.info');
//   };

cardButtons.forEach((button) => {
  // button.addEventListener('click', openModal);
  button.addEventListener('click', () => {
    headerDialog.style.display = 'flex';
    headerDialog.style.justifyContent = 'space-between';
    const h1 = document.createElement('h1');
    h1.textContent = 'New Heading!!!';
    h1.setAttribute('class', 'note');
    h1.style.color = 'red';
    h1.style.top = '0';
    h1.style.marginTop = '10px';
    headerDialog.insertBefore(h1, div);
    // headerDialog.appendChild(h1);
    scroll(0,0)
    modalId.showModal();
  });
})



const closeModal = () => {
  document.getElementById('modal-id').classList.remove('open');
};


// function openMobilemenu() {
//   cardSectionId.style.display = 'none';
//   aMS.style.display = 'none';
//   contactMeMobile.style.display = 'none';

//   mobileLanding.style.backgroundColor = '#6070ff';
//   mobileLanding.classList.add('blur');
//   headerId.style.backgroundColor = '#6070ff';
//   headerId.classList.add('blur');

//   mobileMenu.style.display = 'block';
// }

// function mobileMenuclose() {
//   mobileMenu.style.display = 'none';

//   cardSectionId.style.display = 'block';
//   aMS.style.display = 'block';
//   contactMeMobile.style.display = 'block';

//   headerId.style.backgroundColor = 'white';
//   mobileLanding.style.backgroundColor = 'white';
//   mobileLanding.classList.remove('blur');
//   headerId.classList.remove('blur');
// }

// burgerMenu.addEventListener('click', openMobilemenu);
// mobileMenuClose.addEventListener('click', mobileMenuclose);

// mobileMenuListLi.forEach((listitems) => {
//   listitems.addEventListener('click', mobileMenuclose);
// });
