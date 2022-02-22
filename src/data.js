import { findAllPokemons } from "./data/pokemon/pokemon.repo.js";

// estas funciones son de ejemplo
export function order1_251() {
  const allPokemons = findAllPokemons();
  const finalUp = allPokemons.sort(function (a, b) {
    return a.num - b.num;
  });
  return finalUp;
}

export function order251_1() {
  const allPokemons = findAllPokemons();
  const finalDown = allPokemons.sort(function (a, b) {
    return b.num - a.num;
  });
  return finalDown;
}

export function orderByAz() {
  const allPokemons = findAllPokemons();
  const finalOrderAZ = allPokemons.sort((a, b) => {
    if (a.name == b.name) {
      return 0;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 1;
  });
  return finalOrderAZ;
}

export function orderByZa() {
  const allPokemons = findAllPokemons();
  const finalOrderZA = allPokemons.sort((a, b) => {
    if (a.name == b.name) {
      return 0;
    }
    if (a.name > b.name) {
      return -1;
    }
    return 1;
  });
  return finalOrderZA;
}

export function filterByTypes(type) {
  const pokemones = findAllPokemons();
  const filtrado = pokemones.filter((pokemon) => pokemon.type.includes(type));
  return filtrado;
}

export function filterByLegendary(legendary) {
  const pokemones = findAllPokemons();
  legendary = "legendary";
  const legendarios = pokemones.filter((pokemon) =>
    pokemon["pokemon-rarity"].includes(legendary)
  );
  return legendarios;
}

export function searchPokemon(name) {
  const pokemons = findAllPokemons();
  if (pokemons.name === name) {
    const namePokemon = pokemons.filter(
      (pokemon) => pokemon.name.includes(name).toLowerCase
    );
    return namePokemon;
  } else console.log("esto no funciona");
}

/*
export function setList(value) {
  const pokemons = findAllPokemons();
  const setListPokemon = pokemons.filter((pokemon) => {
    pokemon.name.includes(value);
  });
  return setListPokemon;
}*/
9;
