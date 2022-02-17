//import pokemon from "./data/pokemon/pokemon.js";
//import pokemon from "./data/pokemon/pokemon.js";
import data from "./data/pokemon/pokemon.js";
import showPokemons from "./Article.js";
// estas funciones son de ejemplo
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

export function filterByTypes() {
  const filtrado = data.pokemon.filter(
    (tipo) =>
      tipo.type[1] == document.getElementById("type").value ||
      tipo.type[0] == document.getElementById("type").value
  );

 // console.log(filtrado);
  //console.log("Hola jugando con la branch");
  showPokemons(filtrado);

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
