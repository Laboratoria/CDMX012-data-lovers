<<<<<<< HEAD
import data from './data/pokemon/pokemon.js';

=======

//import data from './data/pokemon/pokemon.js';
>>>>>>> 22e2334c44d0395a5fc6bcdcd91cf984918e3dfd
const dataPokemon={
  
  byName:(data)=>{
    let pokemon=data.pokemon.slice(0);
    let byName=[];
    byName= pokemon.sort((a,b)=>{
    if(a.name>b.name){
      return 1   
    }
    return-1
      })
    return byName
  },

  byNumber:(data)=>{
    const pokemon = data.pokemon;
    let byNumber = pokemon.slice(0)
    return byNumber;
 },

 pokemonTypesObject:(data)=>{
    const pokemon= data.pokemon; 
    let pokemonTypesObject= {}; 
    for(let i=0; i<pokemon.length; i++){ 
      let types=pokemon[i].type; 
      for(let j=0; j<types.length; j++){ 
        let typePokemon= types[j]; 
        if(!Object.prototype.hasOwnProperty.call(pokemonTypesObject, typePokemon)){
          pokemonTypesObject[typePokemon]=[];
        }
        pokemonTypesObject[typePokemon].push(pokemon[i]);
      }
    }
    return pokemonTypesObject;
  },

<<<<<<< HEAD
  pokemonResistant: (filterResistant)=>{
=======
  pokemonResistant : (filterResistant, data)=>{
>>>>>>> 22e2334c44d0395a5fc6bcdcd91cf984918e3dfd
    let arrayResistant=[];
    let pokemon= data.pokemon;
 
    for(let i=0; i<pokemon.length; i++){
      let resistant=pokemon[i].resistant;
    
      for(let j=0; j<resistant.length; j++){
      if(resistant[j]== filterResistant)
      arrayResistant.push(pokemon[i]);
      }
    
  
    return arrayResistant;
    }
  },




};
export default dataPokemon;