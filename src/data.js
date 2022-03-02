//Funcion para filtrar por rol
export const filterRole = (champions, roles) =>{
   const filterChampions = champions.filter(tags => tags.tags.includes(roles));
   return filterChampions

};


//Saca la dificultad de todos los campeones
export const filterDifficulty = (champions) =>{
   for (const info of champions) {
      const getDifficulty = info.info.difficulty
      console.log (getDifficulty)
      /*if (getDifficulty > 4) {
         return filterDifficulty
      }*/
      } 
   }

   //sacar la dificultad baja


