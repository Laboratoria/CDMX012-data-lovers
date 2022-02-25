import {
  order1_251,
  order251_1,
  orderByAz,
  orderByZa,
  filterByTypes,
  filterByLegendary,
  searchPokemon,
  // porcentageByAttack,
  attackpoint,
} from "./data.js";
import showPokemons from "./Article.js";

// ************ FUNCIONES QUE ORDENAN A LOS POKEMONS***************
window.orderPokemons = function orderPokemons() {
  let optionSelected = document.getElementById("orderBy").value;
  let result = [];
  switch (optionSelected) {
    case "1-251":
      result = order1_251(); //Aqui dataque es el argumento representa al parametro allDAta (que esta en el archivo de data.js)
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
    //console.log("Por favor selecciona un orden valido");
  }
  showPokemons(result);
};

//***************FUNCION QUE MUESTRA A LOS POKEMONS POR EL TIPO QUE SE SELECCIONE (VALUE)*************
const selectByType = () => {
  const type = document.getElementById("type").value;
  let pokemons = filterByTypes(type);
  showPokemons(pokemons);

  document.getElementById("statsSpace").style.display = "block";
  //poner aqui las funciones de los porcentajes dentro de una variable

  let typesToMath = filterByTypes(type);
  let totalPokemonsByType = AttackOfPokemons.length;

  //************ESTA FUNCION NOS DA LOS VALORES DE BASE-ATTACK */
  let AttackOfPokemons = attackpoint(typesToMath); //saca el base attack de los pokemones de ese tipo
  let suma = AttackOfPokemons.reduce((a, b) => a + b, 0);
  let porcentageAttack = suma / totalPokemonsByType;

  //********base-defense */

  document.getElementById("totalPokemons").innerHTML =
    "Este grupo esta conformado por " + totalPokemonsByType + " Pokemons";
  document.getElementById("attackPoints").innerHTML =
    "El valor total de ataque de este grupo de pokemones es de : " +
    suma +
    " puntos, con un promedio de: " +
    porcentageAttack +
    "%";
};

document.getElementById("type").addEventListener("change", selectByType);

//***********FUNCION QUE MUESTRA A LOS POKEMONES LEGENDARIOS*******************
const selectByLegendary = () => {
  const legendary = document.getElementById("clasifyLegendary").value;
  let pokemons = filterByLegendary(legendary);

  showPokemons(pokemons);
};
document
  .getElementById("clasifyLegendary")
  .addEventListener("click", selectByLegendary);

//**************FUNCION DEL BUSCADOR************

let searchButton = document.getElementById("search");
function showMyPokemon() {
  let name = document.getElementById("searchText").value;
  let mifuncion = searchPokemon(name);
  if (name == false || mifuncion == false) {
    alert(
      "Pokémon not found, please check the spelling \n Note: If you are not sure of how to write the Pokémon´s name, try with the first letter of it´s name"
    );
    throw new TypeError("Please insert a value");
  } else {
    showPokemons(mifuncion);
  }
}
searchButton.addEventListener("click", showMyPokemon);

/* PROPUESTA CARLOS
const filterByType = document.getElementById("type");
filterByType.addEventListener("change", (event) => {
  console.log("recibi: " + event.target.value);
});
*/
