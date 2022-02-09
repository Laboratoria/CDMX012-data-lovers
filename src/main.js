import data from './data/ghibli/ghibli.js';
import { filterFilmsBySearch } from './data.js';
import order from './data.js';


// Una vez cargado el archivo HTML se ejecuta la función
document.addEventListener('DOMContentLoaded', () => {
    mostrarPeliculas(data);
})

//Selecciona la seccion donde aparecera el resultado de busqueda
const section = document.querySelector('#informacion');

// Función que se llama al finalizar la carga del HTML, esta función solo llama a filter = peliculas
function mostrarPeliculas(data) {

    order.filterData(data, 'title').forEach(film => {
        // Creación de elementos
        const article = document.createElement("article");
        const div1 = document.createElement('div');
        const div2 = document.createElement('div');
        const img = document.createElement('img');
        const pTitle = document.createElement('p');
        const pYear = document.createElement('p');
        const pScore = document.createElement('p');

        //Añadir contenido
        img.src = film.poster;
        pTitle.textContent = film.title;
        pYear.textContent = film.release_date;
        pScore.textContent = Number(film.rt_score) / 10;

        //Añadir selectores
        div1.classList.add('portada');
        div2.classList.add('info');
        pTitle.classList.add('filmName');
        pYear.classList.add('year');
        pScore.classList.add('score');
        img.classList.add('img-fluid');


        // Append a document
        article.appendChild(div1);
        div1.appendChild(img);
        article.appendChild(div2);
        div2.appendChild(pTitle);
        div2.appendChild(pYear);
        div2.appendChild(pScore);
        section.appendChild(article);
    })
}

function mostrarRestoCategorias(data, filter) {

    let toHTML = '';

    // innerHTML es más rapido que crear elementos como en la función mostrarPeliculas()

    order.filterData(data, filter).forEach(film => {

        const article = `
        <article>
            <div class="portada">
                <img src= ${film.img} >
            </div>
            <div class="info">
                <p class="name"> ${film.name} </p>
                <p class="filmName2"> ${film.title} </p>
            </div>
        </article>
        `;

        toHTML += article;
    })

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
        mostrarRestoCategorias(data, e.target.value);
    } else {
        mostrarPeliculas(data);
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

