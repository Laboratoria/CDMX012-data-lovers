import data from "./data/pokemon/pokemon.js";
// estas funciones son de ejemplo

console.log(data);

let dataPokemons = data.pokemon;
console.log(dataPokemons);

let eachPokemon = Object.keys(dataPokemons);
for (let i = 0; i < dataPokemons.length; i++) {
  let ePokemon = eachPokemon[i];
  console.log(dataPokemons[ePokemon]);
  console.log(ePokemon);
}

export const example = (data, condition) => {
  return "example";
};

export const anotherExample = (cosa) => {
  OMG = pokemon.name;
  return OMG;
};
