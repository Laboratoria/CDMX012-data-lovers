import data from './data/ghibli/ghibli.js';
import { filterFilmsBySearch } from './data.js';
import order from './data.js';


// Una vez cargado el archivo HTML se ejecuta la función
document.addEventListener('DOMContentLoaded', () => {
    mostrarCategoria(data, 'title');
})

//Selecciona la seccion donde aparecera el resultado de busqueda
const section = document.querySelector('#informacion');

// Función que se llama al finalizar la carga del HTML, esta función solo llama a filter = peliculas
function mostrarCategoria(data, filtro) {

    let toHTML = '';

    if (filtro === 'title') {

        order.filterData(data, filtro).forEach(film => {

            const article = `
            <article>
                <div class="portada">
                    <img class="img-fluid" src="${film.poster}">
                </div>
                <div class="info">
                    <p class="filmName1">${film.title}</p>
                    <p class="year">${film.release_date}</p>
                    <p class="score">
                        <svg xmlns="http://www.w3.org/2000/svg" class="star-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        ${Number(film.rt_score) / 10}
                    </p>
                </div>
            </article>
            `;

            toHTML += article;
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

// Guardar valores de los formularios
const datosBusqueda = {
    filtrado: '',
    ordenado: ''
}

//Selección del formulario para filtrar por categoria de información a mostrar
const filtro = document.querySelector('#filtrocategoria1');

//Agregar Evento a formulario filtro

filtro.addEventListener('change', e => {
    datosBusqueda.filtrado = e.target.value;

    //Elimina HTML previo
    limpiarHTML();

    if (e.target.value === 'people' || e.target.value === 'locations' || e.target.value === 'vehicles') {
        console.log(order.filterData(data, e.target.value))
        mostrarCategoria(data, e.target.value);
    } else {
        mostrarCategoria(data, e.target.value);
    }
})

//limpiar HTML
function limpiarHTML() {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
}

const inputSearch = document.getElementById("inputSearch");
inputSearch.addEventListener("change", function() {
    let searchValue = inputSearch.value;
    console.log("change", inputSearch.value);
    const busquedaPeli = filterFilmsBySearch(data.films, searchValue);
    console.log("busqueda", busquedaPeli);
});