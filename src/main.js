import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';


const pokemonList = data.pokemon;

for (const property of pokemonList) {
    const pokemonContainer = document.getElementById('root');
   
    const card = document.createElement('section');
    card.className = 'card';
   
    const pokemonNum = document.createElement('li');
    pokemonNum.className = 'property num';
   
    const pokemonName = document.createElement('li');
    pokemonName.className = 'property name';
   
    const pokemonImg = document.createElement('img');
    pokemonImg.setAttribute('src', `${property.img}`);
    pokemonImg.className = 'property img';

    const pokemonType = document.createElement('li');
    pokemonType.className = 'property type';
   
    const num = document.createTextNode(`${property.num}`);
    const name = document.createTextNode(`${property.name}`);
    const type = document.createTextNode(`${property.type}`);

    pokemonNum.appendChild(num);
    pokemonName.appendChild(name);
    pokemonType.appendChild(type);
    card.appendChild(pokemonNum);
    card.appendChild(pokemonName);
    card.appendChild(pokemonImg);
    card.appendChild(pokemonType);
    pokemonContainer.appendChild(card);
}


//console.log(pokemonList)


//console.log(example, data);
