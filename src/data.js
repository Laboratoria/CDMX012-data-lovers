const dataPokemon = {

    //quité la optimización del ordenado porque no sé qué le estaba picando mal que de repente me dejó de jalar el código, tons mejor dejé cómo estaba
  byName: (data) => {
    let pokemon = data.pokemon.slice(0);
    let byName = [];
    byName = pokemon.sort((a, b) => {
      if (a.name > b.name) {
        return 1
      }
      return -1
    })
    return byName;
  },

  byNumber: (data) => {
    const pokemon = data.pokemon;
    let byNumber = pokemon.slice(0)
    return byNumber;
  },

  pokemonTypesObject: (data) => {
    const pokemon = data.pokemon;
    let pokemonTypesObject = {};
    for (let i = 0; i < pokemon.length; i++) {
      let types = pokemon[i].type;
      for (let j = 0; j < types.length; j++) {
        let typePokemon = types[j];
        if (!Object.prototype.hasOwnProperty.call(pokemonTypesObject, typePokemon)) {
          pokemonTypesObject[typePokemon] = [];
        }
        pokemonTypesObject[typePokemon].push(pokemon[i]);
      }
    }
    return pokemonTypesObject;
  },

  pokemonResistant: (data) => {
    let pokemon = data.pokemon;
    let pokemonResistantObject = {};
    for (let i = 0; i < pokemon.length; i++) {
      let resistant = pokemon[i].resistant;
      for (let j = 0; j < resistant.length; j++) {
        let resistantPokemon = resistant[j];
        if (!Object.prototype.hasOwnProperty.call(pokemonResistantObject, resistantPokemon)) {
          pokemonResistantObject[resistantPokemon] = [];
        }
        pokemonResistantObject[resistantPokemon].push(pokemon[i])
      }
    }
    return pokemonResistantObject;
  },

  pokemonWeaknesses: (data) => {
    let pokemon = data.pokemon;
    let pokemonWeaknessestObject = {};
    for (let i = 0; i < pokemon.length; i++) {
      let weaknesses = pokemon[i].weaknesses;
      for (let j = 0; j < weaknesses.length; j++) {
        let weaknessesPokemon = weaknesses[j];
        if (!Object.prototype.hasOwnProperty.call(pokemonWeaknessestObject, weaknessesPokemon)) {
          pokemonWeaknessestObject[weaknessesPokemon] = [];
        }
        pokemonWeaknessestObject[weaknessesPokemon].push(pokemon[i])
      }
    }
    return pokemonWeaknessestObject;
  },


  //No supe cómo anclarla :c

 /* computeStats: (data) => {
    let pokemon = data.pokemon;
    let evolution = [];
    for (let i = 0; i < pokemon.length; i++) {
      let pokemonEvolution = pokemon[i].evolution;
      evolution = pokemonEvolution;
      
    }
    return evolution
  },*/


};
export default dataPokemon;