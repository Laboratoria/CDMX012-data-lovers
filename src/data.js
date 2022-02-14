const order = {

  filterData: (data, filter) => {

    let info = [];

    if (filter === 'title') {
      data.films.forEach((item) => {
        const infoFilter = {};
        infoFilter.poster = item.poster;
        infoFilter.title = item.title;
        infoFilter.release_date = item.release_date;
        infoFilter.rt_score = item.rt_score;
        info.push(infoFilter);
      });
    } else if (filter === 'people' || filter === 'vehicles' || filter === 'locations') {
      data.films.forEach((item) => {
        for (let j = 0; j < item[filter].length; j++) {
          const infoFilter = {};
          infoFilter.img = item[filter][j].img;
          infoFilter.name = item[filter][j].name;
          infoFilter.title = item.title;
          info.push(infoFilter);
        }
      });
    }
    return info;
  },
  
/**
 * Filtra una lista de películas según un texto recibido.
 * @param {[]} films arreglo de peliculas a filtrar
 * @param {string} search texto a buscar en en arreglo de películas
 * @returns {[]} peliculas que contengan search en titulo o la descripción
 */
export const filterFilmsBySearch = (films, search) => films.filter(film => {
  const descriptionLowercase = film.description.toLowerCase();
  const titleLowercase = film.title.toLowerCase();
  const searchLowercase = search.toLowerCase();

  return (titleLowercase.includes(searchLowercase) || descriptionLowercase.includes(searchLowercase));
});

/**
 * Función utilitaria para imprimir el tipo y valor de una variable
 * @param {*} obj variable a usar para imprimer
 */
function log(obj) {
  console.log(typeof obj, obj);
}


export default order;
