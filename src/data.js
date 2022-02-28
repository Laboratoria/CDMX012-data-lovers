import data from './lol/lol.js';

const all = Object.values(data.data)


export const sortId = all.sort((a, b) => (a.id < b.id ? 1 : -1));


export const filterMarksman = all.filter(tags => tags.tags.includes('Marksman'))

//filtrado puro de los roles
export const filterRole = (champions, roles) =>{
   const filterChampions = champions.filter(tags => tags.tags.includes(roles));
   return filterChampions
   //console.log (filterChampions)
   //return filterRole
}


