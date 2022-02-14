//import { example } from './data.js';
import data from './data/ghibli/ghibli.js';

//Variables
//Films
let result;
const containerFilm = document.querySelector('.movies-content');
const films = data.films;
const filtFilmsYear = document.querySelector('#films-year');
const sortFilms = document.querySelector('#films-op');
const filtFilmsDirector = document.querySelector('#films-Director');
const filtFilmsProducer = document.querySelector('#films-Producer');
const button = document.querySelector('#btn');
const yearMax = 2014,
  yearMin = yearMax - 28; //select year
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
    director: '',
    producer: '',
  };
//locations
// const selectFilms = document.querySelector('select-films');
// const locationSearch=[films:'', climate:'', ]

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
sortFilms.addEventListener('change', (e) => {
  let sort = e.target.value;
  sortFilm(sort);
  loadFilm(films);
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
    //noResult(result);
  }
  // console.log(films);
  // loadCharacters(films);
});

//Funciones
function loadFilm(films) {
  cleanHTML(); //elimina el HTML previo
  films.forEach((film) => {
    //console.log(film);
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
    console.log(film.release_date, film.title);
  });
}

// function loadLocation(){

// }

// function loadCharacters(films) {
//   films.forEach((film) => {
//     film.people.forEach((character) => {
//       console.log(character.age);
//     });
//   });
// }

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
  // for (let i = rtMax; i >= rtMin; i--) {
  //   const rt = document.createElement('option');
  //   rt.value = i;
  //   rt.textContent = i;
  //   filtFilmsRaiting.appendChild(rt);
  // }

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
    .filter(filterDirector)
    .filter(filterProducer);

  //.filter(orderByRaiting)
  //loadFilm(result);

  if (result.length) {
    return result;
  } else {
    noResult();
  }
  //console.log(result);
}

function sortFilm(s) {
  let sortedFilms;

  if (s === 'raiting-up') {
    sortedFilms = films.sort((a, b) => b['rt_score'] - a['rt_score']);
  } else if (s === 'raiting-down') {
    sortedFilms = films.sort((a, b) => a['rt_score'] - b['rt_score']);
  } else if (s === 'date-up') {
    sortedFilms = films.sort((a, b) => b['release_date'] - a['release_date']);
  } else if (s === 'date-down') {
    sortedFilms = films.sort((a, b) => a['release_date'] - b['release_date']);
  } else if (s === 'a-z') {
    sortedFilms = films.sort((a, b) => a['title'].localeCompare(b['title']));
  } else if (s === 'z-a') {
    sortedFilms = films.sort((a, b) => b['title'].localeCompare(a['title']));
  }

  loadFilm(sortedFilms);
  //loadFilm(sortedFilms);
  //console.log(s);
  //console.log(sortedFilms);
}

// function orderDown(a, b) {
//   return b - a;
// }

function noResult() {
  cleanHTML();
  const noResult = document.createElement('div');
  noResult.classList.add('alert', 'error');
  noResult.textContent = 'No results, please try other search terms';
  containerFilm.appendChild(noResult);
}

function filterYear(film) {
  //console.log(film);
  if (datosBusqueda.year) {
    return film.release_date === datosBusqueda.year;
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
