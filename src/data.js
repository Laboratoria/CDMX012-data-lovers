//Funcion para filtrar por rol
export const filterRole = (champions, roles) =>{
   const filterChampions = champions.filter(tags => tags.tags.includes(roles));
   return filterChampions

};

//Función para ordenar usando sort
export const orderAlpha = (champions => {
   return champions.sort((a,b) => { 
      if (a.name > b.name) return -1;
      else if (a.name < b.name) return -1;
       }); 
   });


//Saca la dificultad de todos los campeones 
export const filterDifficulty= (champions, difficulty) => {
      
      console.log(difficulty)

      let emptyLow = [];
      let emptyMed = [];
      let emptyHig = [];
      champions.forEach (info => {
         const getDifficulty = info.info.difficulty;
         if (getDifficulty <= 4) {
            emptyLow.push(info);
            //console.log (emptyLow)
         }
         else if (getDifficulty > 4  && getDifficulty < 8) {
            emptyMed.push(info);
            //console.log (emptyMed)
         }
         else if (getDifficulty >= 8 && getDifficulty <= 10){
            emptyHig.push(info);
            //console.log (emptyHig)
         }
            
         });
         return emptyLow
   }
   
      

      // es un número, quizá por eso no salen las tarjetas?
      // si sale un número entonces...
      // 
   

