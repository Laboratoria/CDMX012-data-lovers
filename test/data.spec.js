import { orderAZ, orderZA, orderAscendente, orderDescendente, filterDataByType, filterDataByName, filterDataById} from '../src/data.js';

describe('funciones de ordenamiento', () => {
  it('ordena de la A a la Z', () => {
    const dataExample = [{"name": "charmeleon"}, {"name": "squirtle"},{"name": "bulbasaur"}];
    const dataResponse = [{"name": "bulbasaur"}, {"name": "charmeleon"}, {"name": "squirtle"}];

    expect(orderAZ(dataExample)).toStrictEqual(dataResponse);
  });

  it('ordena de la Z a la A', () => {
    const dataExample = [{"name":"venusaur"}, {"name":"wartortle"}, {"name":"caterpie"}];
    const dataResponse = [{"name": "wartortle"}, {"name": "venusaur"}, {"name": "caterpie"}];

    expect(orderZA(dataExample)).toStrictEqual(dataResponse);

  });

  it('ordena de menor a mayor', () => {
    const dataExample = [{"num":"035"},{"num":"150"},{"num":"002"}];
    const dataResponse= [{"num":"002"},{"num":"035"},{"num":"150"}];

    expect(orderAscendente(dataExample)).toStrictEqual(dataResponse);
  });

  it('ordena de mayor a menor', () => {
    const dataExample = [{"num":"085"},{"num":"159"},{"num":"022"}];
    const dataResponse= [{"num":"159"},{"num":"085"},{"num":"022"}];

    expect(orderDescendente(dataExample)).toStrictEqual(dataResponse);
});
});

describe('funciones de filtrado', () => {
  it('filtrado por tipo de pokemon', () => {
    const dataExample = [
      {"name":'pikachu',"type":["electric"]},
      {"name":'bulbasaur',"type":["grass", "poison"]},
      {"name":'furret',"type":["normal"]}];
    const dataResponse =[{"name": "pikachu","type":["electric"]}];

    expect(filterDataByType(dataExample, "electric")).toStrictEqual(dataResponse);
  });

  it('filtrado por nombre de pokemon', () => {
    const dataExample = [{"name":'kharmander'},{"name":'Charmander'},{"name":'charmander'}];
    const dataResponse =[{"name": "charmander"}];

    expect(filterDataByName(dataExample, "charmander")).toStrictEqual(dataResponse);
  });

  it('filtrado id de pokemon', () => {
    const dataExample = [{"num":'039'},{"num":'39'},{"num":'390'}];
    const dataResponse =[{"num": "039"}];

    expect(filterDataById(dataExample, "039")).toStrictEqual(dataResponse);
  });
});