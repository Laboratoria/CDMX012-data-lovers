import data from './data/ghibli/ghibli.js';
import { filmsOnScreen, sortAZ, sortYears } from './data.js';

///declaración de variables///
const nodoRoot = document.getElementById("root")
let insertHTML = ""
let btnAZ = document.getElementById("sortFilms")

///mostrar cards en pantalla///
data.films.forEach(film  => {
  insertHTML += filmsOnScreen(film)
})

nodoRoot.innerHTML=insertHTML

///ordenar de cards de la AZ-ZA///
btnAZ.addEventListener('change', (e) => {
  let sortedFilms=sortAZ(e.target.value, data.films)
  let htmlOrdenado=""
  sortedFilms.forEach(oneTitle =>{
    htmlOrdenado+=filmsOnScreen(oneTitle)
  })
  nodoRoot.innerHTML=htmlOrdenado;
})

///orden en orden cronológico///
btnAZ.addEventListener('change', (e) => {
  let sortedYears=sortYears(e.target.value, data.films)
  let htmlOrdenado=""
  sortedYears.forEach(oneYear =>{
    htmlOrdenado+=filmsOnScreen(oneYear)
  })
  nodoRoot.innerHTML=htmlOrdenado;
})
