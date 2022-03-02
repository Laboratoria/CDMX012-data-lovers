import data from './data/ghibli/ghibli.js';
import {filmsOnScreen} from './data.js';
import { sortAZ } from './data.js'

/////mostrar cards en pantalla////
const nodoRoot = document.getElementById("root")
let insertHTML = ""
let btnAZ = document.getElementById("sortFilms")

data.films.forEach(film  => {
  insertHTML += filmsOnScreen(film)
})

nodoRoot.innerHTML=insertHTML

////ordenado de cards////
btnAZ.addEventListener('change', (e) => {
  let sortedFilms=sortAZ(e.target.value, data.films)
  let htmlOrdenado=""
  sortedFilms.forEach(oneTitle =>{
    htmlOrdenado+=filmsOnScreen(oneTitle)
  })
  nodoRoot.innerHTML=htmlOrdenado;
})
