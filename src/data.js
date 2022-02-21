/*estas funciones son de ejemplo
export const example = () => {
  return 'example';
};
export const anotherExample = () => {
  return 'OMG';
};*/

import data from './lol/lol.js';

const all = Object.values(data.data)

//console.table (all);
//let reverseId = all.reverse();
//console.table (reverseId);

/*export const sortId = all.sort(function(a, b) {
  if (a.id > b.id) return -1;
  else if (a.id < b.id) return 1;
  else return 0;
});*/

export const sortId = all.sort((a, b) => (a.id < b.id ? 1 : -1));

/*export const filterTags = all.filter(function (tags){
  if (tags.tags.includes('Assassin')) {
    return true;
  }
});

console.log (filterTags);*/

export const filterMage = all.filter(tags => tags.tags.includes('Mage'));
export const filterAssassin = all.filter(tags => tags.tags.includes('Assassin'));
export const filterFighter = all.filter(tags => tags.tags.includes('Fighter'));
export const filterTank = all.filter(tags => tags.tags.includes('Tank'));
export const filterSupport = all.filter(tags => tags.tags.includes('Support'));
export const filterMarksman = all.filter(tags => tags.tags.includes('Marksman'))


//console.log (filterTank);



