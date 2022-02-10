export function filterYear() {
    return 'year'
}

export function filterPoint() {
    return 'point'
}

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





/*export const filterFilmsBySearch = (info, search) => info.filter(film => {
    const descriptionLowercase = film.description.toLowerCase();
    const titleLowercase = film.title.toLowerCase();
    const searchLowercase = search.toLowerCase();

    return (titleLowercase.includes(searchLowercase) || descriptionLowercase.includes(searchLowercase));
});*/



/**
 * Función utilitaria para imprimir el tipo y valor de una variable
 * @param {*} obj variable a usar para imprimer
 */
function log(obj) {
    console.log(typeof obj, obj);
}