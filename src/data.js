/*export const sortAz = all.sort((a, b) => (a.id > b.id ? -1 : 1));
export const sortZa = all.sort((a, b) => (a.id < b.id ? 1 : -1));
export const filterMage = all.filter(tags => tags.tags.includes('Mage'));
export const filterAssassin = all.filter(tags => tags.tags.includes('Assassin'));
export const filterFighter = all.filter(tags => tags.tags.includes('Fighter'));
export const filterTank = all.filter(tags => tags.tags.includes('Tank'));
export const filterSupport = all.filter(tags => tags.tags.includes('Support'));
export const filterMarksman = all.filter(tags => tags.tags.includes('Marksman'))*/

export const filterRole = (champions, roles) =>{
   const filterChampions = champions.filter(tags => tags.tags.includes(roles));
   console.log(filterChampions)
   //return filterRole
}

