import { imagesList } from './data.js';
import data from './lol/lol.js';

let arrayChampions = Object.values(data.data)
    for (let champion of arrayChampions) {
    let img = document.createElement('img')
    img.src = champion.splash
    let img2 = document.getElementById('image')
        img2.appendChild(img)
    
    let name = document.createElement('h1')
        name.textContent = champion.name
    let name2 =document.getElementById('champion')
        name2.appendChild(name)


   
    console.log(name2)
    
}