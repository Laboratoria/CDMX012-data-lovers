import {
  order1_251,
  order251_1,
  orderByAz,
  orderByZa,
  filterByTypes,
} from "./data.js";
import showPokemons from "./Article.js";
import data from "./data/pokemon/pokemon.js";

//const showData = document.getElementById("showData");

window.orderPokemons = function orderPokemons() {
  let optionSelected = document.getElementById("orderBy").value;
  let result = [];
  switch (optionSelected) {
    case "1-251":
      result = order1_251(data); //Aqui dataque es el argumento representa al parametro allDAta (que esta en el archivo de data.js)
      break;
    case "251-1":
      result = order251_1(data);
      break;
    case "AZ":
      result = orderByAz(data);
      break;
    case "ZA":
      result = orderByZa(data);
      break;
    default:
    //console.log("Por favor selecciona un orden valido");
  }
  showPokemons(result);
};

//ESTA IMPRIMIENDO AL SELECCIONAR UN TIPO PERO NO ESTÁ ATADO A SU TIPO EN ESPECIFICO

const filterByType = document.querySelector("#type");

const selectByType = () => {
  const selectByType = filterByType.selectedIndex;
  if (selectByType === 1) {
    let typeBug = filterByTypes(data);
    showPokemons(typeBug);
  }
  if (selectByType === 2) {
    let typeBug = filterByTypes(data);
    showPokemons(typeBug);
  }
  if (selectByType === 3) {
    let typeBug = filterByTypes(data);
    showPokemons(typeBug);
  }
  if (selectByType === 4) {
    let typeBug = filterByTypes(data);
    showPokemons(typeBug);
  }
  if (selectByType === 5) {
    let typeBug = filterByTypes(data);
    showPokemons(typeBug);
  }
  if (selectByType === 6) {
    let typeBug = filterByTypes(data);
    showPokemons(typeBug);
  }
  if (selectByType === 7) {
    let typeBug = filterByTypes(data);
    showPokemons(typeBug);
  }
  if (selectByType === 8) {
    let typeBug = filterByTypes(data);
    showPokemons(typeBug);
  }
  if (selectByType === 9) {
    let typeBug = filterByTypes(data);
    showPokemons(typeBug);
  }
  if (selectByType === 10) {
    let typeBug = filterByTypes(data);
    showPokemons(typeBug);
  }
  if (selectByType === 11) {
    let typeBug = filterByTypes(data);
    showPokemons(typeBug);
  }
  if (selectByType === 12) {
    let typeBug = filterByTypes(data);
    showPokemons(typeBug);
  }
  if (selectByType === 13) {
    let typeBug = filterByTypes(data);
    showPokemons(typeBug);
  }
  if (selectByType === 14) {
    let typeBug = filterByTypes(data);
    showPokemons(typeBug);
  }
  if (selectByType === 15) {
    let typeBug = filterByTypes(data);
    showPokemons(typeBug);
  }
  if (selectByType === 16) {
    let typeBug = filterByTypes(data);
    showPokemons(typeBug);
  }
  if (selectByType === 17) {
    let typeBug = filterByTypes(data);
    showPokemons(typeBug);
  }
  if (selectByType === 18) {
    let typeBug = filterByTypes(data);
    showPokemons(typeBug);
  }
};
filterByType.addEventListener("change", selectByType);
/*let filter = function changeType() {
  let filterByType = document.getElementById("type").value;
  let result = [];
  switch (filterByType) {
    case "bug":
      result = filterByTypes(data);
      break;
    case "dragon":
      result = filterByTypes(data);
      break;
    case "fairy":
      result = filterByTypes(data);
      break;
    case "fire":
      result = filterByTypes(data);
      break;
    case "ghost":
      result = filterByTypes(data);
      break;
    case "ground":
      result = filterByTypes(data);
      break;
    case "psychic":
      result = filterByTypes(data);
      break;
    case "steel":
      result = filterByTypes(data);
      break;
    case "dark":
      result = filterByTypes(data);
      break;
    case "electric":
      result = filterByTypes(data);
      break;
    case "fighting":
      result = filterByTypes(data);
      break;
    case "flying":
      result = filterByTypes(data);
      break;
    case "grass":
      result = filterByTypes(data);
      break;
    case "ice":
      result = filterByTypes(data);
      break;
    case "poison":
      result = filterByTypes(data);
      break;
    case "water":
      result = filterByTypes(data);
      break;
    case "rock":
      result = filterByTypes(data);
      break;
    case "normal":
      result = filterByTypes(data);
      break;
    default:
      console.log("Esto no funciona");
  }
  showPokemons(result);
};

filterByType.addEventListener("change", filter);
*/
//document.addEventListener("change", changeType);

/*const filterByType = document.getElementById("type");
filterByType.addEventListener("change", filterByTypes(data));

myFunction(data) {
 let selectId = document.getElementById("type").value
 let resultTypes = data.type
 if(selectId == resultTypes){
   return showPokemons(filterByTypes)
 }
}*/

/*const filterByType = document.getElementById("type");
filterByType.addEventListener("change", pokemonTypes);*/

/* PROPUESTA CARLOS
const filterByType = document.getElementById("type");
filterByType.addEventListener("change", (event) => {
  console.log("recibi: " + event.target.value);
});
*/

/*
HACER UN CONSOLE.LOG DE LA DATA            S
ACCDER A LOS 3 ELEMENTOS JUNTOS EN UNA MISMA FILA 
ACCEDER AL NUMERO  DE LA DATA              
ACCEDER AL NOMBRE IMAGEN DE LA DATA        
ACCEDER AL NOMBRE DE LA DATA               
MODIFICAR LA SECCIÓN PARA CREAR UNA LISTA 
 */

//crear variable que almacene id del input
//ligar un evento click para que ejecute una funcion
//crear variable que almacene los datos por id #pokemon
//crear la funcion con que los ordenes
//ligar lo que retorna de la funcion a lo que se ve en la interfaz
