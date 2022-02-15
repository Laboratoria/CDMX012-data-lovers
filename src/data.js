//import pokemon from "./data/pokemon/pokemon.js";
//import pokemon from "./data/pokemon/pokemon.js";
import data from "./data/pokemon/pokemon.js";
// estas funciones son de ejemplo

/*export function orderPokedex() {
  const finalPokedex = data.pokemon.sort(function (a, b) {
    return a.num - b.num;
  });
  return finalPokedex;
}*/
export function order1_251() {
  const finalUp = data.pokemon.sort(function (a, b) {
    return a.num - b.num;
  });
  return finalUp;
}

export function order251_1() {
  const finalDown = data.pokemon.sort(function (a, b) {
    return b.num - a.num;
  });
  return finalDown;
}

export function orderByAz() {
  const finalOrderAZ = data.pokemon.sort((a, b) => {
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
  const finalOrderZA = data.pokemon.sort((a, b) => {
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
/*


export const filterByTypes = () => {
  return "OMG";
};

export const filterByEvolution = () => {
  return "OMG";
};
export const filterByLegendary = () => {
  return "OMG";
};
*/
