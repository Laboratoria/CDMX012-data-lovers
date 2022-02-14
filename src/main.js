import data from './data/ghibli/ghibli.js';
import order from './data.js';
import GeneratorFilmsHtml from './utils/GeneratorFilmsHtml.js';
import { filterFilmsBySearch } from './data.js';

import { filterYear, filterPoint } from './filter.js'


// Una vez cargado el archivo HTML se ejecuta la función
document.addEventListener('DOMContentLoaded', () => {
    mostrarCategoria(data, 'title');

    llenarSelector('title');

    //let dataBase = mostrarCategoria(data, 'title');

    //order.orderData(dataBase, 'recent');
})

//Selecciona la seccion donde aparecera el resultado de busqueda
const section = document.querySelector('#informacion');

// Función que se llama al finalizar la carga del HTML, esta función solo llama a filter = peliculas
function mostrarCategoria(data, filtro) {

    let toHTML = '';

    if (filtro === 'title') {

        order.filterData(data, filtro).forEach(film => {

            toHTML += GeneratorFilmsHtml(film);
        })
    } else {

        order.filterData(data, filtro).forEach(film => {

            const article = `
            <article>
                <div class="portada">
                <img class="img-fluid" src="${film.img}">
                </div>
                <div class="info">
                    <p class="name">${film.name}</p>
                    <p class="filmName2">${film.title}</p>
                </div>
            </article>
            `;

            toHTML += article;
        })

    }

    section.innerHTML = toHTML;
}

// Selecciona el formulario donde apareceran las opciones de ordenar por...
const ordenarFormulario = document.querySelector('#filtroOrdenar');

// Función para llenar selector para ordenar

function llenarSelector(filtro){
    
    if(filtro === 'title'){
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

    }else{
        const opciones = `
            <option value="" selected disabled hidden>Sort by</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
        `;

        ordenarFormulario.innerHTML = opciones;

    }
}

//Selección del formulario para filtrar por categoria de información a mostrar
const filtro = document.querySelector('#filtrocategoria1');

//Agregar Evento a formulario filtro

filtro.addEventListener('change', e => {

    if (e.target.value === 'people' || e.target.value === 'locations' || e.target.value === 'vehicles') {
        console.log(order.filterData(data, e.target.value))
        mostrarCategoria(data, e.target.value);
    } else {
        mostrarCategoria(data, e.target.value);
        llenarSelector(e.target.value);
    }
})


//limpiar HTML
function limpiarHTML() {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
}
/*const inputSearch = document.getElementById("inputSearch");
inputSearch.addEventListener("change", function() {
    let searchValue = inputSearch.value;
    const busquedaPeli = filterFilmsBySearch(data.info, searchValue);
});*/



const inputSearch = document.getElementById("inputSearch");
inputSearch.addEventListener("change", function() {

    let searchValue = inputSearch.value;
    let toHTML = '';

    filterFilmsBySearch(data.films, searchValue).forEach((film) => {
        toHTML += GeneratorFilmsHtml(film)
    });
    section.innerHTML = toHTML;
});