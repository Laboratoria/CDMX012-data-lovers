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
    if (a.name == b.name) {
      return 0;
    }
    if (a.name < b.name) {
      return -1;
    }
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

export function searchPokemon(word) {
  const pokemones = findAllPokemons();
  let finalSearch = pokemones.filter((item) => item.name.includes(word));
  return finalSearch;
}

//*******************FUNCION DE ATAQUE */
export function attackpoint(totalPokemonsbyType) {
  let allBaseAttack = totalPokemonsbyType.map((pokemon) =>
    parseInt(pokemon.stats["base-attack"])
  );
  let totalNumOfPokemons = allBaseAttack.length;
  let suma = allBaseAttack.reduce((a, b) => a + b, 0);
  let porcentagePoint = (suma / totalNumOfPokemons).toFixed(2); //toFixed disminuye el numero de decimales al valor introducido en los parentesis
  let allResult = { suma, porcentagePoint };

  return allResult;
}

export function defensePoint(totalPokemonsbyType) {
  let allBaseDefense = totalPokemonsbyType.map((pokemon) =>
    parseInt(pokemon.stats["base-defense"])
  );
  let totalNumOfPokemons = allBaseDefense.length;
  let suma = allBaseDefense.reduce((a, b) => a + b, 0);
  let porcentagePoint = (suma / totalNumOfPokemons).toFixed(2);
  let allResult = { suma, porcentagePoint };

  return allResult;
}

export function staminaPoints(totalPokemonsbyType) {
  let allBaseStamina = totalPokemonsbyType.map((pokemon) =>
    parseInt(pokemon.stats["base-stamina"])
  );
  let totalNumOfPokemons = allBaseStamina.length;
  let suma = allBaseStamina.reduce((a, b) => a + b, 0);
  let porcentagePoint = (suma / totalNumOfPokemons).toFixed(2);
  let allResult = { suma, porcentagePoint }; //para poder acceder a los dos resultados en main, se integran a un objeto, en main se puede acceder a ellos mediante "."

  return allResult;
}

export function cpPoints(totalPokemonsbyType) {
  let porcentaje = totalPokemonsbyType.map((pokemon) =>
    parseInt(pokemon.stats["max-cp"])
  );
  let pokemonsTypeAttackLength = porcentaje.length;
  let cpTotalSum = porcentaje.reduce((a, b) => a + b, 0);
  let porcentageCp = cpTotalSum / pokemonsTypeAttackLength;
  return [porcentageCp.toFixed(2), cpTotalSum];
}

//otra forma de hacerlo
export function hpPoints(totalPokemonsbyType) {
  let allMaxHp = totalPokemonsbyType.map((pokemon) =>
    parseInt(pokemon.stats["max-hp"])
  );
  let pokemonsTypeAttackLength = allMaxHp.length;
  let hpTotalSum = allMaxHp.reduce((a, b) => a + b, 0);
  let porcentageHp = hpTotalSum / pokemonsTypeAttackLength;
  return [porcentageHp.toFixed(2), hpTotalSum];
}
