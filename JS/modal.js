
const modalId = document.getElementById('modal-id');
const headerDialog = document.getElementById('header-dialog-section');

const cardButtons = document.getElementById("card-section-id").querySelectorAll('button');


function popupDialog() {
  headerDialog.style.display = 'flex';
  headerDialog.style.flexDirection = 'column';
  headerDialog.style.margin = '1rem';

}

function popupHeader() {
  const divHeader = document.createElement('div');
  divHeader.style.display = 'flex';
  divHeader.style.justifyContent = 'space-between';
  divHeader.setAttribute('class', 'dialog-header-div');
  divHeader.style.color = 'red';
  divHeader.style.width = '90%';

  const h1 = document.createElement('h1');
  h1.textContent = 'New Heading!!!';
  h1.setAttribute('class', 'note');
  h1.style.color = 'red';
  h1.style.top = '0';
  divHeader.appendChild(h1);

  const div1 = document.createElement('div');
  div1.setAttribute('class', 'header-dialog-close2');
  div1.style.color = 'red';
  div1.style.width = '7%';

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('stroke-width', '1.5');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('class', 'w-6 h-6');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('stroke-linecap', 'round');
  path.setAttribute('stroke-linejoin', 'round');
  path.setAttribute('d', 'M6 18L18 6M6 6l12 12');
  svg.appendChild(path);
  div1.appendChild(svg);
  divHeader.appendChild(div1);

  headerDialog.appendChild(divHeader);
}

function popupCanopy() {
  const div1 = document.createElement('div');
  div1.setAttribute('class', 'div-canopy');
  div1.style.display = 'flex'
  div1.style.color = 'orange';
  div1.style.width = '80%';
  div1.style.gap = '1rem';
  div1.style.alignItems = 'center';

  const h2First = document.createElement('p');
  h2First.textContent = 'CANOPY';
  h2First.setAttribute('class', 'note');
  h2First.style.color = 'blue';

  div1.appendChild(h2First);

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '8');
  svg.setAttribute('height', '8');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('viewBox', '0 0 8 8');
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', '4');
  circle.setAttribute('cy', '4');
  circle.setAttribute('r', '4');
  circle.setAttribute('fill', '#C1C7D0');
  svg.appendChild(circle);
  div1.appendChild(svg);

  const h2Second = document.createElement('p');
  h2Second.textContent = 'Back End Dev';
  h2Second.setAttribute('class', 'note');
  h2Second.style.color = 'blue';

  div1.appendChild(h2Second);

  const svg2 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg2.setAttribute('width', '8');
  svg2.setAttribute('height', '8');
  svg2.setAttribute('fill', 'none');
  svg2.setAttribute('viewBox', '0 0 8 8');
  const circle2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle2.setAttribute('cx', '4');
  circle2.setAttribute('cy', '4');
  circle2.setAttribute('r', '4');
  circle2.setAttribute('fill', '#C1C7D0');
  svg2.appendChild(circle2);
  div1.appendChild(svg2);

  headerDialog.appendChild(div1);
}

function popupImage() {
  const imageDiv = document.createElement('div');
  imageDiv.style.width = '80%';
  imageDiv.style.height = '5rem';

  const actualImage = document.createElement('img');
  actualImage.style.width = '100%';
  actualImage.style.height = '100%';
  // actualImage.style.backgroundImage = "url('https://sebhastian.com/img/default.png')";
  actualImage.style.backgroundImage = "url('../Images/Tonic1-pic.svg')";
  actualImage.style.backgroundRepeat = 'no-repeat';
  actualImage.style.backgroundSize = 'contain';

  imageDiv.appendChild(actualImage);

  headerDialog.appendChild(imageDiv);

}

function popupDescription() {
  const divDescription = document.createElement('div');
  divDescription.style.display = 'flex';
  divDescription.setAttribute('class', 'dialog-desc-div');
  divDescription.style.color = 'red';
  divDescription.style.width = '90%';

  const pDesc = document.createElement('p');
  pDesc.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent";
  pDesc.setAttribute('class', 'desc');
  pDesc.style.color = 'red';
  
  divDescription.appendChild(pDesc);

  headerDialog.appendChild(divDescription);
}

function popupLanguages() {
  const divLang = document.createElement('div');
  divLang.style.display = 'flex';
  divLang.setAttribute('class', 'dialog-lang-div');
  divLang.style.color = 'red';
  divLang.style.width = '90%';

  for (let i = 1; i <= 3; i++) {
    const button = document.createElement('input');
    button.type  = 'button';
    // button.value = 'button' + i;
    if (i == 1) {
      button.value = 'HTML';
    } else if (i == 2) {
      button.value = 'CSS';
    } else if (i == 3) {
      button.value = 'JavaScript';
    }
    divLang.appendChild(button);
  }

  headerDialog.appendChild(divLang);
}

function popupLine() {
  const divLine = document.createElement('div');
  divLine.style.display = 'flex';
  divLine.setAttribute('class', 'dialog-desc-div');
  divLine.style.color = 'red';
  divLine.style.width = '100%';

  const lineHr = document.createElement('hr');
  lineHr.style.width = '100%';
  lineHr.style.color = 'red';
  
  divLine.appendChild(lineHr);

  headerDialog.appendChild(divLine);
}

function popupFooter() {
  const divFooter = document.createElement('div');
  divFooter.style.display = 'flex';
  divFooter.setAttribute('class', 'dialog-foot-div');
  divFooter.style.color = 'red';
  divFooter.style.width = '100%';
  divFooter.style.height = '1rem';
  divFooter.style.gap = '2rem';


  for (let i = 1; i <= 2; i++) {
    
    const buttonFoot = document.createElement('div');
    buttonFoot.style.display = 'flex';
    buttonFoot.style.width = '50%';
    buttonFoot.style.height = '2rem';
    // button.value = 'button' + i;
    if (i == 1) {

      const foot1Text = document.createElement('p');
      foot1Text.textContent = "See live";
      foot1Text.style.backgroundColor = 'blue';
      buttonFoot.appendChild(foot1Text);

      const foot1Img = document.createElement('img');
      foot1Img.style.backgroundColor = 'red';
      foot1Img.style.backgroundImage = "url('../Images/See-live.svg')";
      foot1Img.style.backgroundRepeat = 'no-repeat';
      foot1Img.style.width = '1.5rem';
      foot1Img.style.height = '1.5rem';
      buttonFoot.appendChild(foot1Img);

    } else if (i == 2) {

      const foot1Text = document.createElement('p');
      foot1Text.textContent = "See live";
      foot1Text.style.backgroundColor = 'blue';
      buttonFoot.appendChild(foot1Text);

      const foot1Img = document.createElement('img');
      foot1Img.style.backgroundColor = 'red';
      foot1Img.style.backgroundImage = "url('../Images/Git-Icon.svg')";
      foot1Img.style.backgroundRepeat = 'no-repeat';
      foot1Img.style.width = '1.5rem';
      foot1Img.style.height = '1.5rem';
      buttonFoot.appendChild(foot1Img);

    }
    divFooter.appendChild(buttonFoot);
  }

  headerDialog.appendChild(divFooter);
}

cardButtons.forEach((button) => {

  button.addEventListener('click', () => {

    popupDialog();
    popupHeader()
    popupCanopy();
    popupImage();
    popupDescription();
    popupLanguages();
    popupLine();
    popupFooter();

    scroll(0,0)
    modalId.showModal();
  });
})



const closeModal = () => {
  document.getElementById('modal-id').classList.remove('open');
};
