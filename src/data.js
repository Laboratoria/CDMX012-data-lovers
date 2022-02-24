// estas funciones son de ejemplo
import data from "./data/pokemon/pokemon.js";

let pokemonList = data.pokemon;

function buildPokemonNames() {
  let pokemonNames = new Array(); //array lista nombres

  for (let pokemon of pokemonList) {
    pokemonNames.push(pokemon.name); //envia los pokemones por nombre al array
  }
  return pokemonNames;
}

function buildPokemonNums() {
  let pokemonNum = new Array(); //array lista nombres

  for (let pokemon of pokemonList) {
    pokemonNum.push(pokemon.num); //envia los pokemones por numero al array
  }
  return pokemonNum;
}

export const orderAZ = () => {
  // Ordenado A-Z
  let pokemonNameAZ = buildPokemonNames().sort(); //ordena los pokenones de la A-Z
  let pokemonAz = new Array(); // guarda la ejecucion de la funcion

  for (const name of pokemonNameAZ) {
    // busca en la lista de nombres ordenados por nombre
    for (const pokemon of pokemonList) {
      // busca el arreglo de objetos del pokemon en la lista de todos los pokemones
      if (pokemon.name === name) {
        // compara los atributos por nombres
        pokemonAz.push(pokemon); //envia los pokemones por numero al array
      }
    }
  }
  return pokemonAz;
}

export const orderZA = () => {
  //ordena los pokemones de la Z-A
  let pokemonNameZA = buildPokemonNames().sort().reverse(); //ordena los nombres de la A-Z
  let pokemonZa = new Array(); // guarda la ejecucion de la funcion
  console.log(pokemonNameZA);
  for (const name of pokemonNameZA) {
    // busca por nombre en la lista de nombres
    for (const pokemon of pokemonList) {
      // busca el arreglo de objetos del pokemon en la lista de todos los pokemones
      if (pokemon.name === name) {
        // compara el pokemon por nombre
        pokemonZa.push(pokemon); // envia el pokemon por nombre ordenado a la lista de pokemones AZ
      }
    }
  }
  return pokemonZa;
}

export const orderLowest = () => {
  //Ordena los pokemon por número MENOR
  let pokemonNumLowest = buildPokemonNums().sort(function (a, b) {
    return a - b;
  }); //Ordena los pokemon por número 001-251 comparando el valor de su atributo num
  let pokemonLowest = new Array(); // guarda la ejecucion de la funcion

  for (const num of pokemonNumLowest) {
    // busca por el numero del pokemon en la lista de pokemones ordenados
    for (const pokemon of pokemonList) {
      // busca el arreglo de objetos del pokemon en la lista de todos los pokemones
      if (pokemon.num === num) {
        // compara el pokemon por su numero
        pokemonLowest.push(pokemon); // envia el pokemon por nombre ordenado a la lista de pokemones LOWEST
      }
    }
  }
  return pokemonLowest;
}

export const orderHighest = () => {
  //Ordena los pokemon por número MAYOR
  let pokemonNumHigher = buildPokemonNums().sort(function (a, b) {
    return b - a;
  }); //Ordena los pokemon por número 251-001 comparando el valor de su atributo num
  let pokemonHigher = new Array(); // guarda la ejecucion de la funcion
  console.log(pokemonNumHigher);

  for (const num of pokemonNumHigher) {
    // busca por el numero del pokemon en la lista de pokemones ordenados
    for (const pokemon of pokemonList) {
      // busca el arreglo de objetos del pokemon en la lista de todos los pokemones
      if (pokemon.num === num) {
        // compara el pokemon por su numero
        pokemonHigher.push(pokemon); // envia el pokemon por nombre ordenado a la lista de pokemones HIGHER
      }
    }
  }
  return pokemonHigher;
}

///////////////////////FILTRADO

export const fillterType = () => {
  let FilTypeSelected = document.getElementById("filter").value; //toma el valor de la opcion seleccionada HTML id=filter
  let FilType = new Array(); // guarda la ejecucion del for

  for (const pokemon of pokemonList) {
    // busca plos pokemones en la lista de pokemones
    if (
      pokemon.type[0] === FilTypeSelected ||
      pokemon.type[1] === FilTypeSelected
    ) {
      // busca el valor en la posición 1 o 2 de los tipos
      FilType.push(pokemon); // envia el pokemon filtrado al array
    }
  }
  return FilType;
}

/////////////////////// BUSQUEDA

export const inputPokemon = () => {
  let inputPokemonSearch = document
    .getElementById("inputSearch")
    .value.toLowerCase();
  let pokemonSelected = new Array();

  for (const pokemon of pokemonList) {
    if (pokemon.name.includes(inputPokemonSearch)) {
      pokemonSelected.push(pokemon);
    }
  }
  return pokemonSelected;
}
