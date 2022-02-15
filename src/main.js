import { imagesList } from './data.js';
import data from './lol/lol.js';

/*let img = document.createElement('img')
    img.setAttribute('src', data.data.Ekko.splash)
    img.setAttribute('height', '268')
    img.setAttribute('width', '427')
let imgD2 = document.getElementById('image')
    imgD2.appendChild(img)

    //console.log(data.data)*/

let arrayChampions = Object.values(data.data)
    for (let champion of arrayChampions) {
    let img = document.createElement('img')
        img.src = champion.splash
        //img.setAttribute('height', '268')
        //img.setAttribute('width', '427')

    let img2 = document.getElementById('image')
        img2.appendChild(img)

    //console.dir (img);
}

