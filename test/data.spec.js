
import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import dataPokemon from '../src/data.js';
import data from '../src/data/pokemon/pokemon.js'; //para que se puedan llevar a cabo las comparaciones de acuerdo a nuestra base de datos, de lo contrario data.js está vacía

//todos los test que pongo los he revisado al cambiar lo que pido que me entregue (toEqual / toContain) para corroborar que me está sacando la info adecuadamente
//a veces escribir mal una parte del test genera que éste pase cuando en realidad no está haciendo lo que quieres. Por eso menciono lo de la revisión (y su importancia)
// de todos modos, valdría la pena que también los checaras tú namas para corroborar + jeje

//TEST UNITARIO PARA ORDENADO
//Ordernar.nombre es una función
describe ('byName', ()=>{
  it('debe ser una función', ()=>{
    expect(typeof dataPokemon.byName).toBe('function');
  })
  //Primer pokémon empezará con A
  it('debe generar que el primer pokémon empiece con A', ()=>{
    const firstPoke = dataPokemon.byName(data)[0]['name'] //accedo a la propiedad "name", si no hubiera puesto la línea 4, entonces byName está vacío porque data.js también lo está
    const initial= firstPoke.split('').slice(0,1).join('').toUpperCase() //saco la inicial
    expect(initial).toEqual('A') 
  })//Último pokémon empezará con Z
  it('debe generar que el último pokémon empiece con Z', ()=>{
    const lastPoke = dataPokemon.byName(data)[dataPokemon.byName(data).length-1]['name']//accedo a la porpiedad "name" de la última posición
    const initial= lastPoke.split('').slice(0,1).join('').toUpperCase()
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
    const number = dataPokemon.byNumber(data)[0]['num']
    expect(number).toEqual('001')
  })//Último pokémon será 251
  it('debe generar que el último pokémon sea el 251', ()=>{
    const number = dataPokemon.byNumber(data)[dataPokemon.byNumber(data).length-1]['num']
    expect(number).toEqual('251')
  })
  })


//TEST UNITARIO PARA FILTRADO
describe('pokemonTypesObject',() => {
  it('debería ser una función', () => {
    expect(typeof dataPokemon.pokemonTypesObject).toBe('function'); 
  });

  //Te propongo esta forma de test unitario para filtrado, en lugar de comparar un cachito de la data que copias y pegas aquí, lo comparas con toda nuestra data y, por tanto, creo que es más confiable
  it('tipos fuego debería retornar pokémones fuego', () => {
    //un loop para acceder a cada pokémon
    dataPokemon.pokemonTypesObject(data)['fire'].forEach(element => { 
      //no uso toEqual o toStrictEqual porque hay pokémones que tienen más de 1 tipo, entonces lo que quiero es checar si contiene el tipo "fuego", por eso toContain
      expect(element.type).toContain('fire'); 
    }); 
  })

  it('tipos agua debería retornar pokémones agua', () => {
    dataPokemon.pokemonTypesObject(data)['water'].forEach(element => { 
      expect(element.type).toContain('water'); 
    }); 
  })

  it('tipos planta debería retornar pokémones planta', () => {
    dataPokemon.pokemonTypesObject(data)['grass'].forEach(element => { 
      expect(element.type).toContain('grass'); 
    }); 
  })
  //no pongo de todos los tipos de pokémon, pero estoy segura de que los demás cumplen a la perfección, igual podemos ponerlos si quieres :)
})


describe('pokemonResistant',() => {
  it('debería ser una función', () => {
    expect(typeof dataPokemon.pokemonResistant).toBe('function'); 
  });

  it('resistencia a fuego debería retornar pokémones resistentes a fuego', () => {
    dataPokemon.pokemonResistant(data)['fire'].forEach(element => { 
      expect(element.resistant).toContain('fire'); 
    })
  })

  it('resistencia a agua debería retornar pokémones resistentes a agua', () => {
    dataPokemon.pokemonResistant(data)['water'].forEach(element => { 
      expect(element.resistant).toContain('water'); 
    })
  })
})


describe('pokemonWeaknesses',() => {
  it('debería ser una función', () => {
    expect(typeof dataPokemon.pokemonWeaknesses).toBe('function'); 
  });

  it('debilidad a fuego debería retornar pokémones débiles a fuego', () => {
    dataPokemon.pokemonWeaknesses(data)['fire'].forEach(element => { 
      expect(element.weaknesses).toContain('fire'); 
    })
  })

  it('debilidad a agua debería retornar pokémones débiles a agua', () => {
    dataPokemon.pokemonWeaknesses(data)['water'].forEach(element => { 
      expect(element.weaknesses).toContain('water'); 
    })
  })
})

//si no te late, mantengo abajo la forma que habías hecho antes


/*const pokemones = { //sin querer borré esto, lo escribí como medio recordaba que lo habías puesto (de cualquier manera mantengo mis comentarios de abajo)
  "pokemon": [{
    "num": "001",
    "name": "bulbasaur",
    "type": [
      "grass",
      "poison"
    ]
}]}


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
})}*/