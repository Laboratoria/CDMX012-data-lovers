//Funcion para filtrar por rol
export const filterRole = (champions, roles) =>{
   const filterChampions = champions.filter(tags => tags.tags.includes(roles));
   return filterChampions

};

//Funcion para ordenar alfabeticamente
export const sortAtoZ = (champions) =>{
   champions.sort()
}


/*export const sortZa = all.sort((a, b) => (a.id < b.id ? 1 : -1));
export const sortId = all.sort((a, b) => (a.id < b.id ? 1 : -1));*/

