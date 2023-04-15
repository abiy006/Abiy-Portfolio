const dynamicSection = document.getElementById('dynamic-id');

const projectsArray = [
  {
    id: 1,
    prjectName: 'Tonic',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    projectImg: 'Tonic1-pic.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'https://abiy006.github.io/',
    source: 'https://github.com/abiy006/Abiy-Portfolio',
  },
  {
    id: 2,
    prjectName: 'Multi-Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    projectImg: 'Multi-PostStory1.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'https://abiy006.github.io/',
    source: 'https://github.com/abiy006/Abiy-Portfolio',
  },
  {
    id: 3,
    prjectName: 'Tonic',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    projectImg: 'Tonic2-pic.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'https://abiy006.github.io/',
    source: 'https://github.com/abiy006/Abiy-Portfolio',
  },
  {
    id: 4,
    prjectName: 'Multi-Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    projectImg: 'Multi-PostStory1.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'https://abiy006.github.io/',
    source: 'https://github.com/abiy006/Abiy-Portfolio',
  },
];

function cardImage(imageParentDiv, imagePath) {
  const cardImage = document.createElement('img');
  cardImage.setAttribute('class', 'cardImageClass');
  // cardImage.src = '../Images/Tonic1-pic.svg';
  cardImage.src = `../Images/${imagePath}`;
  cardImage.style.backgroundRepeat = 'no-repeat';
  cardImage.style.backgroundSize = 'contain';
  cardImage.style.backgroundPosition = 'center';
  cardImage.style.backgroundColor = '#fff';
  cardImage.style.maxWidth = '100%';
  cardImage.style.maxHeight = 'auto';

  imageParentDiv.appendChild(cardImage);
}

function cardHeader1(headerParentDiv, proName) {
  const divHeader = document.createElement('div');
  divHeader.setAttribute('id', 'divHdrId');
  divHeader.style.display = 'flex';
  divHeader.setAttribute('class', 'card-hdr-div');
  divHeader.style.color = '#fff';
  divHeader.style.width = '100%';

  const singleCardh1 = document.createElement('h1');
  singleCardh1.textContent = proName;
  singleCardh1.setAttribute('class', 'singleCardh1');
  singleCardh1.style.color = '#091e42';
  singleCardh1.style.width = '100%';
  singleCardh1.style.height = '20%';
  singleCardh1.style.fontFamily = 'Poppins, sans-serif, Courier, monospace';
  singleCardh1.style.fontStyle = 'normal';
  singleCardh1.style.fontWeight = '700';

  divHeader.appendChild(singleCardh1);

  headerParentDiv.appendChild(divHeader);
}

function cardCanopy(canopyParentDiv) {
  const div1 = document.createElement('div');
  div1.style.display = 'flex';
  div1.setAttribute('id', 'canopyDivId');
  div1.setAttribute('class', 'canopyDivClas');
  div1.style.color = 'orange';
  div1.style.gap = '0.5rem';
  div1.style.alignItems = 'center';
  div1.style.paddingTop = '0.5rem';
  div1.style.paddingBottom = '0.5rem';

  const h2First = document.createElement('p');
  h2First.textContent = 'CANOPY';
  h2First.setAttribute('class', 'canopy-class');
  h2First.style.color = '#344563';
  h2First.style.fontFamily = 'Poppins, sans-serif, Courier, monospace';
  h2First.style.fontStyle = 'normal';
  h2First.style.fontWeight = '600';

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
  h2Second.setAttribute('class', 'canopy-class');
  h2Second.style.color = 'blue';
  h2Second.style.color = '#6b778c';
  h2Second.style.fontFamily = 'Poppins, sans-serif, Courier, monospace';
  h2Second.style.fontStyle = 'normal';
  h2Second.style.fontWeight = '600';

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

  const h3Second = document.createElement('p');
  h3Second.textContent = '2015';
  h3Second.setAttribute('class', 'canopy-class');
  h3Second.style.color = 'blue';
  h3Second.style.color = '#6b778c';
  h3Second.style.fontFamily = 'Poppins, sans-serif, Courier, monospace';
  h3Second.style.fontStyle = 'normal';
  h3Second.style.fontWeight = '600';

  div1.appendChild(h3Second);

  canopyParentDiv.appendChild(div1);
}

function cardDesc(descParentDiv) {
  const divDescription = document.createElement('div');
  divDescription.setAttribute('id', 'divDescId');
  divDescription.style.display = 'flex';
  divDescription.setAttribute('class', 'card-desc-div');
  divDescription.style.color = 'yellow';
  divDescription.style.width = '100%';

  const pDesc = document.createElement('p');
  pDesc.textContent = 'A daily selection of privately personalized reads; no accounts or sign-ups required.';
  pDesc.setAttribute('class', 'card-content-class');
  pDesc.style.color = '#344563';
  pDesc.style.fontFamily = 'Poppins, sans-serif, Courier, monospace';
  pDesc.style.fontStyle = 'normal';
  pDesc.style.fontWeight = '400';

  divDescription.appendChild(pDesc);

  descParentDiv.appendChild(divDescription);
}

function cardLang(langParentDiv) {
  const divLang = document.createElement('div');
  divLang.setAttribute('id', 'divLangId');
  divLang.style.display = 'flex';
  divLang.style.alignItems = 'center';
  divLang.setAttribute('class', 'card-lang-div');
  divLang.style.width = '100%';
  divLang.style.gap = '1rem';

  for (let i = 1; i <= 3; i += 1) {
    const button = document.createElement('input');
    button.setAttribute('class', 'card-lang-button');
    button.type = 'button';
    button.style.color = '#6070ff';
    button.style.padding = '2px 8px';
    button.style.backgroundColor = '#ebebff';
    button.style.border = '1px solid #ebebff';
    button.style.borderRadius = '0.5rem';
    button.setAttribute('id', `button${i}`);
    button.style.fontFamily = 'Poppins, sans-serif, Courier, monospace';
    button.style.fontStyle = 'normal';
    button.style.fontWeight = '500';
    button.style.alignItems = 'center';
    button.style.letterSpacing = '0.03em';

    if (i === 1) {
      button.value = 'html';
    } else if (i === 2) {
      button.value = 'css';
    } else if (i === 3) {
      button.value = 'javaScript';
    }
    divLang.appendChild(button);
  }

  langParentDiv.appendChild(divLang);
}

function popupHeader(comingDiv, proName, mainPopup) {
  const divHeader = document.createElement('div');
  divHeader.style.display = 'flex';
  divHeader.style.marginTop = '1rem';
  divHeader.setAttribute('class', 'dialog-header-div');

  const singleCardh1 = document.createElement('h1');
  singleCardh1.textContent = proName;
  singleCardh1.setAttribute('class', 'singleCardh1');
  singleCardh1.style.color = '#091e42';
  singleCardh1.style.width = '90%';
  singleCardh1.style.fontFamily = 'Poppins, sans-serif, Courier, monospace';
  singleCardh1.style.fontStyle = 'normal';
  singleCardh1.style.fontWeight = '700';

  divHeader.appendChild(singleCardh1);

  const divClose = document.createElement('div');
  divClose.setAttribute('id', 'dialogCloseDiv');
  divClose.style.width = '7%';

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

  divClose.appendChild(svg);

  divClose.addEventListener('click', () => {
    mainPopup.style.display = 'none';
    mainPopup.close();
  });

  divHeader.appendChild(divClose);

  comingDiv.appendChild(divHeader);
}

function popupCanopy(popupCanopy) {
  const div1 = document.createElement('div');
  div1.style.display = 'flex';
  div1.setAttribute('id', 'canopyDivId');
  div1.setAttribute('class', 'canopyDivClas');
  div1.style.color = 'orange';
  div1.style.gap = '0.5rem';
  div1.style.alignItems = 'center';
  div1.style.paddingTop = '1.5rem';
  div1.style.paddingBottom = '1rem';
  div1.style.fontSize = '100%';

  const h2First = document.createElement('p');
  h2First.textContent = 'CANOPY';
  h2First.setAttribute('class', 'canopy-class');
  h2First.style.color = '#344563';
  h2First.style.fontFamily = 'Poppins, sans-serif, Courier, monospace';
  h2First.style.fontStyle = 'normal';
  h2First.style.fontWeight = '600';

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
  h2Second.setAttribute('class', 'canopy-class');
  h2Second.style.color = 'blue';
  h2Second.style.color = '#6b778c';
  h2Second.style.fontFamily = 'Poppins, sans-serif, Courier, monospace';
  h2Second.style.fontStyle = 'normal';
  h2Second.style.fontWeight = '600';

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

  const h3Second = document.createElement('p');
  h3Second.textContent = '2015';
  h3Second.setAttribute('class', 'canopy-class');
  h3Second.style.color = 'blue';
  h3Second.style.color = '#6b778c';
  h3Second.style.fontFamily = 'Poppins, sans-serif, Courier, monospace';
  h3Second.style.fontStyle = 'normal';
  h3Second.style.fontWeight = '600';

  div1.appendChild(h3Second);

  popupCanopy.appendChild(div1);
}

function popupImage(var1ImgDiv, var2ImgPath) {
  const cardImage = document.createElement('img');
  cardImage.setAttribute('class', 'cardImageClass');
  // cardImage.src = '../Images/Tonic1-pic.svg';
  cardImage.src = `../Images/${var2ImgPath}`;
  cardImage.style.backgroundRepeat = 'no-repeat';
  cardImage.style.backgroundSize = 'contain';
  cardImage.style.backgroundPosition = 'center';
  cardImage.style.backgroundColor = '#fff';
  cardImage.style.width = '100%';
  // cardImage.style.maxHeight = '13.75rem';

  var1ImgDiv.appendChild(cardImage);
}

function popupDescription(varDiv, varTxt) {
  const divDescription = document.createElement('div');
  divDescription.setAttribute('id', 'totalDivDescId');
  divDescription.style.display = 'flex';
  divDescription.style.flexDirection = 'column';
  divDescription.setAttribute('class', 'card-desc-div');
  divDescription.style.width = '100%';

  const subDivDesc1 = document.createElement('div');
  subDivDesc1.setAttribute('id', 'divDescId1');
  subDivDesc1.style.display = 'flex';
  subDivDesc1.setAttribute('class', 'card-desc-div');
  subDivDesc1.style.width = '100%';

  const pDesc = document.createElement('p');
  pDesc.textContent = varTxt;
  pDesc.setAttribute('class', 'card-content-class');
  pDesc.style.color = '#344563';
  pDesc.style.fontFamily = 'Poppins, sans-serif, Courier, monospace';
  pDesc.style.fontStyle = 'normal';
  pDesc.style.fontWeight = '400';
  pDesc.style.width = '100%';

  subDivDesc1.appendChild(pDesc);
  divDescription.appendChild(subDivDesc1);

  const subDivDesc2 = document.createElement('div');
  subDivDesc2.setAttribute('id', 'divDescId2');
  // subDivDesc2.style.display = 'flex';
  subDivDesc2.setAttribute('class', 'card-desc-div');
  subDivDesc2.style.width = '100%';

  const pDesc2 = document.createElement('p');
  pDesc2.textContent = varTxt;
  pDesc2.setAttribute('class', 'card-content-class');
  pDesc2.style.color = '#344563';
  pDesc2.style.fontFamily = 'Poppins, sans-serif, Courier, monospace';
  pDesc2.style.fontStyle = 'normal';
  pDesc2.style.fontWeight = '400';
  pDesc2.style.width = '100%';

  subDivDesc2.appendChild(pDesc2);
  divDescription.appendChild(subDivDesc2);

  varDiv.appendChild(divDescription);
}

function popupLanguages(varDiv) {
  const divLang = document.createElement('div');
  divLang.setAttribute('id', 'divLangId');
  divLang.style.display = 'flex';
  divLang.style.flexDirection = 'column';
  divLang.style.alignItems = 'center';
  divLang.setAttribute('class', 'card-lang-div');
  divLang.style.width = '100%';
  divLang.style.gap = '0.5rem';

  const sdl1 = document.createElement('div');
  sdl1.setAttribute('id', 'subDivLang-2');
  sdl1.style.display = 'flex';
  sdl1.style.alignItems = 'center';
  sdl1.setAttribute('class', 'card-lang-div');
  sdl1.style.width = '100%';
  sdl1.style.gap = '1rem';

  for (let i = 1; i <= 3; i += 1) {
    const button = document.createElement('input');
    button.setAttribute('class', 'card-lang-button');
    button.type = 'button';
    button.style.color = '#6070ff';
    button.style.padding = '2px 8px';
    button.style.backgroundColor = '#ebebff';
    button.style.border = '1px solid #ebebff';
    button.style.borderRadius = '0.5rem';
    button.setAttribute('id', `button${i}`);
    button.style.fontFamily = 'Poppins, sans-serif, Courier, monospace';
    button.style.fontStyle = 'normal';
    button.style.fontSize = '80%';
    button.style.fontWeight = '500';
    button.style.alignItems = 'center';
    button.style.letterSpacing = '0.03em';
    button.style.margin = '1px';

    if (i === 1) {
      button.value = 'html';
    } else if (i === 2) {
      button.value = 'css';
    } else if (i === 3) {
      button.value = 'javaScript';
    }
    sdl1.appendChild(button);
  }

  const subDivLang2 = document.createElement('div');
  subDivLang2.setAttribute('id', 'subDivLang-2');
  // subDivLang2.style.display = 'flex';
  subDivLang2.style.alignItems = 'center';
  subDivLang2.setAttribute('class', 'card-lang-div');
  subDivLang2.style.width = '100%';
  subDivLang2.style.gap = '1rem';

  for (let i = 1; i <= 2; i += 1) {
    const button = document.createElement('input');
    button.setAttribute('class', 'card-lang-button');
    button.setAttribute('id', 'card-lang-button-2');
    button.type = 'button';
    button.style.color = '#6070ff';
    button.style.padding = '2px 8px';
    button.style.backgroundColor = '#ebebff';
    button.style.border = '1px solid #ebebff';
    button.style.borderRadius = '0.5rem';
    button.setAttribute('id', `button${i}`);
    button.style.fontFamily = 'Poppins, sans-serif, Courier, monospace';
    button.style.fontStyle = 'normal';
    button.style.fontSize = '80%';
    button.style.fontWeight = '500';
    button.style.alignItems = 'center';
    button.style.letterSpacing = '0.03em';
    button.style.margin = '1px';

    if (i === 1) {
      button.value = 'Ruby';
    } else if (i === 2) {
      button.value = 'Bootstrap';
    }
    subDivLang2.appendChild(button);
  }

  divLang.appendChild(sdl1);
  divLang.appendChild(subDivLang2);
  varDiv.appendChild(divLang);
}

function popupLine(parentLineDiv) {
  const divLine = document.createElement('div');
  divLine.style.display = 'flex';
  divLine.setAttribute('class', 'dialog-line-div');
  divLine.style.width = '100%';

  const lineHr = document.createElement('hr');
  lineHr.style.width = '100%';
  lineHr.style.marginBottom = '0.5rem';
  lineHr.style.marginTop = '1.5rem';

  divLine.appendChild(lineHr);

  parentLineDiv.appendChild(divLine);
}

function popupLine2(parentLine2Div) {
  const divLine = document.createElement('div');
  divLine.style.display = 'flex';
  divLine.setAttribute('class', 'dialog-desc-div');
  divLine.style.width = '100%';
  divLine.style.color = '#fff';

  const lineHr = document.createElement('p');
  lineHr.style.width = '100%';
  lineHr.style.marginBottom = '-0.5rem';
  lineHr.style.marginTop = '2rem';
  lineHr.style.color = '#fff';

  divLine.appendChild(lineHr);

  parentLine2Div.appendChild(divLine);
}

function popupFooter(parentFooterDiv) {
  const divFooter = document.createElement('div');
  divFooter.style.display = 'flex';
  divFooter.setAttribute('class', 'dialog-foot-div');
  divFooter.style.width = '100%';
  divFooter.style.height = '1.5rem';
  divFooter.style.gap = '1rem';
  divFooter.style.marginBottom = '1.5rem';
  divFooter.style.marginTop = '1.5rem';

  for (let i = 1; i <= 2; i += 1) {
    const buttonFoot = document.createElement('div');
    buttonFoot.style.display = 'flex';
    buttonFoot.style.justifyContent = 'space-between';
    buttonFoot.style.width = '50%';
    buttonFoot.style.height = '3rem';
    buttonFoot.style.border = '1px solid #6070ff';
    buttonFoot.style.borderRadius = '0.5em';
    buttonFoot.style.padding = '0.5em';
    buttonFoot.style.paddingLeft = '1em';
    buttonFoot.style.paddingRight = '1em';
    buttonFoot.style.fontFamily = 'Poppins, sans-serif, Courier, monospace';
    buttonFoot.style.fontStyle = 'normal';
    buttonFoot.style.fontWeight = '500';
    buttonFoot.style.letterSpacing = '0.03em';
    buttonFoot.style.alignItems = 'center';
    buttonFoot.style.textAlign = 'center';
    buttonFoot.style.color = '#396df2';
    buttonFoot.style.gap = '0.5rem';
    buttonFoot.style.backgroundColor = '#fff';

    if (i === 1) {
      const foot1Text = document.createElement('p');
      foot1Text.textContent = 'See live';
      foot1Text.style.backgroundColor = '#fff';
      foot1Text.setAttribute('class', 'popup-footer-btn-txt');

      buttonFoot.appendChild(foot1Text);

      const foot1Img = document.createElement('img');
      foot1Img.setAttribute('class', 'popup-footer-btn-img');
      foot1Img.style.backgroundImage = "url('../Images/See-live2.png')";
      foot1Img.style.backgroundRepeat = 'no-repeat';
      foot1Img.style.backgroundSize = 'contain';
      foot1Img.style.width = '1.5rem';

      buttonFoot.appendChild(foot1Img);
    } else if (i === 2) {
      const foot1Text = document.createElement('p');
      foot1Text.textContent = 'See source';
      foot1Text.style.backgroundColor = '#fff';
      foot1Text.setAttribute('class', 'popup-footer-btn-txt');

      buttonFoot.appendChild(foot1Text);

      const foot1Img = document.createElement('img');
      foot1Img.setAttribute('class', 'popup-footer-btn-img');
      foot1Img.style.backgroundColor = '#fff';
      foot1Img.style.backgroundImage = "url('../Images/Git-Icon.svg')";
      foot1Img.style.backgroundRepeat = 'no-repeat';
      foot1Img.style.backgroundSize = 'contain';
      foot1Img.style.width = '1.5rem';

      buttonFoot.appendChild(foot1Img);
    }
    divFooter.appendChild(buttonFoot);
  }

  parentFooterDiv.appendChild(divFooter);
}

function cardBtn(btnParentDiv, proIdNo, passedImg, passedHeading, passedDesc1) {
  const divSeeProj = document.createElement('div');
  divSeeProj.setAttribute('id', 'divSeeProjectId');
  divSeeProj.style.width = '100%';

  const button = document.createElement('input');
  button.setAttribute('class', 'seeProjectBtn');
  button.type = 'button';
  button.setAttribute('id', `button${proIdNo}`);
  button.value = 'See Project';
  button.style.backgroundColor = '#fff';
  button.style.border = '1px solid #6070ff';
  button.style.borderRadius = '0.5em';
  button.style.padding = '0.5em';
  button.style.fontFamily = 'Poppins, sans-serif, Courier, monospace';
  button.style.fontStyle = 'normal';
  button.style.fontWeight = '500';
  button.style.letterSpacing = '0.03em';
  button.style.alignItems = 'center';
  button.style.textAlign = 'center';
  button.style.color = '#396df2';

  divSeeProj.appendChild(button);

  btnParentDiv.appendChild(divSeeProj);

  button.addEventListener('click', () => {
    const modalId = document.getElementById('modal-id');

    modalId.style.justifyContent = 'center';
    modalId.style.width = '100%';
    modalId.style.height = '200vh';
    modalId.style.background = '#fff';
    modalId.style.borderRadius = '1rem';
    modalId.style.marginLeft = '1.25rem';
    modalId.style.marginRight = '1rem';
    modalId.style.display = 'flex';

    const headerDialog = document.getElementById('header-dialog-section');
    headerDialog.style.width = '100%';
    headerDialog.style.height = 'auto';
    headerDialog.style.background = '#fff';
    headerDialog.style.margin = '1rem';
    headerDialog.style.display = 'flex';
    headerDialog.style.flexDirection = 'column';

    const dialogDiv1 = document.createElement('div');
    dialogDiv1.setAttribute('class', 'dialogDiv1Class');
    dialogDiv1.style.display = 'flex';

    const dialogDiv2 = document.createElement('div');
    dialogDiv2.setAttribute('class', 'dialogDiv2Class');
    dialogDiv2.style.display = 'flex';
    const dialogDiv2A = document.createElement('div');
    dialogDiv2A.setAttribute('class', 'dialogDiv2A');
    dialogDiv2A.style.display = 'flex';
    dialogDiv2A.style.flexDirection = 'column';
    dialogDiv2A.style.width = '75%';
    dialogDiv2A.style.marginRight = '1rem';
    dialogDiv2.appendChild(dialogDiv2A);
    const dialogDiv2B = document.createElement('div');
    dialogDiv2B.setAttribute('class', 'dialogDiv2B');
    dialogDiv2B.style.display = 'flex';
    dialogDiv2B.style.flexDirection = 'column';
    dialogDiv2B.style.justifyContent = 'start';

    dialogDiv2.appendChild(dialogDiv2B);

    popupHeader(dialogDiv1, passedHeading, modalId);
    popupCanopy(dialogDiv1);
    popupImage(dialogDiv1, passedImg);

    popupDescription(dialogDiv2A, passedDesc1);
    popupLanguages(dialogDiv2B);
    popupLine(dialogDiv2B);
    popupFooter(dialogDiv2B);
    popupLine2(dialogDiv2B);

    headerDialog.appendChild(dialogDiv1);
    headerDialog.appendChild(dialogDiv2);

    // scroll(0, 0);
    modalId.showModal();
  });

  button.onmouseenter = function () {
    button.style.backgroundColor = '#6070ff';
    button.style.color = '#fff';
  };
  button.onmouseleave = function () {
    button.style.backgroundColor = '#fff';
    button.style.color = '#396df2';
  };
  button.onmousedown = function () {
    button.style.backgroundColor = '#2230d2';
    button.style.color = '#fff';
  };
}

function dynamicCards(imgName, projName, projId, projDesc) {
  const singleCard = document.createElement('div');
  singleCard.setAttribute('id', 'individualCard');
  singleCard.setAttribute('class', 'fullCardClass');
  singleCard.style.display = 'flex';
  singleCard.style.backgroundColor = 'white';
  singleCard.style.width = '75%';

  singleCard.style.margin = '3rem';
  singleCard.style.padding = '1rem';
  singleCard.style.gap = '1rem';
  singleCard.style.borderRadius = '1rem';

  for (let i = 1; i <= 2; i += 1) {
    const halfCard = document.createElement('div');
    halfCard.setAttribute('id', `${projId}halfCard${i}`);
    halfCard.setAttribute('class', 'halfCardClass');
    halfCard.style.display = 'flex';
    halfCard.style.flexDirection = 'column';

    if (i === 1) {
      cardImage(halfCard, imgName);
    } else if (i === 2) {
      cardHeader1(halfCard, projName);

      cardCanopy(halfCard);

      cardDesc(halfCard);

      cardLang(halfCard);

      cardBtn(halfCard, projId, imgName, projName, projDesc);
    }

    singleCard.appendChild(halfCard);
  }

  dynamicSection.appendChild(singleCard);
}

for (let i = 0; i < projectsArray.length; i += 1) {
  dynamicCards(projectsArray[i].projectImg, projectsArray[i].prjectName,
    i, projectsArray[i].description);
}
