import { orderAZ, orderLowest, fillterType, inputPokemon } from "./data.js";

//let pokemonList = data.pokemon;
let pokemonContainer = document.getElementById("root");

function buildCards(pokemonArray) {
  // crea las cards de pokemones

  for (const pokemon of pokemonArray) {
    let card = document.createElement("button");
    card.className = "card";
    card.id = `${pokemon.name}`
    card.setAttribute('href', 'openModal')

    let pokemonNum = document.createElement("div");
    pokemonNum.className = "property num";

    let pokemonName = document.createElement("div");
    pokemonName.className = "property name";

    let pokemonImg = document.createElement("img");
    pokemonImg.setAttribute("src", `${pokemon.img}`);
    pokemonImg.className = "property img";

    let barrita = document.createElement("div");
    barrita.className = "barrita";

    let num = document.createTextNode(`${pokemon.num}`);
    let name = document.createTextNode(`${pokemon.name}`);

    pokemonNum.appendChild(num);
    pokemonName.appendChild(name);
    card.appendChild(pokemonNum);
    card.appendChild(pokemonImg);
    card.appendChild(pokemonName);
    card.appendChild(barrita);
    pokemonContainer.appendChild(card);

    for (let type of pokemon.type) {
      let divType = document.createElement("div"); // separa los tipos en divs
      divType.id = "divType"; //agrega clase a los divs
      divType.className = type; //agrega clase background por tipo
      let textType = document.createTextNode(type); //crea el texto del tipo
      divType.appendChild(textType);
      card.appendChild(divType); //agrega los divs a la card
    }
  }
}

function orderList() {
  //Ejecución de funciones segun el caso seleccionado

  let orderType = document.getElementById("order").value; //toma el valor de la opcion seleccionada HTML id=order
  let resultOrder = new Array();

  switch (
    orderType // muestra la información segun el caso elegido
  ) {
    case "AZ": //toma el valor de la opcion seleccionada HTML value = AZ
      resultOrder = orderAZ(); //la función que se ejecutará en caso de ser seleccionada
      break;

    case "ZA": //toma el valor de la opcion seleccionada HTML value = ZA
      resultOrder = orderAZ().reverse();
      break;

    case "lowest": //toma el valor de la opcion seleccionada HTML value = lowest
      resultOrder = orderLowest();
      break;

    case "higher": //toma el valor de la opcion seleccionada HTML value = higher
      resultOrder = orderLowest().reverse();
      break;
  }

  return resultOrder;
}

document.getElementById("botonSearch").addEventListener(
  "click",
  () => {
    pokemonContainer.innerHTML = "";
    buildCards(inputPokemon());
  },
  false
);

document.getElementById("order").addEventListener(
  "click",
  () => {
    pokemonContainer.innerHTML = "";
    buildCards(orderList());
  },
  false
);

document.getElementById("filter").addEventListener(
  "click",
  () => {
    pokemonContainer.innerHTML = "";
    buildCards(fillterType());
  },
  false
);

buildCards(orderLowest()); // callback funcion lowest para mostrar en pag iniciada