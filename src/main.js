import data from './data/ghibli/ghibli.js';
import { GeneratorFilmsHtml, generatorOtherHtml, llenarSelector } from './utils/GeneratorFilmsHtml.js';
import { filterFilmsBySearch, filterCharactersBySearch, filterLocationBySearch, filterVehiclesBySearch, log } from './filter.js';

const inputSearch = document.getElementById("inputSearch");
const categoria = document.querySelector('#filtrocategoria1');
const section = document.querySelector('#informacion');
const ordenarFormulario = document.querySelector('#filtroOrdenar');

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
    ordenarFormulario.innerHTML = llenarSelector(categoriaValue);
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

