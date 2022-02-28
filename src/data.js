import { findAllPokemons } from "./data/pokemon/pokemon.repo.js";

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
    a = a.name;
    b = b.name;
    return a.localeCompare(b);
  });
  /*{if (a.name == b.name) {
      return 0;
    }
    if (a.name < b.name) {
      return -1;
    }
  }*/

  console.log(finalOrderAZ);
  return finalOrderAZ;
}

export function orderByZa() {
  const allPokemons = findAllPokemons();
  const finalOrderZA = allPokemons.sort((a, b) => {
    a = a.name;
    b = b.name;
    return a.localeCompare(b);
  });
  /*(a, b) => {
    if (a.name < b.name) {
      return 1;
    } else if (a.name > b.name) {
      return -1;
    }
  });*/
  console.log(finalOrderZA);
  return finalOrderZA.reverse();
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

export function searchPokemon(word) {
  const pokemones = findAllPokemons();
  let finalSearch = pokemones.filter((item) => item.name.includes(word));
  return finalSearch;
}

//*******************FUNCION DE ATAQUE */
export function getTotalAndAverange(pokemons, property) {
  let allBaseAttack = pokemons.map((pokemon) =>
    parseInt(pokemon.stats[property])
  );
  let totalNumOfPokemons = allBaseAttack.length;
  let sum = allBaseAttack.reduce((a, b) => a + b, 0);
  let porcentagePoint = parseFloat((sum / totalNumOfPokemons).toFixed(2)); //toFixed disminuye el numero de decimales al valor introducido en los parentesis
  let allResult = {
    sum: sum,
    porcentagePoint: porcentagePoint,
  };

  return allResult;
}
