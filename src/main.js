
import data from './data/ghibli/ghibli.js';
import { filmPosters, cutDescription} from './data.js';

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
    //let backCardInfo = document.createElement('div');
    //backCardInfo.className = 'backCardInfo';
    //backCard.appendChild(backCardInfo);

    //let divSynopsis = document.createElement("div")
    //divSynopsis.className = "divSynopsis";
    let pSinopsys = document.createElement("p");
    pSinopsys.className="pSinopsys";
    pSinopsys.innerHTML = "<strong>" + "Sinopsys" + "</strong>";
    backCard.appendChild(pSinopsys);
    //backCardInfo.appendChild(divSynopsis);

    //let divFilmDescription = document.createElement("div")
    //divFilmDescription.className = "divFilmDescription";
    let filmDescription = document.createElement("p");
    filmDescription.className = "filmDescription";
    filmDescription.innerHTML = cutDescription(allFilms[j][2]);
    let btnMoreInfo = document.createElement("button");
    btnMoreInfo.className = "btnMoreInfo"
    btnMoreInfo.setAttribute("href", "#");
    btnMoreInfo.innerHTML = "More Info";
    //backCardInfo.appendChild(divFilmDescription);
    backCard.appendChild(filmDescription);
    backCard.appendChild(btnMoreInfo);
    divGlobal.appendChild(divCreation);
    divGlobal.appendChild(backCard);
    document.getElementById("moviesList").appendChild(divGlobal);
}


allFilms.sort(function (a,b){
    console.log(a, b)    
    return Number(a[3]) - Number(b[3])
})
for(let j = 0; j < allFilms.length; j++){
    let divSort = document.createElement("div");
    divSort.className = "divSort";
    divSort.innerHTML = allFilms[j][3];
    document.getElementById("moviesList").appendChild(divSort);
}
