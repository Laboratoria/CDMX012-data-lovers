//Funcion para filtrar por rol
export const filterRole = (champions, roles) =>{
   const filterChampions = champions.filter(tags => tags.tags.includes(roles));
   return filterChampions

};

//Función para ordenar
export const orderAlpha = (champions) => {
   const championsOrder = champions.reverse() 
   return championsOrder
}  

/*//Saca la dificultad de todos los campeones
export const filterDifficulty = (champions) =>{
   for (let info of champions) {
      const getDifficulty = info.info.difficulty
      return getDifficulty
      /*if (getDifficulty > 4) {
         return filterDifficulty
      }
      } 
   }

   //sacar la dificultad baja*/



