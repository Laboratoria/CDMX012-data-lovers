
const dataPokemon={



  pokemonResistant : (data, filterResistant)=>{
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

byName: (data)=>{
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


/*pokemonName:(data)=>{
let pokemon= data.pokemon;
let arrayPokemones= [];
  for(let i=0; i<pokemon.length; i++){
    arrayPokemones.push(pokemon[i].name);
    arrayPokemones.sort();
    
  }

  return arrayPokemones;

},*/
 pokemonNumber:(data)=>{
  let arrayNumbers= data.pokemon;
  //let arrayNumbers=[];
  //for(let i=0; i<pokemon.length; i++){
  // arrayNumbers.push(pokemon[i].num)
  //}
    return arrayNumbers;
 },

 tPokemon : (data) => {
  let tPokemon= {};
  let pokemon= data.pokemon;
  
 
  for(let i=0; i<pokemon.length; i++){
    let types=pokemon[i].type;
  
    for(let j=0; j<types.length; j++){
     let typePokemon= types[j]; 
     
     if(!Object.prototype.hasOwnProperty.call(tPokemon, typePokemon)){
       tPokemon[typePokemon]=[];
      
     }
    
     tPokemon[typePokemon].push(pokemon[i]);
    }
  }
  return tPokemon;

},


};
export default dataPokemon;