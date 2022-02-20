//import { example } from './data.js';
import data from './data/ghibli/ghibli.js';

//Variables
//films
const containerFilm = document.querySelector('.movies-content');
let films = data.films;
const filtFilmsYear = document.querySelector('#films-year');
const sortFilms = document.querySelector('#films-op');
const filtFilmsDirector = document.querySelector('#films-Director');
const filtFilmsProducer = document.querySelector('#films-Producer');
const button = document.querySelector('#btn');
const buttonReset = document.querySelector('#btnReset');
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
const selectedMovie = document.querySelector('#selected-film');
const selectedClimate = document.querySelector('#selected-climate');
const selectedTerrain = document.querySelector('#selected-terrain');
const sortLocations = document.querySelector('#sort-locations');
const buttonLoc = document.querySelector('#btn_loc');
const buttonLocRes = document.querySelector('#btn_loc_reset');
const containerLocation = document.querySelector('.locations-content');

console.log();

const nameFilms = [
    'Castle in the Sky',
    'My Neighbor Totoro',
    "Kiki's Delivery Service",
    'Grave of the Fireflies',
    'Only Yesterday',
    'Porco Rosso',
    'Pom Poko',
    'Whisper of the Heart',
    'Princess Mononoke',
    'My Neighbors the Yamadas',
    'Spirited Away',
    'The Cat Returns',
    "Howl's Moving Castle",
    'Tales from Earthsea',
    'Ponyo on the Cliff by the Sea',
    'The Secret World of Arrietty',
    'From Up on Poppy Hill',
    'The Wind Rises',
    'The Tale of the Princess Kaguya',
    'When Marnie Was There',
  ],
  climates = [
    'TODO',
    'Dry',
    'Continental',
    'Mild',
    'Tropical',
    'Wet',
    'Warm',
    'Damp',
  ],
  terrains = [
    'Marsh',
    'TODO',
    'Hill',
    'City',
    'River',
    'Mountain',
    'Forest',
    'Plain',
    'Ocean',
    'Earthsea',
    'Under the floorboards',
  ],
  datosBusquedaLocations = {
    filmName: '',
    climate: '',
    terrain: '',
  };
//const place
// const selectFilms = document.querySelector('select-films');
// const locationSearch=[films:'', climate:'', ]

//Eventos

/*document.addEventListener('DOMContentLoaded', () => {
  loadFilm(films);
  //llenar Select
  fillSelect();
});*/

//Carga locaciones

if (document.querySelector('.locations-content')) {
  loadLocation(films);
  fillSelectLocations();
}

//Carga peliculas

if (document.querySelector('.movies-content')) {
  loadFilm(films);
  fillSelect();
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
      loadFilm(films);

      //noResult(result);
    }
    // console.log(films);
    loadCharacters(films);
  });

  buttonReset.addEventListener('click', () => {
    filtFilmsYear.querySelector('option').selected = true;
    filtFilmsDirector.querySelector('option').selected = true;
    filtFilmsProducer.querySelector('option').selected = true;
    sortFilms.querySelector('option').selected = true;
    loadFilm(data.films);
  });
}

//EventListeners para los select de busqueda

//Funciones
function loadFilm(films) {
  cleanHTML(containerFilm); //elimina el HTML previo
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

function loadCharacters(films) {
  films.forEach((film) => {
    film.people.forEach((character) => {
      console.log(character.age);
    });
  });
}

//limpiar HTML
function cleanHTML(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

//llenar los select de films
function fillSelect() {
  //agrega de foma dinamica las opciones de año al select
  for (let i = yearMax; i >= yearMin; i--) {
    const opYear = document.createElement('option');
    opYear.value = i;
    opYear.textContent = i;
    filtFilmsYear.appendChild(opYear);
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
  films = data.films
    .filter(filterYear)
    .filter(filterDirector)
    .filter(filterProducer);

  if (films.length) {
    return films;
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
}

function noResult() {
  cleanHTML(containerFilm);
  const noResult = document.createElement('div');
  noResult.classList.add('alert', 'error');
  noResult.textContent = 'No results, please try other search terms';
  containerFilm.appendChild(noResult);
}

function filterYear(film) {
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

// * * * * * L O C A T I O N S * * * * * //
//filtros

sortLocations.addEventListener('change', (e) => {
  let sortL = e.target.value;
  sortLoc(sortL);
  loadLocation(films);
});

buttonLocRes.addEventListener('click', () => {
  loadLocation(data.films);
  selectedMovie.querySelector('option').selected = true;
  selectedClimate.querySelector('option').selected = true;
  selectedTerrain.querySelector('option').selected = true;
});

//LoadLocations

function loadPlaces(location) {
  cleanLocationHTML(containerLocation);
  location.forEach((place) => {
    const divLocation = document.createElement('div');
    divLocation.className = 'location';
    const imgLocation = document.createElement('img');
    imgLocation.src = place.img;
    imgLocation.alt = place.name;
    const divLocInfo = document.createElement('div');
    divLocInfo.className = 'info';
    const locationTitle = document.createElement('p');
    locationTitle.innerText = place.name;
    locationTitle.className = 'locations-title';
    const locationClimate = document.createElement('p');
    locationClimate.innerText = `Climate: ${place.climate}`;
    locationClimate.className = 'info-loc';
    const locationTerrain = document.createElement('p');
    locationTerrain.innerText = `Terrain: ${place.terrain}`;
    locationTerrain.className = 'info-loc';

    divLocInfo.appendChild(locationTitle);
    divLocInfo.appendChild(locationClimate);
    divLocInfo.appendChild(locationTerrain);
    divLocation.appendChild(imgLocation);
    divLocation.appendChild(divLocInfo);
    containerLocation.appendChild(divLocation);
  });
}

function loadLocation(films) {
  cleanLocationHTML(containerLocation);
  films.forEach((film) => {
    film.locations.forEach((location) => {
      const divLocation = document.createElement('div');
      divLocation.className = 'location';
      const imgLocation = document.createElement('img');
      imgLocation.src = location.img;
      imgLocation.alt = location.name;
      const divLocInfo = document.createElement('div');
      divLocInfo.className = 'info';
      const locationTitle = document.createElement('p');
      locationTitle.innerText = location.name;
      locationTitle.className = 'locations-title';
      const movieTitle = document.createElement('p');
      movieTitle.innerText = film.title;
      movieTitle.className = 'movie-title';
      const locationClimate = document.createElement('p');
      locationClimate.innerText = `Climate: ${location.climate}`;
      locationClimate.className = 'info-loc';
      const locationTerrain = document.createElement('p');
      locationTerrain.innerText = `Terrain: ${location.terrain}`;
      locationTerrain.className = 'info-loc';

      divLocInfo.appendChild(locationTitle);
      divLocInfo.appendChild(movieTitle);
      divLocInfo.appendChild(locationClimate);
      divLocInfo.appendChild(locationTerrain);
      divLocation.appendChild(imgLocation);
      divLocation.appendChild(divLocInfo);
      containerLocation.appendChild(divLocation);
    });
  });
}

function cleanLocationHTML(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function fillSelectLocations() {
  //agrega de foma dinamica las opciones de movies
  nameFilms.forEach((option) => {
    const mov = document.createElement('option');
    mov.value = option;
    mov.textContent = option;
    selectedMovie.appendChild(mov);
  });

  climates.forEach((climate) => {
    const clima = document.createElement('option');
    clima.value = climate;
    clima.textContent = climate;
    selectedClimate.appendChild(clima);
  });

  terrains.forEach((terrain) => {
    const terr = document.createElement('option');
    terr.value = terrain;
    terr.textContent = terrain;
    selectedTerrain.appendChild(terr);
  });
}

let locations = [];

// Pelicula
selectedMovie.addEventListener('change', (e) => {
  selectedClimate.querySelector('option').selected = true;
  selectedTerrain.querySelector('option').selected = true;

  datosBusquedaLocations.climate = '';
  datosBusquedaLocations.terrain = '';

  datosBusquedaLocations.filmName = e.target.value;
  films = data.films.filter(filterMovie);
  console.log(films);
});

// Clima
selectedClimate.addEventListener('change', (e) => {
  datosBusquedaLocations.climate = e.target.value;

  films.forEach((film) => {
    film.locations.forEach((location) => {
      if (location.climate === datosBusquedaLocations.climate) {
        locations.push(location);
      }
    });
  });
});

// Terreno
selectedTerrain.addEventListener('change', (e) => {
  datosBusquedaLocations.terrain = e.target.value;

  films.forEach((film) => {
    film.locations.forEach((location) => {
      if (location.terrain === datosBusquedaLocations.terrain) {
        locations.push(location);
      }
    });
  });
});

buttonLoc.addEventListener('click', () => {
  if (datosBusquedaLocations) {
    if (
      datosBusquedaLocations.filmName &&
      datosBusquedaLocations.climate === '' &&
      datosBusquedaLocations.terrain === ''
    ) {
      console.log(films);
      loadLocation(films);
    } else {
      // Load locations only
      console.log(locations);
      loadPlaces(locations);
    }
  }
});

function filterMovie(film) {
  if (datosBusquedaLocations.filmName) {
    return film.title === datosBusquedaLocations.filmName;
  }
  return film;
}

function sortLoc(sort) {
  // let sortedLocations;
  // if (sort === 'a-z') {
  //   console.log(films);
  //   sortedLocations = films.map((film) => {
  //     film.locations.sort((a, b) => a['name'].localeCompare(b['name']));
  //   });
  //   sortedLocations = films.sort((a,b) => {
  //     a.locations.forEach(location => )
  //   })
  //   console.log(sortedLocations);
  // } else if (sort === 'z-a') {
  //   sortedLocations = films.sort((a, b) => b['name'].localeCompare(a['name']));
  // }
  // loadLocation(sortedLocations);
}

function noResultLoc() {
  cleanLocationHTML(containerLocation);
  const noResultLoc = document.createElement('div');
  noResultLoc.classList.add('alert', 'error');
  noResultLoc.textContent = 'No results, please try other search terms';
  containerLocation.appendChild(noResultLoc);
}
