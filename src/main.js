//import { example } from './data.js';
import data from './data/ghibli/ghibli.js';

//Variables
let result;
const containerFilm = document.querySelector('.movies-content');
const films = data.films;
const filtFilmsYear = document.querySelector('#films-year');
const filtFilmsRaiting = document.querySelector('#films-rt');
const filtFilmsDirector = document.querySelector('#films-Director');
const filtFilmsProducer = document.querySelector('#films-Producer');
const button = document.querySelector('#btn');
const yearMax = 2014,
  yearMin = yearMax - 28; //select year
const rtMax = 100,
  rtMin = rtMax - 59;
const directors = [
    'Hayao Miyazaki',
    'Isao Takahata',
    'Yoshifumi Kondō',
    'Hiroyuki Morita',
    'Gorō Miyazaki',
    'Hiromasa Yonebayashi',
  ],
  producers = [
    'Isao Takahata',
    'Hayao Miyazaki',
    'Toru Hara',
    'Toshio Suzuki',
    'Yoshiaki Nishimura',
  ],
  datosBusqueda = {
    year: '',
    raiting: '',
    director: '',
    producer: '',
  };
//Eventos

/*document.addEventListener('DOMContentLoaded', () => {
  loadFilm(films);
  //llenar Select
  fillSelect();
});*/
loadFilm(films);
fillSelect();

//EventListeners para los select de busqueda
filtFilmsYear.addEventListener('change', (e) => {
  datosBusqueda.year = e.target.value;
  filterFilm();
});
filtFilmsRaiting.addEventListener('change', (e) => {
  datosBusqueda.raiting = e.target.value;
  filterFilm();
});
filtFilmsDirector.addEventListener('change', (e) => {
  datosBusqueda.director = e.target.value;
  filterFilm();
});
filtFilmsProducer.addEventListener('change', (e) => {
  datosBusqueda.producer = e.target.value;
  filterFilm();
});

button.addEventListener('click', () => {
  if (datosBusqueda) {
    loadFilm(result);
  }
});

//Funciones
function loadFilm(films) {
  cleanHTML(); //elimina el HTML previo

  films.forEach((film) => {
    console.log(film);
    const divMovie = document.createElement('div');
    divMovie.className = 'movie';
    const imgMovie = document.createElement('img');
    imgMovie.src = film.poster;
    imgMovie.alt = film.title;
    const divTitle = document.createElement('div');
    divTitle.className = 'title';
    const pTitle = document.createElement('p');
    pTitle.innerText = film.title;

    divTitle.appendChild(pTitle);
    divMovie.appendChild(imgMovie);
    divMovie.appendChild(divTitle);
    containerFilm.appendChild(divMovie);

    //console.log(film.rt_score);
  });
}

//limpiar HTML
function cleanHTML() {
  while (containerFilm.firstChild) {
    containerFilm.removeChild(containerFilm.firstChild);
  }
}

//llenar los select
function fillSelect() {
  //agrega de foma dinamica las opciones de año al select
  for (let i = yearMax; i >= yearMin; i--) {
    const opYear = document.createElement('option');
    opYear.value = i;
    opYear.textContent = i;
    filtFilmsYear.appendChild(opYear);
  }

  //agrega de foma dinamica las opciones de raiting al select
  for (let i = rtMax; i >= rtMin; i--) {
    const rt = document.createElement('option');
    rt.value = i;
    rt.textContent = i;
    filtFilmsRaiting.appendChild(rt);
  }

  //agrega de foma dinamica las opciones de director al select
  directors.forEach((director) => {
    const dir = document.createElement('option');
    dir.value = director;
    dir.textContent = director;
    filtFilmsDirector.appendChild(dir);
  });

  producers.forEach((producer) => {
    const prod = document.createElement('option');
    prod.value = producer;
    prod.textContent = producer;
    filtFilmsProducer.appendChild(prod);
  });
}

function filterFilm() {
  result = data.films
    .filter(filterYear)
    .filter(filterRaiting)
    .filter(filterDirector)
    .filter(filterProducer);

  console.log(result);
}

function filterYear(film) {
  //console.log(film);
  if (datosBusqueda.year) {
    return film.release_date === datosBusqueda.year;
  }
  return film;
}

function filterRaiting(film) {
  if (datosBusqueda.raiting) {
    return film.rt_score === datosBusqueda.raiting;
  }
  return film;
}

function filterDirector(film) {
  if (datosBusqueda.director) {
    return film.director === datosBusqueda.director;
  }
  return film;
}

function filterProducer(film) {
  if (datosBusqueda.producer) {
    return film.producer === datosBusqueda.producer;
  }
  return film;
}
