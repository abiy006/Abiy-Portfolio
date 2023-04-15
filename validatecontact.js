const contactForm = document.getElementById('contactMe');

const emailInputValidator = /^[a-z0-9_.+-]+@[a-z-]+\.[a-z0-9-.]+$/;

const onSubmit = (e) => {
  e.preventDefault();
  const message = document.getElementById('respMessage');
  const data = new FormData(e.target);
  const email = data.get('email');

  if (!emailInputValidator.test(email)) {
    message.innerHTML = '* Error: Email field should be lower case';
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
      message.innerHTML = '* Success: Thanks for contacting me!';
    });

  contactForm.reset();
};
contactForm.addEventListener('submit', onSubmit);

