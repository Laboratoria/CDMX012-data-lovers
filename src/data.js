
import data from './lol/lol.js';

const all = Object.values(data.data)


export const sortId = all.sort((a, b) => (a.id < b.id ? 1 : -1));

/*export const filterTags = all.filter(function (tags){
  if (tags.tags.includes('Assassin')) {
    return true;
  }
});

console.log (filterTags);*/

export const filterMarksman = all.filter(tags => tags.tags.includes('Marksman'))*/

export const filterRole = (champions, roles) =>{
   const filterChampions = champions.filter(tags => tags.tags.includes(roles));
   console.log(filterChampions)
   //return filterRole
}
