export function filmsOnScreen(films){
///función para mostrar datos en cards///
  return `<div class="cardFilms">
  <p><img src="${films.poster}" class="posterFilm"</p>
  <h2>${films.title}</h2>
  <h3>${films.release_date}</h3>
  </div>`;
}

///función para ordenar cards A-Z y Z-A///
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
       return 0;
     }
    });
}

///función para ordenar cards cronológicamente///
export function sortYears(option, dataFilms){
  return dataFilms.sort(function (a, b) {
     if (option=='newest'){
        if (a.release_date < b.release_date) {
          return 1;
        }
        if (a.release_date > b.release_date) {
          return -1;
        }
        return 0;
     }else if(option=='oldest'){
       if (a.release_date < b.release_date) {
         return -1;
       }
       if(a.release_date > b.release_date){
         return 1;
       }
       return 0;
     }
    });
}
