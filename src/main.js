import { example } from "./data.js";
import data from "./data/pokemon/pokemon.js";

class PokemonList {
  // se crea una clase
  constructor() {
    //un contructor vacio para poder acceder a la data que ya tenemos
    this.pokemons = data.pokemon; //accede a la data de pokemons
  }

  getPokemons() {
    return this.pokemons;
  }

  getPokemonName(name) {
    const nameResult = this.pokemons.find((pokemon) => pokemon.name === name);
    //let pika = nameResult.img.value;
    return nameResult;
  }

  getPokemonType(type) {
    const typeResults = this.pokemons.filter((pokemon) =>
      pokemon.type.includes(type)
    );
    document.getElementById("showData").innerHTML = typeResults.value;

    return typeResults;
  }
  /*getTypePokemon() {
    const typesResult = () => console.log(this.pokemons.type.find("water"));
    return typesResult;
  }*/
}
console.log(data);

const pokemonList = new PokemonList();
console.log(pokemonList.getPokemons());
console.log(pokemonList.getPokemonName("mewtwo"));
console.log(pokemonList.getPokemonType("fire"));

//document.getElementById("showData").innerHTML = pokemonList.getPokemons();
document.getElementById("showData").innerHTML =
  pokemonList.getPokemonName("mewtwo");

//window.onload = pokemonList.pokemons({Name:Pikachu}));

window.pokedex = pokedex()

//console.log(object.data.pokemon);

/*
let description = pokemon[("num", "name", "img")];

class pokemonRepresentation {
  constructor(num, name, img) {
    this.num = num;
    this.name = name;
    this.img = img;
    this.card = num + name + img;
  }
}
function showInfo() {
  console.log(this.card);
}
console.log(pokemon);


let cosa = data["name"].value;
console.log(cosa);

import { anotherExample } from "./data.js";
import pokemon from "./data/pokemon/pokemon.js";

console.log(anotherExample, data);
*/

function filterPokemonsByName(name) {
  //**Logica */
}
