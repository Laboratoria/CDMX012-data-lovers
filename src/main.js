import data from './data/ghibli/ghibli.js';
import order from './data.js';
import GeneratorFilmsHtml from './utils/GeneratorFilmsHtml.js';
import { generatorOtherHtml } from './utils/GeneratorFilmsHtml.js';

import { filterFilmsBySearch, filterCharactersBySearch, filterLocationBySearch, filterVehiclesBySearch, log } from './filter.js'

const inputSearch = document.getElementById("inputSearch");
const categoria = document.querySelector('#filtrocategoria1');
const section = document.querySelector('#informacion');

// Una vez cargado el archivo HTML se ejecuta la función
document.addEventListener('DOMContentLoaded', () => {
    realizarBusqueda();
});

inputSearch.addEventListener("change", function() {
    realizarBusqueda();
});

categoria.addEventListener("change", () => {
    realizarBusqueda();
});


const realizarBusqueda = () => {
    const categoriaValue = categoria.value;
    const searchValue = inputSearch.value;
    //console.log(categoriaValue, searchValue);

    if (categoriaValue === 'title') {

        let toHTML = '';
        filterFilmsBySearch(data.films, searchValue).forEach((film) => {
            toHTML += GeneratorFilmsHtml(film)
        });
        section.innerHTML = toHTML;
    } else if (categoriaValue === 'people') {

        let toHTML = '';

        filterCharactersBySearch(data.films, searchValue).forEach((person) => {
            toHTML += generatorOtherHtml(person)
        });
        section.innerHTML = toHTML;
    } else if (categoriaValue === 'locations') {

        let toHTML = '';

        filterLocationBySearch(data.films, searchValue).forEach((location) => {
            toHTML += generatorOtherHtml(location)
        });
        section.innerHTML = toHTML;
    } else if (categoriaValue === 'vehicles') {

        let toHTML = '';

        filterVehiclesBySearch(data.films, searchValue).forEach((vehicle) => {
            toHTML += generatorOtherHtml(vehicle)
        });
        section.innerHTML = toHTML;
    }
}



// //Selecciona la seccion donde aparecera el resultado de busqueda
// const section = document.querySelector('#informacion');

// // Función que se llama al finalizar la carga del HTML, esta función solo llama a filter = peliculas
// function mostrarCategoria(data, filtro) {

//     let toHTML = '';

//     if (filtro === 'title') {

//         order.filterData(data, filtro).forEach(film => {

//             toHTML += GeneratorFilmsHtml(film);
//         })
//     } else {

//         order.filterData(data, filtro).forEach(other => {

//             toHTML += generatorOtherHtml(other);
//         })
//     }

//     section.innerHTML = toHTML;
// }

// // Guardar valores de los formularios
// const datosBusqueda = {
//     filtrado: '',
//     ordenado: ''
// }

// //Selección del formulario para filtrar por categoria de información a mostrar
// const filtro = document.querySelector('#filtrocategoria1');

// //Agregar Evento a formulario filtro

// filtro.addEventListener('change', e => {
//     datosBusqueda.filtrado = e.target.value;

//     //Elimina HTML previo
//     limpiarHTML();

//     if (e.target.value === 'people' || e.target.value === 'locations' || e.target.value === 'vehicles') {
//         console.log(order.filterData(data, e.target.value))
//         mostrarCategoria(data, e.target.value);
//     } else {
//         mostrarCategoria(data, e.target.value);
//     }
// })

//limpiar HTML
function limpiarHTML() {
    section.innerHTML = '';
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
}