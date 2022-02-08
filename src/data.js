// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

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

function log(value) {
  console.log(typeof value, value,);
}


