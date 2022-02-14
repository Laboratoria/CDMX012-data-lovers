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
    llenarSelector('title');
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
    let toHTML = '';

    if (categoriaValue === 'title') {
        filterFilmsBySearch(data.films, searchValue).forEach((film) => {
            toHTML += GeneratorFilmsHtml(film)
        });
    } else if (categoriaValue === 'people') {
        filterCharactersBySearch(data.films, searchValue).forEach((person) => {
            toHTML += generatorOtherHtml(person)
        });
    } else if (categoriaValue === 'locations') {
        filterLocationBySearch(data.films, searchValue).forEach((location) => {
            toHTML += generatorOtherHtml(location)
        });
    } else if (categoriaValue === 'vehicles') {
        filterVehiclesBySearch(data.films, searchValue).forEach((vehicle) => {
            toHTML += generatorOtherHtml(vehicle)
        });
    }

    section.innerHTML = toHTML;
}

// Selecciona el formulario donde apareceran las opciones de ordenar por...
const ordenarFormulario = document.querySelector('#filtroOrdenar');

// Función para llenar selector para ordenar

function llenarSelector(filtro) {

    if (filtro === 'title') {
        const opciones = `
            <option value="" selected disabled hidden>Sort by</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
            <option value="recent">Recent</option>
            <option value="old">Old</option>
            <option value="highScore">High-score</option>
            <option value="lowScore">Low-score</option>
        `;

        ordenarFormulario.innerHTML = opciones;

    } else {
        const opciones = `
            <option value="" selected disabled hidden>Sort by</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
        `;

        ordenarFormulario.innerHTML = opciones;

    }
}