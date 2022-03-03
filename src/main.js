import {
  orderAZ,
  orderZA,
  orderLowest,
  orderHighest,
  fillterType,
  getFillTypeSelected,
  searchByName,
  inputPokemonName,
} from "./data.js";
import data from "./data/pokemon/pokemon.js";
const pokemonList = data.pokemon;

const pokemonContainer = document.getElementById("root");

function buildCards(pokemonArray) {
  // crea las cards de pokemones

  for (const pokemon of pokemonArray) {
    const card = document.createElement("div");
    card.className = "card";
    card.addEventListener(
      "click",
      () => {
        // agrega el lissener a la card
        buildModalInfo(pokemon);
      },
      false
    );

    const pokemonNum = document.createElement("div");
    pokemonNum.className = "property num";

    const pokemonName = document.createElement("div");
    pokemonName.className = "property name";

    const pokemonImg = document.createElement("img");
    pokemonImg.setAttribute("src", `${pokemon.img}`);
    pokemonImg.className = "property img";

    const barrita = document.createElement("div");
    barrita.className = "barrita";

    const num = document.createTextNode(`${pokemon.num}`);
    const name = document.createTextNode(`${pokemon.name}`);

    pokemonNum.appendChild(num);
    pokemonName.appendChild(name);
    card.appendChild(pokemonNum);
    card.appendChild(pokemonImg);
    card.appendChild(pokemonName);
    card.appendChild(barrita);
    pokemonContainer.appendChild(card);

    for (const type of pokemon.type) {
      const divType = document.createElement("div"); // separa los tipos en divs
      divType.id = "divType"; //agrega clase a los divs
      divType.className = type; //agrega clase background por tipo
      const textType = document.createTextNode(type); //crea el texto del tipo
      divType.appendChild(textType);
      card.appendChild(divType); //agrega los divs a la card
    }
  }
}

/////////////////////////ORDENADO
function orderList() {
  //Ejecución de funciones segun el caso seleccionado

  const orderType = document.getElementById("order").value; //toma el valor de la opcion seleccionada HTML id=order
  let resultOrder = new Array();

  switch (
    orderType // muestra la información segun el caso elegido
  ) {
    case "AZ": //toma el valor de la opcion seleccionada HTML value = AZ
      resultOrder = orderAZ(pokemonList); //la función que se ejecutará en caso de ser seleccionada
      break;

    case "ZA": //toma el valor de la opcion seleccionada HTML value = ZA
      resultOrder = orderZA(pokemonList);
      break;

    case "lowest": //toma el valor de la opcion seleccionada HTML value = lowest
      resultOrder = orderLowest(pokemonList);
      break;

    case "higher": //toma el valor de la opcion seleccionada HTML value = higher
      resultOrder = orderHighest(pokemonList);
      break;
  }

  return resultOrder;
}

///////////// CONSTRUCTOR DE MODAL INFORMACIÓN

function buildModalInfo(pokemon) {
  const modalPokemonInfo = document.getElementById("modal-container");

  //VENTANA DATOS
  const modalInfo = document.createElement("div");
  modalInfo.className = "modalStructure";
  modalPokemonInfo.appendChild(modalInfo);

  //BOTÓN CERRAR VENTANA
  const modalClose = document.createElement("button");
  modalClose.className = "m-ButtonClose";
  modalClose.id = "modalClose";
  const btnClose = document.createTextNode("X");
  modalClose.appendChild(btnClose);
  modalClose.addEventListener("click", () => {
    modalPokemonInfo.removeChild(modalInfo);
  });
  modalInfo.appendChild(modalClose);

  //NÚMERO POKEMON

  //////////////////Container General

  const modalInfoContainer = document.createElement("div");
  modalInfoContainer.className = "modalBackground";
  modalInfo.appendChild(modalInfoContainer);

  ////////////////////// general info
  const generalInfo = document.createElement("div");
  generalInfo.id = "modalPokemon";
  modalInfoContainer.appendChild(generalInfo);

  const pokemonNum = document.createElement("div");
  pokemonNum.id = "ModPokeNum";
  pokemonNum.className = "text";
  const num = document.createTextNode(`${pokemon.num}`);
  pokemonNum.appendChild(num);
  generalInfo.appendChild(pokemonNum);

  const pokemonImg = document.createElement("img");
  pokemonImg.id = "modImgPokemon";
  pokemonImg.className = "general-info";
  pokemonImg.setAttribute("src", `${pokemon.img}`);
  generalInfo.appendChild(pokemonImg);

  const pokemonName = document.createElement("div");
  pokemonName.className = "m-Name general-info";
  const name = document.createTextNode(`${pokemon.name}`);
  pokemonName.appendChild(name);
  generalInfo.appendChild(pokemonName);

  const barrita = document.createElement("div");
  barrita.id = "modBarrita";
  barrita.className = "barrita";
  generalInfo.appendChild(barrita);

  const contMaxCP = document.createElement("div");
  contMaxCP.id = "maxCP"; //contenedor
  contMaxCP.className = "text"; // agrega class
  const maxCp = document.createTextNode(`${pokemon.stats["max-cp"]}`); // agrega objeto
  const atribute = document.createElement("div");
  atribute.className = "m-maxCp negritas";
  const atributs = document.createTextNode("Máx CP: ");
  contMaxCP.appendChild(atributs);
  generalInfo.appendChild(contMaxCP);
  contMaxCP.appendChild(maxCp);
  generalInfo.appendChild(contMaxCP);

  for (const type of pokemon.type) {
    const divType = document.createElement("div"); // separa los tipos en divs
    divType.id = "divType"; //agrega clase a los divs
    divType.className = `general-info ${type}`; //agrega clase background por tipo
    const textType = document.createTextNode(type); //crea el texto del tipo
    divType.appendChild(textType);
    generalInfo.appendChild(divType); //agrega los divs a la card
  }

  const description = document.createElement("p");
  description.className = "description";
  const descriptionText = document.createTextNode(`${pokemon.about}`);
  description.appendChild(descriptionText);
  modalInfoContainer.appendChild(description);

  //GRÁFICAS

  const defense = document.createElement("div");
  defense.className = "defense-section";

  const resistantTitle = document.createElement("div");
  const resistantText = document.createTextNode("Resistant:");
  resistantTitle.className = "label";
  resistantTitle.appendChild(resistantText);
  defense.appendChild(resistantTitle);
  for (const resistant of pokemon.resistant) {
    const pokemonResistant = document.createElement("figure"); // separa los tipos en divs
    pokemonResistant.id = "divType"; //agrega clase a los divs
    pokemonResistant.className = `general-info ${resistant}`; //agrega clase background por tipo
    const textResistant = document.createTextNode(resistant); //crea el texto del tipo
    pokemonResistant.appendChild(textResistant);
    defense.appendChild(pokemonResistant); //agrega los divs a la card
  }

  const weaknessesTitle = document.createElement("div");
  const weaknessesText = document.createTextNode("Weaknesses:");
  weaknessesTitle.className = "label";
  weaknessesTitle.appendChild(weaknessesText);
  defense.appendChild(weaknessesTitle);
  for (const weaknesses of pokemon.weaknesses) {
    const pokemonWeaknesses = document.createElement("figure"); // separa los tipos en divs
    pokemonWeaknesses.id = "divType"; //agrega clase a los divs
    pokemonWeaknesses.className = `general-info ${weaknesses}`; //agrega clase background por tipo
    const textWeaknesses = document.createTextNode(weaknesses); //crea el texto del tipo
    pokemonWeaknesses.appendChild(textWeaknesses);
    defense.appendChild(pokemonWeaknesses); //agrega los divs a la card
  }

  modalInfoContainer.appendChild(defense);

  const stats = document.createElement("div");
  stats.className = "stats-chart";
  const graphics = document.createElement("canvas");
  graphics.id = "myChart";

  stats.appendChild(graphics);
  modalInfoContainer.appendChild(stats);

  const baseStats = document.getElementById("myChart").getContext("2d");

  new Chart(baseStats, {
    type: "bar",
    data: {
      labels: ["Attack", "Defense", "Stamina"],
      datasets: [
        {
          label: "Base stats",
          indexAxis: "y",
          barThickness: 30,
          data: [
            `${pokemon.stats["base-attack"]}`,
            `${pokemon.stats["base-defense"]}`,
            `${pokemon.stats["base-stamina"]}`,
          ],
          backgroundColor: [
            "rgba(255, 152, 152, 1)",
            "rgba(188, 250, 139, 1)",
            "rgba(88, 217, 250, 1)",
          ],
          borderColor: [
            "rgb(244, 54, 54)",
            "rgb(138, 244, 54)",
            "rgb(54, 244, 244)",
          ],
          hoverBorderColor: [
            "rgb(244, 54, 54)",
            "rgb(138, 244, 54)",
            "rgb(54, 244, 244)",
          ],
          borderRadius: 75,
          borderWidth: 5,
        },
      ],
    },
  });

  const barrita2 = document.createElement("div");
  barrita2.className = "barrita2";
  modalInfoContainer.appendChild(barrita2);
}

////CONSTRUCTOR BUSQUEDA
document.getElementById("inputSearch").addEventListener(
  "keypress",
  () => {
    pokemonContainer.innerHTML = "";
    const pokemonSearchByName = inputPokemonName();
    buildCards(searchByName(pokemonSearchByName, pokemonList));
  },
  false
);

////CONSTRUCTOR ORDENADO
document.getElementById("order").addEventListener(
  "click",
  () => {
    pokemonContainer.innerHTML = "";
    buildCards(orderList());
  },
  false
);

////CONSTRUCTOR FILTRADO
document.getElementById("filter").addEventListener(
  "click",
  () => {
    pokemonContainer.innerHTML = "";
    const pokemonTypeSelected = getFillTypeSelected();
    buildCards(fillterType(pokemonTypeSelected, pokemonList));
  },
  false
);

buildCards(orderLowest(pokemonList)); // callback funcion lowest para mostrar en pag iniciada
