import data from './data/pokemon/pokemon.js';

const dataPokemon={
  byName:()=>{
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

  byNumber:()=>{
    const pokemon = data.pokemon;
    let byNumber = pokemon.slice(0)
    return byNumber;
 },

 pokemonTypesObject:()=>{
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

  pokemonResistant: (filterResistant)=>{
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