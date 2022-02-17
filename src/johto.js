import { example } from './data.js';

import data from './data/pokemon/pokemon.js';

let dex2 = '';
for (let j = 151; j < 251; j++){
    dex2 += `<img src="${data.pokemon[j].img}">`;
    let pichu = document.getElementById("bulbasaur2");
    pichu.innerHTML = dex2;

}