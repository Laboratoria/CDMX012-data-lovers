import {filmPosters} from '../src/data.js';

import data from '../src/data/ghibli/ghibli.js';

describe('filmPosters', () => {
  it('Should be a function', () => {
    expect(typeof filmPosters).toBe('function');
  });

  it('returns an array with different elements of movies', () => {
    expect(typeof data.films[0] ).toBe('object');
  });
});


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
