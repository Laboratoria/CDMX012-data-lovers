import { order1_251, order251_1, orderByAz, orderByZa } from "./data.js";
import showPokemons from "./Article.js";
import data from "./data/pokemon/pokemon.js";

//const showData = document.getElementById("showData");

window.orderPokemons = function orderPokemons() {
  let optionSelected = document.getElementById("orderBy").value;
  let result = [];
  switch (optionSelected) {
    /*case "Pokedex":
      result = orderPokedex();
      break;*/
    case "1-251":
      result = order1_251();
      break;
    case "251-1":
      result = order251_1();
      break;
    case "AZ":
      result = orderByAz();
      break;
    case "ZA":
      result = orderByZa();
      break;
    default:
      console.log("esto no funciona");
  }
  showPokemons(result);
};

const filterByType = document.getElementById("type");
filterByType.addEventListener("change", (event) => {
  console.log("recibi: " + event.target.value);
});
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
