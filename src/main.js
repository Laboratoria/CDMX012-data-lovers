//import { example } from './data.js';
import data from './data/ghibli/ghibli.js';

function loadFilm() {
  let containerFilm = document.querySelector('.movies-content');
  data.films.forEach((film) => {
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
  });
}

loadFilm();
