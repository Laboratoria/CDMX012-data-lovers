import {
  order1_251,
  order251_1,
  orderByAz,
  orderByZa,
  filterByTypes,
  filterByLegendary,
  searchPokemon
} from "../src/data.js";
import * as pokemonRepo from "../src/data/pokemon/pokemon.repo.js";

import dataOrdenada from "./dataordenada.js";
import dataDesordenada from "./datadesordenada.js";
import pokemonLegendaryOutput from "./pokemonLegendaryOutput.js";
import pokemonsLegendaryInput from "./pokemonsLegendaryInput.js";
import { jest } from "@jest/globals";
//import { describe, it } from "eslint/lib/rule-tester/rule-tester";
import searchedPokemonOutput from "./searchedPokemonOutput.js";
//import { describe, it } from "eslint/lib/rule-tester/rule-tester";

jest.mock("../src/data/pokemon/pokemon.repo.js");

//ESTA ES LA FUNCION 1 DE 1 A 251 NUMERICO
describe("order1_251", () => {
  //comprueba que es una funcion
  it("should be a function", () => {
    expect(typeof order1_251).toBe("function");
  });

  //con mock sustiye la data con la informacion que nosotros le proporcionemos
  it("should return the pokemons ordered", () => {
    jest
      .spyOn(pokemonRepo, "findAllPokemons")
      .mockReturnValueOnce(JSON.parse(JSON.stringify(dataDesordenada)));
    const response = order1_251();

    expect(response).toEqual(dataOrdenada);
  });
});

// ESTA ES LA FUNCION 2 DE 251 A 1 EN ORDEN NUMERICO
describe("order251_1", () => {
  it("should be a function", () => {
    expect(typeof order251_1).toBe("function");
  });

  it("should return the pokemons ordered", () => {
    jest
      .spyOn(pokemonRepo, "findAllPokemons")
      .mockReturnValueOnce(JSON.parse(JSON.stringify(dataOrdenada)));
    const response = order251_1();

    expect(response).toEqual(dataDesordenada);
  });
});

//AQUI VA LA TERCER FUNCION QUE ORDENA DE A - Z
describe("orderByAz", () => {
  it("should be a function", () => {
    expect(typeof orderByAz).toBe("function");
  });

  it("shoul be from A to Z", () => {
    let exampleAZ = [
      {
        num: "003",
        name: "venusaur",
        pokemon_rarity: "normal",
        type: ["grass", "poison"],
      },
      {
        num: "002",
        name: "ivysaur",
        pokemon_rarity: "normal",
        type: ["grass", "poison"],
      },
      {
        num: "001",
        name: "bulbasaur",
        pokemon_rarity: "normal",
        type: ["grass", "poison"],
      },
    ];
    jest.spyOn(pokemonRepo, "findAllPokemons").mockReturnValueOnce(exampleAZ);
    const response = orderByAz();

    expect(response).toEqual(dataOrdenada);
  });
});

//AQUI VA LA CUARTA FUNCION QUE ORDENA DE Z-A
describe("orderByZa", () => {
  it("should be a function", () => {
    expect(typeof orderByZa).toBe("function");
  });

  it("shoul be from Z to A", () => {
    let exampleZA = [
      {
        num: "001",
        name: "bulbasaur",
        pokemon_rarity: "normal",
        type: ["grass", "poison"],
      },
      {
        num: "002",
        name: "ivysaur",
        pokemon_rarity: "normal",
        type: ["grass", "poison"],
      },
      {
        num: "003",
        name: "venusaur",
        pokemon_rarity: "normal",
        type: ["grass", "poison"],
      },
    ];
    jest.spyOn(pokemonRepo, "findAllPokemons").mockReturnValueOnce(exampleZA);
    const response = orderByZa();

    expect(response).toEqual(dataDesordenada);
  });
});

//AQUI VA LA QUINTA FUNCION FILTRADO POR TIPO DE POKÉMON
describe("filterByTypes", () => {
  it("should be a function", () => {
    expect(typeof filterByTypes).toBe("function");
  });

  it("should be from type pokémon", () => {
    jest
      .spyOn(pokemonRepo, "findAllPokemons")
      .mockReturnValueOnce(dataOrdenada);

    expect(filterByTypes("grass")).toEqual(dataOrdenada);
  });
});

describe("filterByLegendary", () => {
  it("should be a funtion", () => {
    expect(typeof filterByLegendary).toBe("function");
  });

  it("should be legendary pokemons", () => {
    jest
      .spyOn(pokemonRepo, "findAllPokemons")
      .mockReturnValueOnce(pokemonsLegendaryInput);
    const response = filterByLegendary();
    expect(response).toEqual(pokemonLegendaryOutput);
  });
});

describe("searchPokemon", () => {
  it("should be a function", () => {
    expect(typeof searchPokemon).toBe("function");
  });

  it("should be a searched Pokémon ",() => {
    let searchExample = [
      {
        num: "001",
        name: "bulbasaur",
        pokemon_rarity: "normal",
        type: ["grass", "poison"],
      },
      {
        num: "002",
        name: "ivysaur",
        pokemon_rarity: "normal",
        type: ["grass", "poison"],
      },
      {
        num: "003",
        name: "venusaur",
        pokemon_rarity: "normal",
        type: ["grass", "poison"],
      },
    ];
    jest
      .spyOn(pokemonRepo, "findAllPokemons")
      .mockReturnValueOnce(searchExample);

    expect(searchPokemon("venusaur")).toEqual(searchedPokemonOutput);
  })
  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => searchPokemon(false)).toThrow(TypeError)    
  });

});
