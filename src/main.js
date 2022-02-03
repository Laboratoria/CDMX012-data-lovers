import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

const namePokemon=document.querySelector(".name-pokemon");
const titleName=document.querySelector(".title-name");
const idPokemon=document.querySelector(".id-pokemon");
const titleId=document.querySelector(".title-id");
const classImagenPokemon=document.querySelector(".imagen-pokemon");
const imagenPokemon=document.createElement("p");
const typePokemon = document.querySelector(".type-pokemon");
const titleType=document.querySelector(".title-type");
const lengthData=data.pokemon.length;
console.log(lengthData);

function pokemon(){
    
    for(let i=0; i<lengthData-1; i++){
        console.log(data.pokemon[i].type)
    }
    const imagen=data.pokemon[0].img;
    imagenPokemon.innerHTML= `<img src="${imagen}" alt="">`;
    classImagenPokemon.parentNode.appendChild(imagenPokemon);


    const nombre= data.pokemon[0].name;
    titleName.innerText = "Nombre: "
    namePokemon.innerText=nombre;
        

    const identificador= data.pokemon[0].num;
    titleId.innerText = "ID: "
    idPokemon.innerText=identificador;

    const tipos= data.pokemon[0].type;
    titleType.innerText = "Tipo: "
    typePokemon.innerText=tipos;
    }
    
    


pokemon();
