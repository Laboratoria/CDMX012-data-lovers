//Import data and functions 
import data from './data/ghibli/ghibli.js';
import {filmPosters, cutDescription, scrollTopBtn, createBtnLink} from './data.js';

//CREACION DE ELEMENTOS PARA HOMEPAGE(TARJETAS DE PELICULAS)
// Poster y titulos de todas las peliculas.

let allFilms = []; 
for(let i = 0; i < data.films.length; i++){ 
    allFilms.push(filmPosters(data.films[i]));
}

function createPoster(array) {
    document.getElementById("moviesList").innerHTML = '';

    for (let j = 0; j < array.length; j++) {
        let divGlobal = document.createElement("div");
        divGlobal.className = "globalCard";
        let divCreation = document.createElement("div");
        divCreation.className = "card";
        let filmPoster = document.createElement("img");
        filmPoster.setAttribute("src", array[j][0]);
        let movieYr = document.createElement("p");
        movieYr.className = "movieYr";
        movieYr.innerHTML = ("<strong>" + allFilms[j][3] + "</strong>");
        let movieTitle = document.createElement("p");
        movieTitle.innerHTML = "<strong>" + array[j][1] + "</strong>";
        divCreation.appendChild(filmPoster);
        divCreation.appendChild(movieYr);
        divCreation.appendChild(movieTitle);

        //Backcard
        let backCard = document.createElement("div");
        backCard.className = "back-card";
        let pSinopsys = document.createElement("p");
        pSinopsys.className = "pSinopsys";
        pSinopsys.innerHTML = "<strong>" + "Sinopsys" + "</strong>";
        backCard.appendChild(pSinopsys);

        let filmDescription = document.createElement("p");
        filmDescription.className = "filmDescription";
        filmDescription.innerHTML = cutDescription(array[j][2]);
        let btnMoreInfo = document.createElement("button");
        btnMoreInfo.className = "btnMoreInfo";
        
        btnMoreInfo.addEventListener("click", function()
        {createBtnLink(array[j][5])
        });
        
        btnMoreInfo.innerHTML = "More Info";
        backCard.appendChild(filmDescription);
        backCard.appendChild(btnMoreInfo);
        divGlobal.appendChild(divCreation);
        divGlobal.appendChild(backCard);
        document.getElementById("moviesList").appendChild(divGlobal);
    }
}
   createPoster(allFilms); 

//Use the selected value to filter the movies 
document.getElementById("selectFilter").addEventListener("change", function() {
    let userSelection = this.value;
    if (userSelection =="AZ"){
         allFilms.sort(function (a,b){   
            return  a[1] > b[1] ? 1 : -1
        })

    } else if (userSelection == "ZA"){
         allFilms.sort(function (a,b){   
            return  a[1] < b[1] ? 1 : -1
        })
    } else if (userSelection == "rating") {
         allFilms.sort(function (a,b){   
            return Number(b[4]) - Number(a[4])
        })
    } else if( userSelection == "year"){
         allFilms.sort(function (a,b){   
            return Number(b[3]) - Number(a[3])
        })
    }
    createPoster(allFilms)
    
});


  //INTERACCION DE LOS BOTONES
const d = document;

d.addEventListener("DOMContentLoaded", () => {
    scrollTopBtn(".scrollTopBtn");  
});


//boton que lleva a las paginas de las peliculas
// let btnLink = document.querySelectorAll(".btnMoreInfo");

// for (let btn of btnLink){
// btn.addEventListener("click", function() {
//     document.location.href = "./movies.html";
// })
// };

// btnLink.forEach(btn => {
//     btn.addEventListener("click", function() {
//         document.location.href = "./movies.html";
//     });