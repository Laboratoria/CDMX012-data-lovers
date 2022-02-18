import data from "./data/pokemon/pokemon.js";
// import data from './data/pokemon/pokemon.js';

const pokemonList = data.pokemon;

for (const pokemon of pokemonList) {
  let pokemonContainer = document.getElementById("root");

  let card = document.createElement("pokemon");
  card.className = "card";

  let pokemonNum = document.createElement("div");
  pokemonNum.className = "property num";

  let pokemonName = document.createElement("div");
  pokemonName.className = "property name";

  let pokemonImg = document.createElement("img");
  pokemonImg.setAttribute("src", `${pokemon.img}`);
  pokemonImg.className = "property img";

  let barrita = document.createElement("div");
  barrita.className = "barrita";

  //let pokemonType = document.createElement("div");
  //pokemonType.className = "property type";
  

  let num = document.createTextNode(`${pokemon.num}`);
  let name = document.createTextNode(`${pokemon.name}`);
  //let type = document.createTextNode(`${pokemon.type}`);

  pokemonNum.appendChild(num);
  pokemonName.appendChild(name);
 // pokemonType.appendChild(type);
  card.appendChild(pokemonNum);
  card.appendChild(pokemonImg);
  card.appendChild(pokemonName);
  card.appendChild(barrita);
  //card.appendChild(pokemonType);
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

document.getElementById("order").addEventListener('click', orderList , false); //informacion del boton order

let pokemonNames = new Array (); //array lista nombres
let pokemonNum= new Array(); //array lista numero
for (let pokemon of pokemonList) { //envia los pokemones al array
  pokemonNames.push(pokemon.name);
  pokemonNum.push(pokemon.num);
}

function orderList(){ //funcion de ordenado
  let orderType= document.getElementById("order").value; //toma el valor de la opcion seleccionada
  //console.log(orderType);
  switch (orderType){ // muestra la información segun el caso elegido
    case "AZ":
      console.log("ordena el array de la A-z");
      orderAZ(); //la función que se ejecutará en caso de ser seleccionada
    break;
    case "ZA":
      console.log("ordena el array de la Z-A");
      orderZA();
    break;
    case "lowest":
      console.log("ordena el array de LOWEST");
      orderLowest();
    break;
    case "higher":
      console.log("ordena el array de la higher");
      orderHighest();
    break;
  }
}
function orderAZ(){ 
  let pokemonNameAZ = pokemonNames.sort(); //ordena los pokenones de la A-Z
  let pokemonAz = new Array ();

  for (const name of pokemonNameAZ) {
    for (const pokemon of pokemonList) {
      if(pokemon.name === name){

        pokemonAz.push(pokemon)
      }
    }
  }
  console.log(pokemonAz);
}


function orderZA(){  //ordena los pokenones de la Z-A
  console.log(pokemonNames.sort().reverse());
}

function orderLowest(){
  pokemonNum.sort(function(a, b){return a-b});  //Ordena los pokemon por número 001-251
  console.log(pokemonNum.sort(function(a, b){return a-b}));
}

function orderHighest(){ //Ordena los pokemon por número 251-001
  pokemonNum.sort(function(a, b){return b-a});
  console.log(pokemonNum.sort(function(a, b){return b-a}));
}

// console.log(pokemonList[0])
// for (const pokemon of pokemonList) {
//   if(pokemon.name === "squirtle"){
//     console.log(pokemon);
//   }