import {
  order1_251,
  order251_1,
  orderByAz,
  orderByZa,
  filterByTypes,
  filterByLegendary,
  searchPokemon,
  getTotalAndAverange,
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

  it("should be a searched Pokémon ", () => {
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
  });
  it("should throw TypeError when invoked with wrong argument types", () => {
    expect(() => searchPokemon(false)).toThrow(TypeError);
  });
});

describe("getTotalAndAverange", () => {
  let searchExample = [
    {
      num: "001",
      name: "bulbasaur",
      pokemon_rarity: "normal",
      type: ["poison"],
      stats: {
        "base-attack": "118",
        "base-defense": "111",
        "base-stamina": "128",
        "max-cp": "1115",
        "max-hp": "113",
      },
    },
    {
      num: "002",
      name: "ivysaur",
      pokemon_rarity: "normal",
      type: ["poison"],
      stats: {
        "base-attack": "151",
        "base-defense": "143",
        "base-stamina": "155",
        "max-cp": "1699",
        "max-hp": "134",
      },
    },
    {
      num: "003",
      name: "venusaur",
      pokemon_rarity: "normal",
      type: ["poison"],
      stats: {
        "base-attack": "198",
        "base-defense": "189",
        "base-stamina": "190",
        "max-cp": "2720",
        "max-hp": "162",
      },
    },
  ];
  it("should be a function", () => {
    expect(typeof getTotalAndAverange).toBe("function");
  });

  it("should return the base-attack object", () => {
    expect(getTotalAndAverange(searchExample, "base-attack")).toEqual({
      suma: 467,
      porcentagePoint: 155.67,
    });
  });

  it("should return the base-defense object", () => {
    expect(getTotalAndAverange(searchExample, "base-defense")).toEqual({
      suma: 443,
      porcentagePoint: 147.67,
    });
  });

  it("should return the base-stamina object", () => {
    expect(getTotalAndAverange(searchExample, "base-stamina")).toEqual({
      suma: 473,
      porcentagePoint: 157.67,
    });
  });

  it("should return the max-cp object", () => {
    expect(getTotalAndAverange(searchExample, "max-cp")).toEqual({
      suma: 5534,
      porcentagePoint: 1844.67,
    });
  });

  it("should return the max-hp object", () => {
    expect(getTotalAndAverange(searchExample, "max-hp")).toEqual({
      suma: 409,
      porcentagePoint: 136.33,
    });
  });
});
