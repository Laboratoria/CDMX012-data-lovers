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
  
  document.getElementById("statsSpace").style.display = "block"
  //poner aqui las funciones de los porcentajes dentro de una variable
  
  
  let typesToMath= filterByTypes(type)
  let AttackOfPokemons = attackpoint(typesToMath)
  console.log(typesToMath);
  document.getElementById("attackPoints").innerHTML = "Hola" + AttackOfPokemons;


  //let showAllPokemons = showPokemons(pokemons);
  //console.log(pokemons.length);
  //porcentageByAttack(showAllPokemons);
};


document.getElementById("type").addEventListener("change", selectByType);
//document.getElementById("type").addEventListener("change", porcentaje);

//***********FUNCION QUE MUESTRA A LOS POKEMONES LEGENDARIOS*******************
const selectByLegendary = () => {
  const legendary = document.getElementById("Clasify").value;
  let pokemons = filterByLegendary(legendary);

  showPokemons(pokemons);
};
document.getElementById("Clasify").addEventListener("change", selectByLegendary);

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

/*
let btnprueba = document.getElementById("botonPrueba")
function mostrarPorcentaje(){
  document.getElementById("attackPoints").innerHTML= porcentageByAttack
}*/

/*const searchInput = document.querySelector(".searchText");
searchInput.addEventListener("input", (e) => {
  let value = e.target.value;
  if (value && value.trim().lenngth > 0) {
    value = value.trim().toLowerCase();
    //let result = setList(value);
    //return showPokemons(result);
    showPokemons(pokemon)
  } else {
    console.log("Pokemon no encontrado..");
  }

if(name == ){
    showPokemons(mifuncion);
  }
  else if(name != ) {
    return alert ("Pokémon not found, check your spelling")
  }

});*/

/* PROPUESTA CARLOS
const filterByType = document.getElementById("type");
filterByType.addEventListener("change", (event) => {
  console.log("recibi: " + event.target.value);
});
*/
