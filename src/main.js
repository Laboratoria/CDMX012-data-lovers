import data from './data/ghibli/ghibli.js';
import { filterFilmsBySearch } from './data.js';


const inputSearch = document.getElementById("inputSearch");
inputSearch.addEventListener("change", function () {
    let searchValue = inputSearch.value;
    console.log("change", inputSearch.value);
    const busquedaPeli = filterFilmsBySearch(data.films, searchValue);
    console.log("busqueda", busquedaPeli);
});