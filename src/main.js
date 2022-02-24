import { orderAZ, orderZA, orderLowest, orderHighest, fillterType, inputPokemon } from "./data.js";

let pokemonContainer = document.getElementById("root");

function buildCards(pokemonArray) {
  // crea las cards de pokemones

  for (const pokemon of pokemonArray) {
    let card = document.createElement("div");
    card.className = "card";
    card.addEventListener(
      "click",
      () => {
        // agrega el lissener a la card
        console.log(pokemon.name);

        buildModalInfo(pokemon);
      },
      false
    );

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

/////////////////////////ORDENADO
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
      resultOrder = orderZA();
      break;

    case "lowest": //toma el valor de la opcion seleccionada HTML value = lowest
      resultOrder = orderLowest();
      break;

    case "higher": //toma el valor de la opcion seleccionada HTML value = higher
      resultOrder = orderHighest();
      break;
  }

  return resultOrder;
}

///////////// CONSTRUCTOR DE MODAL INFORMACIÓN

let modalPokemonInfo = document.getElementById("modal-container");

function buildModalInfo(pokemon) {
  let modalInfo = document.createElement("div");
  modalInfo.className = "modalStructure";
  modalPokemonInfo.appendChild(modalInfo);

  let modalClose = document.getElementById("modalClose");
  modalInfo.appendChild(modalClose);

  let pokemonNum = document.getElementById("ModPokeNum");
  pokemonNum.className = "m-num";
  let num = document.createTextNode(`${pokemon.num}`);
  pokemonNum.appendChild(num);
  modalInfo.appendChild(pokemonNum);

  //////////////////Container General

  let modalInfoContainer = document.createElement("div");
  modalInfoContainer.className = "modalBackground";
  modalInfo.appendChild(modalInfoContainer);

  ////////////////////// pokemon

  let modalInfoPokemon = document.getElementById("ModalPokemon");
  modalInfoPokemon.className = "modInfoPokemon";
  modalInfoContainer.appendChild(modalInfoPokemon);

  let pokemonImg = document.getElementById("modImgPokemon");
  pokemonImg.setAttribute("src", `${pokemon.img}`);
  modalInfoPokemon.appendChild(pokemonImg);

  let pokemonName = document.createElement("div");
  pokemonName.className = "m-Name";
  let name = document.createTextNode(`${pokemon.name}`);
  pokemonName.appendChild(name);
  modalInfoPokemon.appendChild(pokemonName);

  let barrita = document.getElementById("modBarrita");
  modalInfoPokemon.appendChild(barrita);

  let contMaxCP = document.getElementById("maxCP"); //contenedor
  contMaxCP.className = "m-maxCp"; // agrega class
  let maxCp = document.createTextNode(`${pokemon.stats["max-cp"]}`); // agrega objeto
  let atributo = document.createElement("div");
  atributo.className = "negritas";
  let atributs = document.createTextNode("Máx CP:");
  contMaxCP.appendChild(atributs);
  modalInfoPokemon.appendChild(contMaxCP);
  contMaxCP.appendChild(maxCp);
  modalInfoPokemon.appendChild(contMaxCP);

  for (let type of pokemon.type) {
    let divType = document.createElement("div"); // separa los tipos en divs
    divType.id = "divType"; //agrega clase a los divs
    divType.className = type; //agrega clase background por tipo
    let textType = document.createTextNode(type); //crea el texto del tipo
    divType.appendChild(textType);
    modalInfoPokemon.appendChild(divType); //agrega los divs a la card
  }
  //////////////////////////////////////////////BOTONES

  let modalSelectedButtons = document.getElementById("modalSelectButtons");
  modalSelectedButtons.className = "modButtons";
  modalInfoContainer.appendChild(modalSelectedButtons);

  let butonAbout = document.getElementById("modalAbout");
  modalSelectedButtons.appendChild(butonAbout);

  let butonStats = document.getElementById("modalStats");
  modalSelectedButtons.appendChild(butonStats);

  let butonEvolution = document.getElementById("modalEvolution");
  modalSelectedButtons.appendChild(butonEvolution);

  ////////////////////////////////////////////// INFOGENE

  let ModalGenePokemon = document.getElementById("ModalGeneration");
  ModalGenePokemon.className = "modGene";
  modalInfoContainer.appendChild(ModalGenePokemon);

    let contGeneNum = document.getElementById("ModalGeneration"); //contenedor
    //contGeneNum.className="modGeneNum";
    console.log(contGeneNum);
    let geneNumO = document.createTextNode(`${pokemon.generation["name"]}`); // agrega objeto
    let atributoGeneNum = document.createElement("div");
    atributoGeneNum.className = "negritas";
    let geneNumP = document.createTextNode("Generation:");
    contGeneNum.appendChild(geneNumP);
    ModalGenePokemon.appendChild(contGeneNum);
    contGeneNum.appendChild(geneNumO);
    ModalGenePokemon.appendChild(contGeneNum);


  // let contMaxCP = document.getElementById("maxCP"); //contenedor
  // contMaxCP.className = "m-maxCp"; // agrega class
  // let maxCp = document.createTextNode(`${pokemon.stats["max-cp"]}`); // agrega objeto
  // let atributo = document.createElement("div");
  // atributo.className = "negritas";
  // let atributs = document.createTextNode("Máx CP:");
  //  contMaxCP.appendChild(atributs);
  // // modalInfoPokemon.appendChild(contMaxCP);
  // // contMaxCP.appendChild(maxCp);
  // // modalInfoPokemon.appendChild(contMaxCP);

  console.log(pokemon);
}

////////////// CONSTRUCTORES DE CARDS

////CONSTRUCTOR BUSQUEDA
document.getElementById("botonSearch").addEventListener(
  "click",
  () => {
    pokemonContainer.innerHTML = "";
    buildCards(inputPokemon());
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
    buildCards(fillterType());
  },
  false
);

buildCards(orderLowest()); // callback funcion lowest para mostrar en pag iniciada
