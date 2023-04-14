  const dynamicSection = document.getElementById('dynamic-id');


  function dynamicCards(imgName, projName, projId) {

    const singleCard = document.createElement('div');
    singleCard.setAttribute('id','individualCard');
    singleCard.setAttribute('class', 'fullCardClass');
    singleCard.style.display = 'flex';
    singleCard.style.backgroundColor = 'white';
    singleCard.style.width = '75%';
    
    singleCard.style.margin = '3rem';
    singleCard.style.padding = '1rem';
    singleCard.style.gap = '1rem';
    singleCard.style.borderRadius = '1rem';
  
    for (let i = 1; i <= 2; i++) {

      const halfCard = document.createElement('div');
      halfCard.setAttribute('id',projId + 'halfCard' + i);
      halfCard.setAttribute('class', 'halfCardClass');
      halfCard.style.display = 'flex';
      halfCard.style.flexDirection = 'column';

        if (i == 1) {

            cardImage(halfCard, imgName);


        } else if (i == 2) {

        cardHeader1(halfCard, projName);

        cardCanopy(halfCard);

        cardDesc(halfCard);

        cardLang(halfCard);

        cardBtn(halfCard, projId);
  
        }

        singleCard.appendChild(halfCard);

    }

    dynamicSection.appendChild(singleCard);

  }

  function cardImage(imageParentDiv, imagePath) {

    const cardImage = document.createElement('img');
    cardImage.setAttribute('class', 'cardImageClass');
    // cardImage.src = '../Images/Tonic1-pic.svg';
    cardImage.src = '../Images/' + imagePath;
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
    divHeader.setAttribute('id','divHdrId');
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
    div1.setAttribute('id','canopyDivId');
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
    divDescription.setAttribute('id','divDescId');
    divDescription.style.display = 'flex';
    divDescription.setAttribute('class', 'card-desc-div');
    divDescription.style.color = 'yellow';
    divDescription.style.width = '100%';
  
    const pDesc = document.createElement('p');
    pDesc.textContent = "A daily selection of privately personalized reads; no accounts or sign-ups required.";
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
    divLang.setAttribute('id','divLangId');
    divLang.style.display = 'flex';
    divLang.style.alignItems = 'center';
    divLang.setAttribute('class', 'card-lang-div');
    divLang.style.width = '100%';
    divLang.style.gap = '1rem';
  
    for (let i = 1; i <= 3; i++) {
      const button = document.createElement('input');
      button.setAttribute('class', 'card-lang-button');
      button.type  = 'button';
      button.style.color = '#6070ff';
      button.style.padding = '2px 8px';
      button.style.backgroundColor = '#ebebff';
      button.style.border = '1px solid #ebebff'
      button.style.borderRadius = '0.5rem';
      button.setAttribute('id','button' + i);
      button.style.fontFamily = 'Poppins, sans-serif, Courier, monospace';
      button.style.fontStyle = 'normal';
      button.style.fontWeight = '500';
      button.style.alignItems = 'center';
      button.style.letterSpacing = '0.03em'

      if (i == 1) {
        button.value = 'html';
      } else if (i == 2) {
        button.value = 'css';
      } else if (i == 3) {
        button.value = 'javaScript';
      }
      divLang.appendChild(button);
    }
  
    langParentDiv.appendChild(divLang);
  }
  
  function cardBtn(btnParentDiv, proIdNo) {

    const divSeeProj = document.createElement('div');
    divSeeProj.setAttribute('id','divSeeProjectId');
    divSeeProj.style.width = '100%';


    const button = document.createElement('input');
    button.setAttribute('class', 'seeProjectBtn');
    button.type  = 'button';
    button.setAttribute('id','button' + proIdNo);
    button.value = 'See Project';
    button.style.backgroundColor = '#fff';
    button.style.border = '1px solid #6070ff'
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

    button.addEventListener('click', function(event) {
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

    button.onmouseenter = function() 
    {
        button.style.backgroundColor = '#6070ff';
        button.style.color = '#fff';
    }
    button.onmouseleave = function() 
    {
        button.style.backgroundColor = '#fff';
        button.style.color = '#396df2';
    }
    button.onmousedown = function() 
    {
        button.style.backgroundColor = '#2230d2';
        button.style.color = '#fff';
    }

  }


  const projectsArray = [
    {
      id: 1,
      prjectName: 'Tonic',
      description: "Lorem Ipsum is r took a galley of type and scrambled it 1960s.",
      projectImg: 'Tonic1-pic.svg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveVersion: 'https://abiy006.github.io/',
      source: 'https://github.com/abiy006/Abiy-Portfolio',
    },
  
    {
      id: 2,
      prjectName: 'Multi-Post Stories',
      description: "Lorem Ipsum is r took a galley of type and scrambled it 1960s.",
      projectImg: 'Multi-PostStory1.svg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveVersion: 'https://abiy006.github.io/',
      source: 'https://github.com/abiy006/Abiy-Portfolio',
    },
    {
      id: 3,
      prjectName: 'Tonic',
      description: "Lorem Ipsum is r took a galley of type and scrambled it 1960s.",
      projectImg: 'Tonic2-pic.svg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveVersion: 'https://abiy006.github.io/',
      source: 'https://github.com/abiy006/Abiy-Portfolio',
    },
    {
      id: 4,
      prjectName: 'Multi-Post Stories',
      description: "Lorem Ipsum is r took a galley of type and scrambled it 1960s.",
      projectImg: 'Multi-PostStory1.svg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveVersion: 'https://abiy006.github.io/',
      source: 'https://github.com/abiy006/Abiy-Portfolio',
    },
  ];

   console.log(projectsArray);


  for (let i = 0; i < projectsArray.length; i++) {

    dynamicCards(projectsArray[i].projectImg, projectsArray[i].prjectName, i);

  }


  const modalId = document.getElementById('modal-id');
  const headerDialog = document.getElementById('header-dialog-section');
  
  
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
  

