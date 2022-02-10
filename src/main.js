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
  const modalWindow = document.createElement("a");
  modalWindow.setAttribute("href", idDirection);
  const cardSpace = document.createElement("section"); //crea una sección
  cardSpace.setAttribute("class", identificador); //crea el atributo clase identificador='pokeCards'
  cardSpace.setAttribute("id", idSeccion);
  const cardName = document.createElement("p"); //crea el elemento parrafo
  cardName.innerHTML = "Pokémon: <br>" + `${property.name}`; // cambia el texto vacio del parrafo por la propiedad name
  const cardNum = document.createElement("p"); //crea el elemento parrafo
  cardNum.innerHTML = property.num; // cambia el texto vacio del parrafo por la propiedad numero
  const pokemonImag = document.createElement("img"); //crea un Elemento de tipó imagen
  pokemonImag.setAttribute("src", `${property.img}`); //le asigna el atributo de src con su propiedad que es el link
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
  let idContent = content.num;
  let aboutPokemon = content.about;
  let resistantPokemon = content.resistant;
  let weaknessesPokemon = content.weaknesses;
  let typePokemon = content.type;

  const allContent = document.createElement("section");
  allContent.setAttribute("id", idContent);
  const contentTitle = document.createElement("h2");
  contentTitle.innerHTML = content.name.toUpperCase();
  const contentAbout = document.createElement("p");
  contentAbout.innerHTML =
    "Datos: <br>" + "Descripción" + aboutPokemon + "Tipo: " + typePokemon;
  "Resistencia" + resistantPokemon + "Debilidades" + weaknessesPokemon;
  allContent.appendChild(contentTitle);
  allContent.appendChild(contentAbout);
  document.getElementById("popUpWindow").appendChild(allContent);
  showTotalContent = allContent;
}
/*
HACER UN CONSOLE.LOG DE LA DATA            S
ACCDER A LOS 3 ELEMENTOS JUNTOS EN UNA MISMA FILA 
ACCEDER AL NUMERO  DE LA DATA              
ACCEDER AL NOMBRE IMAGEN DE LA DATA        
ACCEDER AL NOMBRE DE LA DATA               
MODIFICAR LA SECCIÓN PARA CREAR UNA LISTA 

 */
