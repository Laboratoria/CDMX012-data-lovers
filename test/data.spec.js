import {filmPosters, cutDescription} from '../src/data.js';
import data from '../src/data/ghibli/ghibli.js';

describe('filmPosters', () => {
  it('Should be a function', () => {
    expect(typeof filmPosters).toBe('function');
  });

  it('returns an array with different elements of movies', () => {
    expect(typeof data.films[0] ).toBe('object');
  });

  it('returns year of a selected movie', () => {
    expect( (filmPosters(data.films[0]))[3]).toBe('1986');
  });

});


describe('cutDescription', () => {
  it('Should be a function', () => {
    expect(typeof cutDescription).toBe('function');
  });

  it('Returns a cut string with a length of 400', () => {
    expect(cutDescription("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu p")).toBe("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a...");
  });
});
