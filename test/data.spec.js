
import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import dataPokemon from '../src/data.js';
import data from '../src/data/pokemon/pokemon.js'; //explicación de abajo

const pokemon = data //para que se puedan llevar a cabo las comparaciones de acuerdo a nuestra base de datos, de lo contrario data.js está vacía

//TEST UNITARIO PARA ORDENADO
//Ordernar.nombre es una función
describe ('byName', ()=>{
  it('debe ser una función', ()=>{
    expect(typeof dataPokemon.byName).toBe('function');
  })
  //Primer pokémon empezará con A
  it('debe generar que el primer pokémon empiece con A', ()=>{
    let firstPoke = dataPokemon.byName(pokemon)[0]['name'] //accedo a la propiedad "name", si no hubiera puesto la línea 4 y 6, entonces byName está vacío porque data.js también lo está
    let initial= firstPoke.split('').slice(0,1).join('').toUpperCase() //saco la inicial
    expect(initial).toEqual('A') 
  })//Último pokémon empezará con Z
  it('debe generar que el último pokémon empiece con Z', ()=>{
    let lastPoke = dataPokemon.byName(pokemon)[dataPokemon.byName(pokemon).length-1]['name']
    let initial= lastPoke.split('').slice(0,1).join('').toUpperCase()
    expect(initial).toEqual('Z')
  })
  })

//Ordernar.número es una función
describe ('byNumber', ()=>{
  it('debe ser una función', ()=>{
    expect(typeof dataPokemon.byNumber).toBe('function');
  })
  //Primer pokémon será 001
  it('debe generar que el primer pokémon sea el 001', ()=>{
    let number = dataPokemon.byNumber(pokemon)[0]['num']
    expect(number).toEqual('001')
  })//Último pokémon será 251
  it('debe generar que el último pokémon sea el 251', ()=>{
    let number = dataPokemon.byNumber(pokemon)[dataPokemon.byNumber(pokemon).length-1]['num']
    expect(number).toEqual('251')
  })
  })






const pokemones = { //sin querer borré esto, lo escribí como medio recordaba que lo habías puesto (de cualquier manera mantengo mis comentarios de abajo)
  "pokemon": [{
    "num": "001",
    "name": "bulbasaur",
    "type": [
      "grass",
      "poison"
    ]
}]}

describe('pokemonTypesObject',() => {
  it('debería ser un objeto', () => {
    expect( typeof dataPokemon).toBe('object'); //estás pidiendo el tipo de dataPokemon (que sí es un objeto), no de pokemonTypesObject (tendría que ser "dataPokemon.pokemonTypesObject")(y éste no es un objeto, es una función)
  });



it('tipos debería retornar los pokemones por categoria`', () => {
    expect( dataPokemon.pokemonTypesObject(pokemones)).toStrictEqual( //siento que esto no aplica porque tú estás creando los datos arriba (línea 47); no tenemos "pokemones" en nuestro trabajo
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

