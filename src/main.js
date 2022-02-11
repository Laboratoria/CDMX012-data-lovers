

import data from './data/ghibli/ghibli.js';
import {filmPosters, cutDescription, year, yearSorting, scrollTopBtn} from './data.js';
//CREACION DE ELEMENTOS PARA HOMEPAGE(TARJETAS DE PELICULAS)
// Poster y titulos de todas las peliculas.
let allFilms = []; 
for(let i = 0; i < data.films.length; i++){ 
    allFilms.push(filmPosters(data.films[i]));
}
// Imprime tarjetas con los elementos de allFilms (con el poster, titulo y año).
for(let j = 0; j < allFilms.length; j++){
    let divGlobal = document.createElement("div");
    divGlobal.className = "globalCard";
    let divCreation = document.createElement("div");
    divCreation.className = "card";
    let filmPoster = document.createElement("img");
    filmPoster.setAttribute("src", allFilms[j][0]);
    let movieYr = document.createElement("p");
    movieYr.className = "movieYr";
    movieYr.innerHTML = ("<strong>" + allFilms[j][3] + "</strong>");
    let movieTitle = document.createElement("p");
    movieTitle.innerHTML = "<strong>" + allFilms[j][1] + "</strong>";
    let movieRtng = document.createElement("p");
    movieRtng.className = "movieRtng";
    movieRtng.innerHTML = "<strong>" +" Rtng: " + allFilms[j][4] + "</strong>";
    divCreation.appendChild(filmPoster);
    divCreation.appendChild(movieYr);
    divCreation.appendChild(movieTitle);
    divCreation.appendChild(movieRtng);
    document.getElementById("moviesList").appendChild(divCreation);
    
    //parte trasera de la tarjeta
    let backCard = document.createElement("div");
    backCard.className = "back-card";
    let pSinopsys = document.createElement("p");
    pSinopsys.className="pSinopsys";
    pSinopsys.innerHTML = "<strong>" + "Sinopsys" + "</strong>";
    backCard.appendChild(pSinopsys);
    
    let filmDescription = document.createElement("p");
    filmDescription.className = "filmDescription";
    filmDescription.innerHTML = cutDescription(allFilms[j][2]);
    let btnMoreInfo = document.createElement("button");
    btnMoreInfo.className = "btnMoreInfo"
    btnMoreInfo.innerHTML = "More Info";
    backCard.appendChild(filmDescription);
    backCard.appendChild(btnMoreInfo);
    divGlobal.appendChild(divCreation);
    divGlobal.appendChild(backCard);
   
    document.getElementById("moviesList").appendChild(divGlobal);

};
let allYears = []; 
for(let i = 0; i < data.films.length; i++){ 
    allYears.push(year(data.films[i]));
}
for(let j = 0; j < allYears.length; j++){
    let divYear = document.createElement("div");
    divYear.className = "divYear";
    let showingYear = document.createElement("p");
    showingYear.innerHTML = (allYears[j][0]);
    divYear.appendChild(showingYear);
    document.getElementById("years").appendChild(divYear);
    allYears.sort(yearSorting);
};
//INTERACCION DE LOS BOTONES
//boton que lleva al inicio de la pagina
scrollTopBtn(".scrollTopBtn");

    //boton que lleva a las paginas de las peliculas
    let btnLink = document.querySelector(".btnMoreInfo");
    btnLink.addEventListener("click", () => {
        document.location.href = "./movies.html";
    });








