//Import data and functions 
import data from './data/ghibli/ghibli.js';

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const page_type = urlParams.get('id')



const found = data.films.find(element => element.id === page_type);

let poster = found.poster
let movieTitle = found.title

let imgPoster = document.getElementById("moviePoster")
imgPoster.src = poster;

let movieTitleH = document.getElementById("movieTitle");
movieTitleH.src = movieTitle;