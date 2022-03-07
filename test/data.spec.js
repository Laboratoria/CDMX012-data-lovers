import legends from './mockLol.js' 
import { filterRole } from '../src/data.js';

describe('test del filtro por rol', () => {
  test('Comprobar que es una funcion', () => {
    expect(typeof filterRole).toBe('function');
  }),

  test('Filtrando los campeones', () => {
    console.log (filterRole('Tank', legends));
  })

});



