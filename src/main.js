import {filterRole} from './data.js';
import legends from './lol/lol.js';
const all = Object.values(legends.data)

const cardsLegends = () =>{
  const championsCards = document.createElement('div');
    for (let champion of all) {
    const newCard = document.createElement('article');
    const newcardBody = document.createElement('figure');
    const newcardImage = document.createElement('img');
    newcardImage.src = champion.splash
    const newcardName = document.createElement('figcaption');
    newcardName.textContent = champion.name
    newcardName.className = "card-name";
    championsCards.appendChild(newCard);
    newCard.appendChild(newcardBody);
    newcardBody.appendChild(newcardImage);
    newcardBody.appendChild(newcardName);  
 } 
 return championsCards
}
document.getElementById('cardsChampions').appendChild(cardsLegends())

const rolChampion = document.querySelector('.role');
  rolChampion.addEventListener('change', (e)=>{
    filterRole(all, e.target.value)
  })

