// Recomendamos usar src/main.js para todo tu código que tenga que ver con mostrar 
// los datos en la pantalla. Con esto nos referimos básicamente a la interacción con el DOM.
//  Operaciones como creación de nodos, registro de manejadores de eventos (event listeners o event handlers),

import data from './data/ghibli/ghibli.js';
import { filmPosters} from './data.js';

//CREACION DE ELEMENTOS PARA HOMEPAGE(TARJETAS DE PELICULAS)
// Poster y titulos de todas las peliculas.
let allFilms = []; 
for(let i = 0; i < data.films.length; i++){ 
    allFilms.push(filmPosters(data.films[i]));
}

// Imprime tarjetas con los elementos de allMovies (con el poster, titulo y año).
for(let j = 0; j < allFilms.length; j++){
    let divGlobal = document.createElement("div");
    divGlobal.className = "globalCard";
    let divCreation = document.createElement("div");
    divCreation.className = "card";
    let filmPoster = document.createElement("img");
    filmPoster.setAttribute("src", allFilms[j][0]);
    let movieTitle = document.createElement("p");
    movieTitle.innerHTML = "<strong>" + allFilms[j][1] + "</strong>";
    divCreation.appendChild(filmPoster);
    divCreation.appendChild(movieTitle);
    document.getElementById("moviesList").appendChild(divCreation);
    //parte trasera de la tarjeta
    let backCard = document.createElement("div");
    backCard.className = "back-card";
    let backCardInfo = document.createElement('div');
    backCardInfo.className = 'backCardInfo';
    backCard.appendChild(backCardInfo);

    let divSynopsis = document.createElement("div")
    divSynopsis.className = "divSynopsis";
    let pSinopsys = document.createElement("p");
    pSinopsys.className="pSinopsys";
    pSinopsys.innerHTML = "<strong>" + "Sinopsys" + "</strong>";
    divSynopsis.appendChild(pSinopsys);
    backCardInfo.appendChild(divSynopsis);

    let divFilmDescription = document.createElement("div")
    divFilmDescription.className = "divFilmDescription";
    let filmDescription = document.createElement("p");
    filmDescription.className = "filmDescription";
    filmDescription.innerHTML = allFilms[j][2];
    let btnMoreInfo = document.createElement("button");
    btnMoreInfo.className = "btnMoreInfo"
    btnMoreInfo.setAttribute("href", "#");
    btnMoreInfo.innerHTML = "More Info";
    backCardInfo.appendChild(divFilmDescription);
    divFilmDescription.appendChild(filmDescription);
    divFilmDescription.appendChild(btnMoreInfo);
    divGlobal.appendChild(divCreation);
    divGlobal.appendChild(backCard);
    document.getElementById("moviesList").appendChild(divGlobal);
  
}

