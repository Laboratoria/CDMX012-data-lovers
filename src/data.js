/////mostrar cards en pantalla////
export function filmsOnScreen(films){

  return `<div class="cardFilms">
  <p><img src="${films.poster}"</p>
  <h2>${films.title}</h2>
  <h3>${films.release_date}</h3>
  </div>`;
}

////ordenado de cards A-Z Y Z-A////
export function sortAZ(option, dataFilms){
  return dataFilms.sort(function (a, b) {
     if (option=='az'){
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        return 0;
     }else if(option=='za'){
       if (a.title > b.title) {
         return -1;
       }
       if(a.title < b.title){
         return 1;
       }
       return 1;
     }
    });
}
