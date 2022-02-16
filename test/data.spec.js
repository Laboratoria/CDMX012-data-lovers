
import dataPokemon from '../src/data.js';

const pokemones={
    "pokemon": [{
    "num": "001",
    "name": "bulbasaur",
    "type": [
      "grass",
      "poison"
    ]
  }
]
}
describe('pokemonTypesObject',() => {
  it('debería ser un objeto', () => {
    expect( typeof dataPokemon).toBe('object');
  });



it('tipos debería retornar los pokemones por categoria`', () => {
    expect( dataPokemon.pokemonTypesObject(pokemones)).toStrictEqual(
      {
        grass:[{
          "num": "001",
          "name": "bulbasaur",
          "type": [
            "grass",
            "poison"
          ]
        }],
        poison:[{
          "num": "001",
          "name": "bulbasaur",
          "type": [
            "grass",
            "poison"
          ]
        }]
      }
    );
  });
});


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
//});