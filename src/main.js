import { orderByAz } from "./data.js";
import data from "./data/pokemon/pokemon.js";
/**********ESTO ES LA VARIABLE QUE TIENE EL OBJETO  ****************/
let dataPokemons = data.pokemon; //Estamos guardando toda la data en una variable

/**********ESTAMOS ITERANDO EL OBJETO  **************************/
let eachPokemon = Object.keys(dataPokemons);
for (let i = 0; i < dataPokemons.length; i++) {
  let ePokemon = eachPokemon[i];
  //console.log(dataPokemons[ePokemon]); //Lo sigue regresando como objeto¿Por qué?
  //console.log(ePokemon);
}
/***********ESTAMOS OBTENIENDO TIPOS DE POKEMON  *****************/
const tiposPokemon = data.pokemon.map(function (pokemon) {
  let pokemonTypes = pokemon.type;
  return pokemonTypes;
});
console.log(tiposPokemon);

/************AQUI SACAMOS IMAGENES ************************/

for (let property of data.pokemon) {
  //bucle for accede a la data
  let showTotalPokemons = [""]; //se crea una variable vacia que almacena lo iterado
  let identificador = "pokeCards"; //nombre de la clase
  let idDirection = "#modalWindowPokemon";
  let idSeccion = property.num;
  let modalDataOpen = "idModal"; //**********tal vez pueda ir en la seccion o en el num, ya que num es el id de cada iteracion

  const modalWindow = document.createElement("a");
  modalWindow.setAttribute("href", idDirection);

  const cardSpace = document.createElement("section"); //crea una sección
  cardSpace.setAttribute("class", identificador); //crea el atributo clase identificador='pokeCards'
  cardSpace.setAttribute("id", idSeccion);

  const cardName = document.createElement("p"); //crea el elemento parrafo
  cardName.innerHTML =
    "Pokémon: <br>" +
    `${property.name[0].toUpperCase() + property.name.slice(1)}`; // cambia el texto vacio del parrafo por la propiedad name convirtiendo la primera letra del array en mayuscula y concatenando desde la posicion 1 con slice

  const cardNum = document.createElement("p"); //crea el elemento parrafo
  cardNum.innerHTML = property.num; // cambia el texto vacio del parrafo por la propiedad numero

  const pokemonImag = document.createElement("img"); //crea un Elemento de tipó imagen
  pokemonImag.setAttribute("src", `${property.img}`); //le asigna el atributo de src con su propiedad que es el link
  pokemonImag.setAttribute("data-open", modalDataOpen);

  cardSpace.appendChild(pokemonImag); //cardSpace es el nodo padre y apokemonImag es el nodo hijo
  cardSpace.appendChild(cardName); //cardSpace es el nodo padre y cardName es el nodo hijo
  cardSpace.appendChild(cardNum); //cardSpace es el nodo padre y cardNumes el nodo hijo
  modalWindow.appendChild(cardSpace);

  document.getElementById("showData").appendChild(modalWindow); //show data es el nodo padre y cardSpace el nodo hijo.
  showTotalPokemons = cardSpace;
}

/********************AQUI ESTAMOS IMPRIMIENDO DATA EN VENTANAS EMERGENTES ***********************/

for (let content of data.pokemon) {
  let showTotalContent = [""];
  let idModalContent = content.num;
  let classModalDialog = "modalDialog";
  let closeModal = "closeModal";
  let modalTitle = "modalTitle";
  let aboutPokemon = content.about;
  let resistantPokemon = content.resistant;
  let weaknessesPokemon = content.weaknesses;
  let typePokemon = content.type;

  const allContent = document.createElement("section");
  allContent.setAttribute("id", idModalContent);
  allContent.setAttribute("class", classModalDialog);

  const buttonModal = document.createElement("input");
  buttonModal.setAttribute("class", closeModal);
  buttonModal.setAttribute("aria-label", "closeModal");
  buttonModal.setAttribute("value", "X");
  buttonModal.setAttribute("type", "button");

  const contentTitle = document.createElement("h2");
  contentTitle.innerHTML = content.name.toUpperCase();
  contentTitle.setAttribute("class", modalTitle);

  const contentImag = document.createElement("img"); //crea un Elemento de tipo imagen
  contentImag.setAttribute("src", `${content.img}`); //le asigna el atributo de src con su propiedad que es el link
  //pokemonImag.setAttribute("data-open", modalDataOpen);
  const contentAbout = document.createElement("p");
  contentAbout.innerHTML =
    "Datos: <br>" +
    "Descripción <br>" +
    aboutPokemon +
    "<br>Tipo: <br>" +
    typePokemon +
    "<br>Resistencia: <br>" +
    resistantPokemon +
    "<br>Debilidades:<br> " +
    weaknessesPokemon;

  allContent.appendChild(buttonModal);
  allContent.appendChild(contentTitle);
  allContent.appendChild(contentImag);
  allContent.appendChild(contentAbout);
  document.getElementById("idModal").appendChild(allContent);
  showTotalContent = allContent;
}


/*************AQUI SE LE DA FUNCIONALIDAD AL BOTON CLOSE *********/

/*
const openModal = document.querySelector("data-open]");
const isVisibility = "is-visibility";
const closeModal = document.querySelector("closeModal");

for (const modal of openModal) {
  modal.addEventListener("click", function () {
    const modalId = this.dataset.open;
    document.getElementById("idModal").classList.add(isVisibility);
  });
}*/
/*
for(const closeModal of openModal)
*/
/*
HACER UN CONSOLE.LOG DE LA DATA            S
ACCDER A LOS 3 ELEMENTOS JUNTOS EN UNA MISMA FILA 
ACCEDER AL NUMERO  DE LA DATA              
ACCEDER AL NOMBRE IMAGEN DE LA DATA        
ACCEDER AL NOMBRE DE LA DATA               
MODIFICAR LA SECCIÓN PARA CREAR UNA LISTA 

 */
