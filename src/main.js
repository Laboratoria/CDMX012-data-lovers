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
 const tiposPokemon = data.pokemon.map(function(pokemon){
  let pokemonTypes = pokemon.type
  return pokemonTypes
});
console.log(tiposPokemon)

/************AQUI SACAMOS IMAGENES ************************/

for (let property of data.pokemon){
    let showTotalPokemons = [""];
    let identificador = "pokeCards"
    const cardSpace = document.createElement("section")
    cardSpace.setAttribute("class", identificador)
    const cardName = document.createElement("p");
    cardName.innerHTML= "Pokémon: <br>" + `${property.name}`
    const cardNum = document.createElement("p");
    cardNum.innerHTML= property.num
    const pokemonImag = document.createElement("img");
    pokemonImag.setAttribute("src",`${property.img}`)
    cardSpace.appendChild(pokemonImag);
    cardSpace.appendChild(cardName)
    cardSpace.appendChild(cardNum)
    document.getElementById("showData").appendChild(cardSpace)
    showTotalPokemons= cardSpace
}

/********************AQUI ESTAMOS IMPRIMIENDO DATA ***********************/
//document.getElementById("showData").innerHTML= tiposPokemon.join('\n -')

/*
HACER UN CONSOLE.LOG DE LA DATA            S
ACCDER A LOS 3 ELEMENTOS JUNTOS EN UNA MISMA FILA 
ACCEDER AL NUMERO  DE LA DATA              
ACCEDER AL NOMBRE IMAGEN DE LA DATA        
ACCEDER AL NOMBRE DE LA DATA               
MODIFICAR LA SECCIÓN PARA CREAR UNA LISTA 

 */