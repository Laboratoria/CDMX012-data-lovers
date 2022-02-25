const dataPokemon={

  /*¡sortData:(data, sortBy, sortOrder)=>{
    if (sortBy ==="pkeName"){
      let pokemon=data.slice(0);
        let byName=[];
        byName= pokemon.sort((a,b)=>{
        if(a.name>b.name){
          return 1   
        }
          return-1
        })
        if (sortOrder === "inverse"){
          byName.reverse()
        }
          return byName
        }
      else if (sortBy==="pokeNum"){
        let pokemon=data.slice(0);
          let byNumber = pokemon.slice(0)
        
        if (sortOrder === "inverse"){
          byNumber.reverse()
        }
          return byNumber
        }
      },*/
        
 

  byName:(data)=>{
    let pokemon=data.pokemon.slice(0);
    let byName=[];
    byName= pokemon.sort((a,b)=>{
    if(a.name>b.name){
      return 1   
    }
    return-1
      })
    return byName;
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

  pokemonResistant:( data)=>{
    let pokemon= data.pokemon;
    let pokemonResistantObject= {}; 
   
    
    for(let i=0; i<pokemon.length; i++){
      let resistant=pokemon[i].resistant;
    
    
      for(let j=0; j<resistant.length; j++){
        let resistantPokemon=resistant[j];
       
      if(!Object.prototype.hasOwnProperty.call(pokemonResistantObject, resistantPokemon)){
        pokemonResistantObject[resistantPokemon]=[];
      }
     pokemonResistantObject[resistantPokemon].push(pokemon[i])
      }
    }
      
    return pokemonResistantObject;
    
  },


  pokemonWeaknesses:( data)=>{
    let pokemon= data.pokemon;
    let pokemonWeaknessestObject= {}; 
   
    
    for(let i=0; i<pokemon.length; i++){
      let weaknesses=pokemon[i].weaknesses;
    
    
      for(let j=0; j<weaknesses.length; j++){
        let weaknessesPokemon=weaknesses[j];
       
      if(!Object.prototype.hasOwnProperty.call(pokemonWeaknessestObject, weaknessesPokemon)){
        pokemonWeaknessestObject[weaknessesPokemon]=[];
      }
     pokemonWeaknessestObject[weaknessesPokemon].push(pokemon[i])
      }
    }
      
    return pokemonWeaknessestObject;
    
  },


  computeStats: (pokemon1, pokemon2)=>{
   // let pokemon = data.pokemon;
    let result = ""
    //AL SELECCIONAR POKEMON, COMPARAR
    if(pokemon1["special-attack"]["base-damage"] > pokemon2["special-attack"]["base-damage"]){
      result = "The winner is " + pokemon1 + "."
    } else if (pokemon1["special-attack"]["base-damage"] == pokemon2["special-attack"]["base-damage"]){
      result = "There's a tie"
    }
    else {
      result = "The winner is " + pokemon2 + "."
    }
    return result
  }


};
export default dataPokemon;