import { types } from '@babel/core';
import dataPokemon from '../src/data.js';


describe('pokemonTypesObject',() => {
  it('debería ser un objeto', () => {
    expect( typeof dataPokemon).toBe('object');
  });


  
it('tipos debería retornar los pokemones por categoria`', () => {
    expect( types()).toEqual('fire,water, steel');
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