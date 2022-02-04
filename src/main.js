//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);
//contenedor principal
const principalContainer= document.querySelector(".cards-containers-principal");

//constante de longitud
const lengthData=data.pokemon.length;


function pokemon(){

    
    for(let i=0; i<lengthData; i++){

        //contenedor white
        let containerExternalCard=document.createElement("div");
        containerExternalCard.classList.add("card-container");
        //Crear div con una clase para la imagen
        let classImagenPokemon=document.createElement("div");
        let imagenPokemon=document.createElement("img");
        classImagenPokemon.classList.add("imagen-pokemon");

        //contenedor black
        let containerInternalCard=document.createElement("div");
        containerInternalCard.classList.add("caracter-pokemon");

        //crear div con una clase para el nombre
        let namePokemon=document.createElement("div");
        namePokemon.classList.add("name-pokemon");

        //crear div con una clase para el identificador
        let idPokemon=document.createElement("div");
        idPokemon.classList.add("id-pokemon");

        //crear div con una clase para los tipos
        let typePokemon = document.createElement("div");
        typePokemon.classList.add("type-pokemon");  
        
        let imagen=data.pokemon[i].img;
        imagenPokemon.src= imagen;
        classImagenPokemon.appendChild(imagenPokemon);


        let nombre= data.pokemon[i].name;
        namePokemon.innerText=`Nombre: ${nombre}`;
            

        let identificador= data.pokemon[i].num;
        idPokemon.innerText=`Id: ${identificador}`;

        let tipos= data.pokemon[i].type;
        typePokemon.innerText=`Tipos: ${tipos}`;

        containerExternalCard.appendChild(classImagenPokemon);
        containerInternalCard.appendChild(namePokemon);
        containerInternalCard.appendChild(idPokemon);
        containerInternalCard.appendChild(typePokemon);

        containerExternalCard.appendChild(containerInternalCard);

        principalContainer.appendChild(containerExternalCard);
        
    }
}


pokemon();
