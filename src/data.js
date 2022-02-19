//import pokemon from "./data/pokemon/pokemon.js";
//import pokemon from "./data/pokemon/pokemon.js";
//import data from "./data/pokemon/pokemon.js";
import showPokemons from "./Article.js";
// estas funciones son de ejemplo
export function order1_251(allData) {
  console.log(allData);
  const finalUp = allData.pokemon.sort(function (a, b) {
    return a.num - b.num;
  });
  return finalUp;
}

export function order251_1(allData) {
  const finalDown = allData.pokemon.sort(function (a, b) {
    return b.num - a.num;
  });
  return finalDown;
}

export function orderByAz(allData) {
  const finalOrderAZ = allData.pokemon.sort((a, b) => {
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

export function orderByZa(allData) {
  const finalOrderZA = allData.pokemon.sort((a, b) => {
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

export function filterByTypes(allData) {
  const filtrado = allData.pokemon.filter(
    (tipo) =>
      tipo.type[1] == allData.type ||
      tipo.type[0] == allData.type
  );
  console.log("funciona");
  return filtrado;
}

/*

export const filterByEvolution = () => {
  return "OMG";
};
export const filterByLegendary = () => {
  return "OMG";
};
*/
