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
//una variable para llamar el innerHTML vacío
const container = document.getElementById('cardsChampions')

//selecciona el filtro al hacer click en la opción del dropdown
const rolChampion = document.querySelector('.role');
  rolChampion.addEventListener('change', (e)=>{
    //se crea una variable de todos los filtros para poder guardar los resultados y jalarlos después
    let filteredRoles = filterRole(all, e.target.value)
    //un innerHTML vacío para construir las tarjetas iterando en los filtros
    container.innerHTML = '';
    let cardsRoles = () => {
      let championsCards = document.createElement('div')
      for (let role of filteredRoles){
      let newCard = document.createElement('article');
      let newcardBody = document.createElement('figure');
      let newcardImage = document.createElement('img');
      newcardImage.src = role.splash
      let newcardName = document.createElement('figcaption');
      newcardName.textContent = role.name
      newcardName.className = "card-name";
      championsCards.appendChild(newCard);
      newCard.appendChild(newcardBody);
      newcardBody.appendChild(newcardImage);
      newcardBody.appendChild(newcardName);  
    }
    return championsCards
 } 
 //en este elemento se renderizan los campeones
 document.getElementById('cardsChampions').appendChild(cardsRoles())
});


//Botón Toggle Responsive
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navLinks = document.getElementsByTagName('nav')[0]
const titleHeader = document.getElementsByClassName('htype')[0]
//Haz una funcion que me tome todos los links y los muestre
toggleButton.addEventListener('click', () => {
  //si no existe la clase active, la agregará y si existe la quita
  navLinks.classList.toggle('active')
  titleHeader.classList.toggle('active')
});




