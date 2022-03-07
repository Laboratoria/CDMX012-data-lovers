//Traer los datos y funciones
import {filterRole, orderAlpha, filterDifficulty} from './data.js';
import legends from './lol/lol.js';
//sacar los objetos del arreglo
const all = Object.values(legends.data)

//crear las constantes para manejar el dom
const showCards = document.getElementById('cardsChampions');
const selectionRoles = document.getElementById('roles');
const selectionOrder = document.getElementById('alpha');
//const selectionDifficult = document.getElementById('difficulty');
 

//Funcion para crear las tarjetas
const cardsLegends = (champions) => {
  console.log (champions)
  const championsCards = document.createElement('div');
  champions.forEach (champion => {
    const newCard = document.createElement('article');
    const newcardBody = document.createElement('figure');
    const newcardImage = document.createElement('img');
    newcardImage.src = champion.splash
    const newcardName = document.createElement('figcaption');
    const newcardTitle = document.createElement('p');
    const newcardInfo = document.createElement('div');
    newcardName.textContent = champion.name
    newcardTitle.textContent = champion.title

    newcardName.className = "card-name";
    newcardTitle.className = "card-name";
    newcardInfo.className = "box-info"
    
    championsCards.appendChild(newCard);
    newCard.appendChild(newcardBody);
    newcardBody.appendChild(newcardImage);
    newcardBody.appendChild(newcardName);
    newcardBody.appendChild(newcardTitle);
    newcardBody.appendChild(newcardInfo);

 });
 return championsCards
}
showCards.appendChild(cardsLegends(all))

//evento para el selector de rol
selectionRoles.addEventListener('change', (e)=>{
    showCards.innerHTML = '';
    showCards.appendChild(cardsLegends(filterRole(all, e.target.value)))
  });

//crear un botón que nos retorne todas las tarjetas
const btnAll = document.getElementById('btnAll');
btnAll.addEventListener('click', () => {
  showCards.innerHTML = '';
  showCards.appendChild(cardsLegends(all))
});

//evento para el ordenado
selectionOrder.addEventListener('change', (e)=>{
  showCards.innerHTML = '';
  showCards.appendChild(cardsLegends(orderAlpha(all, e.target.value)))
  });

////////evento para el selector de dificultad que no funciona
document.getElementById('difficulty').addEventListener('change', (e) => {
  showCards.innerHTML = '';
  showCards.appendChild(cardsLegends(filterDifficulty(all, e.target.value)))
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




