import { order1_251, orderByAz} from '../src/data.js';
 import dataOrdenada from './dataordenada.js'

describe('order1_251', () => {
  let pokemonExample = {
    pokemon:[
    {
      num: "002",
      name: "ivysaur",
      pokemon_rarity: "normal",
      type: ["grass", "poison"],
    },
    {
      num: "001",
      name: "bulbasaur",
      pokemon_rarity : "normal",
      type : ["grass", "poison"], 
    },
    {
      num: "003",
      name: "venusaur",
      pokemon_rarity: "normal",
      type: ["grass", "poison"],
    },
  ]}

  it('should be a function', () => {
    expect(typeof order1_251).toBe('function');
  });

  it('shoul be an string', () => {
    expect(typeof 'finalUp').toBe('string');
  });

  it('shoul be from lowest to higher', () => {
    expect(order1_251(pokemonExample)).toEqual(dataOrdenada)
  });

});

describe('orderByAz', () => {
  it('should be a function', () => {
    expect(typeof orderByAz).toBe('function');
  });

  it('shoul be an string', () => {
    expect(typeof 'finalOrderAZ').toBe('string');
  });
});

/*
describe('Funciones de filtrado de datos', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
}); */
