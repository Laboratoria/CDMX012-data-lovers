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


//console.log(pokemonList)

//console.log(example, data);
