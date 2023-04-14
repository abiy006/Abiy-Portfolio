  const dynamicSection = document.getElementById('dynamic-id');

  function dynamicCards() {

    const singleCard = document.createElement('div');
    singleCard.setAttribute('id','singleCard1');
    singleCard.setAttribute('class', 'fullCardClass');
    singleCard.style.display = 'flex';
    singleCard.style.backgroundColor = 'white';
    singleCard.style.width = '75%';
    
    // const v1 = document.getElementById('singleCard1');
    // const v2 = singleCard.getBoundingClientRect();
    
    // singleCard.style.width = '75%';
    // singleCard.style.width = calcMyWidth();
    singleCard.style.margin = '1rem';
    singleCard.style.padding = '1rem';
    singleCard.style.gap = '1rem';
    singleCard.style.borderRadius = '1rem';
  
    for (let i = 1; i <= 2; i++) {

      const halfCard = document.createElement('div');
      halfCard.setAttribute('id','halfCard' + i);
      halfCard.setAttribute('class', 'halfCardClass');
      halfCard.style.display = 'flex';
      halfCard.style.flexDirection = 'column';
    //   halfCard.style.width = '50%';
    //   halfCard.style.height = '496px';
      // button.value = 'button' + i;
        if (i == 1) {

        const cardImage = document.createElement('img');
        cardImage.style.backgroundColor = 'white';
        cardImage.src = '../Images/deskcard1.svg';
        cardImage.style.backgroundRepeat = 'no-repeat';
        cardImage.style.backgroundSize = 'contain';
        cardImage.style.backgroundPosition = 'center';
        cardImage.style.backgroundColor = '#fff';
        cardImage.style.maxWidth = '100%';
        cardImage.style.maxHeight = 'auto';

        halfCard.appendChild(cardImage);

        } else if (i == 2) {
  
        const singleCardh1 = document.createElement('h1');
        singleCardh1.textContent = 'Tonic';
        singleCardh1.setAttribute('class', 'singleCardh1');
        singleCardh1.style.color = '#091e42';
        singleCardh1.style.width = '60%';
        // singleCardh1.style.height = '2.875rem';
        singleCardh1.style.height = '20%';
        singleCardh1.style.fontFamily = 'Poppins, sans-serif, Courier, monospace';
        singleCardh1.style.fontStyle = 'normal';
        singleCardh1.style.fontWeight = '700';
        // singleCardh1.style.fontSize = '2.5rem';
        // singleCardh1.style.fontSize = '300%';
        // singleCardh1.style.lineHeight = '3.25rem';
        // singleCardh1.style.marginTop = '2rem';
        // singleCardh1.style.marginBottom = '1rem';
        halfCard.appendChild(singleCardh1);

        cardCanopy(halfCard);

        cardDesc(halfCard);

        cardLang(halfCard);

        cardBtn(halfCard);
  
        }

        singleCard.appendChild(halfCard);

    }

    dynamicSection.appendChild(singleCard);

  }

  
  function cardCanopy(canopyParentDiv) {

    const div1 = document.createElement('div');
    div1.style.display = 'flex';
    div1.setAttribute('id','canopyDivId');
    div1.setAttribute('class', 'canopyDivClas');
    div1.style.color = 'orange';
    // div1.style.width = '100%';
    div1.style.gap = '0.5rem';
    div1.style.alignItems = 'center';
    div1.style.paddingTop = '0.5rem';
    div1.style.paddingBottom = '0.5rem';
  
    const h2First = document.createElement('p');
    h2First.textContent = 'CANOPY';
    h2First.setAttribute('class', 'canopy-class');
    h2First.style.color = '#344563';
    // h2First.style.height = '1.5rem';
    h2First.style.fontFamily = 'Poppins, sans-serif, Courier, monospace';
    h2First.style.fontStyle = 'normal';
    h2First.style.fontWeight = '600';
    // h2First.style.fontSize = '112.5%';
    // h2First.style.lineHeight = '150%';
    // h2First.style.marginTop = '1rem';
    // h2First.style.marginBottom = '1rem';
    div1.appendChild(h2First);
  
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '8');
    svg.setAttribute('height', '8');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('viewBox', '0 0 8 8');
    // svg.style.marginTop = '1rem';
    // svg.style.marginBottom = '1rem';
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
    // h2Second.style.height = '1.5rem';
    h2Second.style.fontFamily = 'Poppins, sans-serif, Courier, monospace';
    h2Second.style.fontStyle = 'normal';
    h2Second.style.fontWeight = '600';
    // h2Second.style.fontSize = '1.125rem';
    // h2Second.style.lineHeight = '1.5rem';
    // h2Second.style.marginTop = '1rem';
    // h2Second.style.marginBottom = '1rem';
    div1.appendChild(h2Second);
  
    const svg2 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg2.setAttribute('width', '8');
    svg2.setAttribute('height', '8');
    svg2.setAttribute('fill', 'none');
    svg2.setAttribute('viewBox', '0 0 8 8');
    // svg2.style.marginTop = '1rem';
    // svg2.style.marginBottom = '1rem';
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
    // h3Second.style.height = '1.5rem';
    h3Second.style.fontFamily = 'Poppins, sans-serif, Courier, monospace';
    h3Second.style.fontStyle = 'normal';
    h3Second.style.fontWeight = '600';
    // h3Second.style.fontSize = '1.125rem';
    // h3Second.style.lineHeight = '1.5rem';
    // h2Second.style.marginTop = '1rem';
    // h2Second.style.marginBottom = '1rem';
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
    // pDesc.style.height = '3.125rem';
    pDesc.style.fontFamily = 'Poppins, sans-serif, Courier, monospace';
    pDesc.style.fontStyle = 'normal';
    pDesc.style.fontWeight = '400';
    // pDesc.style.fontSize = '1rem';
    // pDesc.style.lineHeight = '1.5rem';
    // pDesc.style.marginTop = '2rem';
    // pDesc.style.marginBottom = '1rem';

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
    //   button.style.height = '1.5rem';
      button.setAttribute('id','button' + i);
      button.style.fontFamily = 'Poppins, sans-serif, Courier, monospace';
      button.style.fontStyle = 'normal';
      button.style.fontWeight = '500';
    //   button.style.fontSize = '0.75rem';
    //   button.style.lineHeight = '1rem';
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
  
  function cardBtn(btnParentDiv) {

    const button = document.createElement('input');
    button.setAttribute('class', 'card-see-button');
    button.type  = 'button';
    button.setAttribute('id','button' + 1);
    button.value = 'See Project';
    // button.style.width = '7.875rem';
    button.style.backgroundColor = '#fff';
    button.style.border = '1px solid #6070ff'
    button.style.borderRadius = '0.5em';
    button.style.padding = '0.5em';
    // button.style.margin = '0.5em';

    button.style.fontFamily = 'Poppins, sans-serif, Courier, monospace';
    button.style.fontStyle = 'normal';
    button.style.fontWeight = '500';
    // button.style.fontSize = '1.0625rem';
    // button.style.lineHeight = '1.5rem';
    button.style.letterSpacing = '0.03em';
    button.style.alignItems = 'center';
    button.style.textAlign = 'center';
    button.style.color = '#396df2'
  
    btnParentDiv.appendChild(button);
  }




  dynamicCards();
