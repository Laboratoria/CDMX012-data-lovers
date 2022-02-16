import { imagesList } from './data.js';
import data from './lol/lol.js';

let arrayChampions = Object.values(data.data)
    for (let champion of arrayChampions) {

    let img = document.createElement('img')
        img.src = champion.splash
    let name = document.createElement('h5')
        name.textContent = champion.name

    let cardChampion = document.getElementById('root')
    cardChampion.appendChild(name).appendChild(img)

    //console.log(championInfo)
}

/**/