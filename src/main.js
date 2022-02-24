//Import data and functions 
import data from './data/ghibli/ghibli.js';
import {filmPosters, cutDescription, backToTop, hideBtn, createBtnLink} from './data.js'

//Create an array with poster, title, description, release_date, rating score and id.
let allFilms = []; 
for(let i = 0; i < data.films.length; i++){ 
    allFilms.push(filmPosters(data.films[i]));
}

//Create movie cards
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
        movieTitle.className = "movieTitle";
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


//boton ScrollTop
const btnSelector = document.querySelector(".scrollTopBtn");

btnSelector.addEventListener("click", backToTop);
window.addEventListener("scroll", hideBtn);


//Filter
let searchBar = document.getElementById("searchBar"); 

searchBar.addEventListener('keypress', (e)=>{
if (e.key === "Enter"){
    const searchString = e.target.value.toLowerCase(); 

    const filteredMovies = data.films.filter(movie => { 
        return movie.title.toLowerCase().includes(searchString) || movie.description.toLowerCase().includes(searchString) || movie.director.toLowerCase().includes(searchString)   ;
    })
    document.getElementById("showMessage").innerText = " "
    let arraySearch = [];
    if (filteredMovies.length == 0){
        document.getElementById("showMessage").innerText = "Sorry! We couldn't find a movie for you. Try different movie title or director"; 
    } 
    for(let i = 0; i < filteredMovies.length; i++){ 
        arraySearch.push(filmPosters(filteredMovies[i])); 
    }
    
    createPoster(arraySearch);
    
   
}
    
})



