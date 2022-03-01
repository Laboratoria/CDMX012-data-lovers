import { ordenar } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/rickandmorty/rickandmorty.js';

const valores = data.results; //esta tomando los datos de Rick y Morty, pero únicamente 
const dataPorNombre = ordenar(valores);
const valorInput = document.getElementById("buscar");
const botonLupa = document.getElementById("lupa");
const posicion = document.getElementById("all"); 


botonLupa.addEventListener("click", buscador);
function buscador()// Al dar click a la lupa, 
        {                            
          let buscar = valorInput.value.toLowerCase();
          let contador = [];
          posicion.innerHTML = ""; 
             if(valorInput.value != ""){    
                for (let valor of dataPorNombre){
                  let nombre = valor.name.toLowerCase();  
                    if(nombre.indexOf(buscar) !== -1){
                      contador.push(valor.name);
                      posicion.innerHTML +=  `<div class= "conte" >
                      <div class = "frente"> 
                      <img src="rickandmorty/pasaporte.png" alt="Pasaporte" class="pasaporte" > 
                      <p id="nombre" class="nombres" >${valor.name}</p>
                      </div>
                      <div class= "atras">
                      <a href="#${valor.id}"><img src="${valor.image}" alt="Pasaporte" class="foto"></a>
                      <p class="nombres">${valor.name}</p>
                      </div>
                      </div>
                    `   
                                     }
               }  }
               console.log(contador);
                        }