import { orderA_Z} from '../src/data.js';


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

});



