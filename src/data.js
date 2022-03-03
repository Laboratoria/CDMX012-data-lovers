import data from "./data/pokemon/pokemon.js";

const pokemonList = data.pokemon;

export function buildPokemonNames() {
  const pokemonNames = new Array(); //array lista nombres

  for (const pokemon of pokemonList) {
    pokemonNames.push(pokemon.name); //envia los pokemones por nombre al array
  }
  return pokemonNames;
}

export function buildPokemonNums() {
  const pokemonNum = new Array(); //array lista nombres

  for (const pokemon of pokemonList) {
    pokemonNum.push(pokemon.num); //envia los pokemones por numero al array
  }
  return pokemonNum;
}

export const orderAZ = (pokemonList) => {
  // Ordenado A-Z
  const pokemonNameAZ = buildPokemonNames().sort(); //ordena los pokenones de la A-Z
  const pokemonAz = new Array(); // guarda la ejecucion de la funcion

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

export const orderZA = (pokemonList) => {
  //ordena los pokemones de la Z-A
  const pokemonNameZA = buildPokemonNames().sort().reverse(); //ordena los nombres de la A-Z
  const pokemonZa = new Array(); // guarda la ejecucion de la funcion

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

export const orderLowest = (pokemonList) => {
  //Ordena los pokemon por número MENOR
  const pokemonNumLowest = buildPokemonNums().sort(function (a, b) {
    return a - b;
  }); //Ordena los pokemon por número 001-251 comparando el valor de su atributo num
  const pokemonLowest = new Array(); // guarda la ejecucion de la funcion

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

export const orderHighest = (pokemonList) => {
  //Ordena los pokemon por número MAYOR
  const pokemonNumHigher = buildPokemonNums().sort(function (a, b) {
    return b - a;
  }); //Ordena los pokemon por número 251-001 comparando el valor de su atributo num
  const pokemonHigher = new Array(); // guarda la ejecucion de la funcion

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
export function getFillTypeSelected(){
return document.getElementById("filter").value;//toma el valor de la opcion seleccionada HTML id=filter
}


export const fillterType = (pokemonTypeSelected, pokemonList) => {
   
  const FilType = new Array(); // guarda la ejecucion del for

  for (const pokemon of pokemonList) {
    // busca plos pokemones en la lista de pokemones
    if (
      pokemon.type[0] === pokemonTypeSelected ||
      pokemon.type[1] === pokemonTypeSelected
    ) {
      // busca el valor en la posición 1 o 2 de los tipos
      FilType.push(pokemon); // envia el pokemon filtrado al array
    }
  }
  return FilType;
}

/////////////////////// BUSQUEDA
export function inputPokemonName(){
  return document.getElementById("inputSearch").value.toLowerCase();
  }

  
export function searchByName(pokemonSearchByName, pokemonList){
  const pokemonSelected = new Array();

  for (const pokemon of pokemonList) {
    if (pokemon.name.includes(pokemonSearchByName)) {
      pokemonSelected.push(pokemon);
    }
  }
  return pokemonSelected;
}

