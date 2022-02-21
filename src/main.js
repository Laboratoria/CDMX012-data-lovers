import {sortId, filterAssassin, filterMage, filterFighter, filterMarksman, filterSupport, filterTank} from './data.js';
import data from './lol/lol.js';


const cards = document.querySelector('.cardbox');
const getChampions = Object.values(data.data)

    for (let champion of getChampions) {

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
 //console.log(championInfo)
} 

//Hacer un event listener para hacer la funcionalidad del filtro