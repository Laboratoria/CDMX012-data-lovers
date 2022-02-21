import data from './lol/lol.js';

const all = Object.values(data.data)


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

