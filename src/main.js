import {all, filterAssassin, filterMage, filterFighter, filterMarksman, filterSupport, filterTank} from './data.js';


for (let champion of all) {
    const cards = document.querySelector('.cardbox');
    const newCard = document.createElement('article');
    const newcardBody = document.createElement('figure');
    const newcardImage = document.createElement('img');
    newcardImage.src = champion.splash
    const newcardName = document.createElement('figcaption');
    newcardName.textContent = champion.name
    newcardName.className = "card-name";
    cards.appendChild(newCard);
    newCard.appendChild(newcardBody);
    newcardBody.appendChild(newcardImage);
    newcardBody.appendChild(newcardName);  
 } 

 //Hacer un event listener para hacer la funcionalidad del filtro
 const selectAlphabet = document.getElementById('assasin');
     selectAlphabet.addEventListener('event', filterAssassin);
   console.log(selectAlphabet)
