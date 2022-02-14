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

    const titleLowercase = film.title.toLowerCase();
    const descriptionLowercase = film.description.toLowerCase();
    const searchLowercase = search.toLowerCase();

    return (titleLowercase.includes(searchLowercase) || descriptionLowercase.includes(searchLowercase) || namesInclude(film.people, search));
});

/**
 * Evalua si algun nombre dentro de los objetos de arreglo people, incluyen la cadena search
 * @param {[]} people arreglo de personas
 * @param {string} search texto a buscar en nombres de personas
 * @returns {boolean} true si el nombre de alguna persona incluye search, false en caso contrario
 */
const namesInclude = (people, search) => {
    let filteredPeople = peopleFilter(people, search);
    if (filteredPeople.length > 0) { return true; } else return false;
};
/**
 * Filtra persons cuyo nombre incluya la búsqueda search
 * @param {[]} people 
 * @param {string} search 
 * @returns {[]} personas filtradas
 */
function peopleFilter(people, search) {
    return people.filter(person => {
        const nameLowercase = person.name.toLowerCase();
        const searchLowercase = search.toLowerCase();

        if (nameLowercase.includes(searchLowercase)) { return true; } else
            return false;
    });
}

/**
 * Filtra locations cuyo nombre incluya la búsqueda search
 * @param {[]} locations
 * @param {string} search 
 * @returns {[]} locations filtradas
 */
function locationsFilter(locations, search) {
    return locations.filter(location => {
        const locationNameLowercase = location.name.toLowerCase();
        const searchLowercase = search.toLowerCase();

        if (locationNameLowercase.includes(searchLowercase)) { return true; } else
            return false;
    });
}

/**
 * Filtra persons cuyo nombre incluya la búsqueda search
 * @param {[]} vehicles
 * @param {string} search 
 * @returns {[]} personas filtradas
 */
function vehiclesFilter(vehicles, search) {
    return vehicles.filter(vehicle => {
        const vehicleNameLowercase = vehicle.name.toLowerCase();
        const searchLowercase = search.toLowerCase();

        if (vehicleNameLowercase.includes(searchLowercase)) { return true; } else
            return false;
    });
}


/**
 * Función utilitaria para imprimir el tipo y valor de una variable
 * @param {*} obj variable a usar para imprimer
 */
export function log(obj) {
    const type = typeof obj;
    if (type === 'object') {
        console.table(obj);
    } else {
        console.log(type, obj);
    }
};

/**
 * Filtra y regresa las personas dentro de las películas según el parámetro búsqueda
 * @param {[]} films 
 * @param {string} search 
 * @returns  {[]} personas encontradas
 */
export const filterCharactersBySearch = (films, search) => {
    const personInclude = [];

    films.forEach(function(film) {
        let fimlActors = peopleFilter(film.people, search);

        fimlActors.forEach(function(person) {

            person.title = film.title;

            personInclude.push(person)

            //const obj = { img: person.img, name: person.name, title: film.title };
            //personInclude.push(obj);
        });
    });

    return personInclude;
};

export const filterLocationBySearch = (films, search) => {

    const locationInclud = [];

    films.forEach(function(film) {

        let filmLocation = locationsFilter(film.locations, search);

        filmLocation.forEach(function(location) {
            location.title = film.title;
            locationInclud.push(location)
        });
    });
    return locationInclud;
};
export const filterVehiclesBySearch = (films, search) => {

    const vehicleInclud = [];

    films.forEach(function(film) {

        let filmVehicle = vehiclesFilter(film.vehicles, search);

        filmVehicle.forEach(function(vehicle) {
            vehicle.title = film.title;
            vehicleInclud.push(vehicle)
        });
    });
    return vehicleInclud;
};