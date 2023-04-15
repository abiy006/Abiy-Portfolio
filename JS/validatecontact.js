const contactForm1 = document.getElementById('contactMeMob');
const contactForm2 = document.getElementById('contactMeDesk');

const emailInputValidator = /^[a-z0-9_.+-]+@[a-z-]+\.[a-z0-9-.]+$/;

const onSubmit = (e) => {
  e.preventDefault();
  const message1 = document.getElementById('response-mob');
  const message2 = document.getElementById('response-desk');
  const data = new FormData(e.target);
  const email = data.get('email');

  if (!emailInputValidator.test(email)) {
    message1.innerHTML = '* Error: Email field should be lower case';
    message1.style.color = '#602';
    message1.style.marginTop = '1rem';
    message2.innerHTML = '* Error: Email field should be lower case';
    message2.style.color = '#602';
    message2.style.marginTop = '1rem';
    return;
  }

  fetch(e.target.action, {
    method: 'POST',
    body: data,
    headers: {
      Accept: 'application/json',
    },
  })
    .then(() => {
      message1.innerHTML = '* Success: Thanks for contacting me!';
      message1.style.color = 'greenyellow';
      message1.style.marginTop = '1rem';
      message2.innerHTML = '* Success: Thanks for contacting me!';
      message2.style.color = 'greenyellow';
      message2.style.marginTop = '1rem';
    });

  contactForm1.reset();
  contactForm2.reset();
};
contactForm1.addEventListener('submit', onSubmit);
contactForm2.addEventListener('submit', onSubmit);
