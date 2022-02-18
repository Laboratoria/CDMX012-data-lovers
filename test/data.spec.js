import { order1_251, order251_1, orderByAz, orderByZa} from '../src/data.js';
 import dataOrdenada from './dataordenada.js'
 import dataDesordenada from './datadesordenada.js'
//ESTA ES LA FUNCION 1 DE 1 A 251 NUMERICO
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
// ESTA ES LA FUNCION 2 DE 251 A 1 EN ORDEN NUMERICO 
describe('order251_1', () => {
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
    }
  ]}

  it('should be a function', () => {
    expect(typeof order251_1).toBe('function');
  });

  it('shoul be an string', () => {
    expect(typeof 'finalDown').toBe('string');
  });

  it('shoul be from higher to Lower', () => {
    expect(order251_1(pokemonExample)).toEqual(dataDesordenada)
  });

});
//AQUI VA LA TERCER FUNCION QUE ORDENA DE A - Z 
describe('orderByAz', () => { 
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
    expect(typeof orderByAz).toBe('function');
  });

  it('shoul be an string', () => {
    expect(typeof 'finalOrderAZ').toBe('string');
  });

  it('shoul be from A to Z', () => {
    expect(orderByAz(pokemonExample)).toEqual(dataOrdenada)
  });

});
//AQUI VA LA CUARTA FUNCION QUE ORDENA DE Z-A 
describe('orderByZa', () => {
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
    }
  ]}

  it('should be a function', () => {
    expect(typeof orderByZa).toBe('function');
  });

  it('shoul be an string', () => {
    expect(typeof 'finalOrderZA').toBe('string');
  });

  it('shoul be from Z to A', () => {
    expect(orderByZa(pokemonExample)).toEqual(dataDesordenada)
  });

});
