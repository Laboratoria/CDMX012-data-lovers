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

const selectByType = () => {
  const type = document.getElementById("type").value;
  let pokemons = filterByTypes(type);
  showPokemons(pokemons);
};

document.getElementById("type").addEventListener("change", selectByType);

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
