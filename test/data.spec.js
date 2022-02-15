import { orderA_Z, orderZ_A, orderAscendente, orderDescendente, filterDataByType} from '../src/data.js';

describe('funciones de ordenamiento', () => {
  it('ordena de la A a la Z', () => {
    const dataExample = [
      {
        name:"picachu",
      },
      {
        name:"raichu",
      },
      {
        name:"nidorina",
      },
    ];

    expect(orderA_Z(dataExample)).toBeDefined();
  });

  it('ordena de la Z a la A', () => {
    const dataExample = [
      {
        name:"venusaur",
      },
      {
        name:"wartortle",
      },
      {
        name:"caterpie",
      },
    ];

    expect(orderZ_A(dataExample)).toBeDefined();
  });

  it('ordena de menor a mayor', () => {
    const dataExample = [
      {
        num:"035",
      },
      {
        num:"150",
      },
      {
        num:"002",
      },
    ];

    expect(orderAscendente(dataExample)).toBeDefined();
  });

  it('ordena de mayor a menor', () => {
    const dataExample = [
      {
        num:"055",
      },
      {
        num:"251",
      },
      {
        num:"080",
      },
    ];

    expect(orderDescendente(dataExample)).toBeDefined();
  });
});



describe('funciones de filtrado', () => {
  it('filtrado por tipo de pokemon', () => {
    const dataExample = [
      {
        name:'pikachu',
      },
      {
        name:'bulbasaur',
      },
      {
        name:'furret',
      },
    ]
    const types = [
      {
        type: 'electric',
      },
      {
        type: 'poison',
      },
      {
        type: 'normal',
      },
    ]

    expect(filterDataByType(dataExample, types)).toBe(types);
  });
  it('filtrado por tipo de pokemon', () => {

    expect(filterDataByType('pikachu','electric' )).toBe('electric');
  });
});