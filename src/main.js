//Traer los datos y funciones
import {filterRole} from './data.js';
import legends from './lol/lol.js';

//sacar los objetos del arreglo
const all = Object.values(legends.data)

//crear las constantes para manejar el dom
const showCards = document.getElementById('cardsChampions');
const selectionRoles = document.getElementById('roles');
const selectionOrder = document.getElementById('order');
const selectionDifficult = document.getElementById('difficult');
const showInfo = document.getElementById('backChampions');

//Funcion para crear las tarjetas
const cardsLegends = (champions) =>{

  const championsCards = document.createElement('div');
    for (let champion of champions) {
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
showCards.appendChild(cardsLegends(all))

//función para mostrar el reverso de las tarjetas
/*const cardsInfo = (champions) => {

  const backCards = document.createElement('div');

  for (let info of champions) {
    const championsBack = document.createElement ('article')
    const championsTitle = document.createElement ('h4')
    championsTitle.textContent = info.title
    const championsBlurb = document.createElement ('p')
    championsBlurb.textContent = info.blurb
    championsBack.className = "card-back";
    backCards.appendChild(championsBack);
    championsBack.appendChild(championsTitle);
    championsBack.appendChild(championsBlurb);
    
  }
  return backCards
}
showInfo.appendChild(cardsInfo(all))*/


//evento para el selector de rol
selectionRoles.addEventListener('change', (e)=>{
    showCards.innerHTML = '';
    showCards.appendChild(cardsLegends(filterRole(all, e.target.value)))
  })

//crear un botón que nos retorne todas las tarjetas
const btnAll = document.getElementById('btnAll');
btnAll.addEventListener('click', () => {
  showCards.innerHTML = '';
  showCards.appendChild(cardsLegends(all))
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




