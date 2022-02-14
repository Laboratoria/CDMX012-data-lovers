import { imagesList } from './data.js';
import data from './lol/lol.js';

let img = document.createElement('img')
    img.setAttribute('src', data.data.Aatrox.splash)
    img.setAttribute('height', '268')
    img.setAttribute('width', '427')
let imgD2 = document.getElementById('image')
    imgD2.appendChild(img)



