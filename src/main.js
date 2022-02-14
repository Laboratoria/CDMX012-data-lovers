import { example } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

/* aqui empieza mi prueba -eli*/
import { alphabeticOrder } from './data.js';

let resultsData = data.results;
/*console.log(resultsData[1].name)*/
alphabeticOrder ( resultsData )
for (let i = 0; i <= 10; i++){ //ciclo

    console.log(resultsData [i].name)
}

