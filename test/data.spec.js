import {buildPokemonNames, orderAZ, orderZA, orderLowest, orderHighest, fillterType, searchByName} from '../src/data.js';
import mockData from '../src/mockData.js';
let pokemonMockList = mockData.pokemon;


describe('buildPokemonNames', () => {
  it('Build Pokemon names should be a function', () => {
    expect(typeof buildPokemonNames).toBe('function');
  });
});


describe('order A-Z', () => {
  it('Order A-Z should be a function', () => {
    expect(typeof orderAZ).toBe('function');
  });

  it('Must spawn the first pokemon start with A', ()=> {
    const initialAPokemon = orderAZ(pokemonMockList)[0]['name'] //ordena del mockData por los nombres
    const initial= initialAPokemon.split('').slice(0,1).join('') //separa el nombre por letras, toma la primera letra y devuelve solo la inicial

    expect(initial).toEqual('b') //el primer pokemon del muestreo es bulbasaur "b"
  });
  
  it('Must spawn the first pokemon start with Z', ()=> { 
    const initialZPokemon = orderZA(pokemonMockList)[0]['name'] //ordena del mockData por los nombres
    const initial= initialZPokemon.split('').slice(0,1).join('') //separa el nombre por letras, toma la primera letra y devuelve solo la inicial

    expect(initial).toEqual('v') //el ultimo pokemon del muestreo es venusaur "V"
  });
});

describe('Order 001-251', () => {
  it('Order Lowest should be a function', () => {
    expect(typeof orderLowest).toBe('function');
  });

  it('Must spawn the first pokemon start with 001', ()=> {
    const lowestPokemon = orderLowest(pokemonMockList)[0]['num'] //ordena del mockData por los numeros
    expect(lowestPokemon).toEqual('001') //el primer pokemon del muestreo es bulbasaur "001"
  });
});

describe('Order 251-001', () => {
  it('Order Highest should be a function', () => {
    expect(typeof orderHighest).toBe('function');
  });

  it('Must spawn the first pokemon start with 251', ()=> {
    const lowestPokemon = orderHighest(pokemonMockList)[0]['num'] //ordena del mockData por los numeros
    expect(lowestPokemon).toEqual('003') //el primer pokemon del muestreo es venusaur "003"
  });
});

describe('Filter by type', () => {
  it('Filter by type should be a function', () => {
    expect(typeof fillterType).toBe('function');
  });

  it('Filter pokemon by type grass', ()=> {
  const typeGrass= fillterType('grass', pokemonMockList)[0]['type'][0]
      expect(typeGrass).toEqual('grass');   
  });

  it('Filter pokemon by type poison', ()=> {
    const typePoison= fillterType('poison', pokemonMockList)[0]['type'][1]
        expect(typePoison).toEqual('poison');   
    });
});

describe('Pokemon Search', () => {
  it('Input Pokemon should be a function', () => {
    expect(typeof searchByName).toBe('function');
  });

  it('Search by Name', ()=> {
  const searchName= searchByName('bulbasaur', pokemonMockList)[0]['name']
      expect(searchName).toEqual('bulbasaur');   
  });

  it('Search incomplete name', ()=> {
    const searchIncompleteName= searchByName('bulb', pokemonMockList)[0]['name']
        expect(searchIncompleteName).toContain('bulb');   
    });

  // it('Filter pokemon by type poison', ()=> {
  //   const typePoison= fillterType('poison', pokemonMockList)[0]['type'][1]
  //       expect(typePoison).toEqual('poison');   
  //   });
});