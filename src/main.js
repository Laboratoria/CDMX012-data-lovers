import { example } from './data.js';

import data from './data/pokemon/pokemon.js';

// bulbasaur.addEventListener("click", pokedex) ;

// let pkm151 = data;
// // document.getElementById('bulbasaur').innerHTML;
// function pokedex () {
//     return (pkm151.pokemon[0].name, bulbasaur);

// }
// ;

// for(let i = 0; i < 10; i++){
//      document.getElementById("bulbasaur").innerHTML 
//     return (data.pokemon[i].name);
// }

        //// KANTO ////

// let i = 0;
// if (i == 0){
//     let dex_kanto = '';
//     while(i < 151){
//         dex_kanto += `<img src="${data.pokemon[i].img}">`;
//         i++
//     }
//     document.getElementById("bulbasaur").innerHTML = dex_kanto;
// } else if (i == 151){
//     let dex_johto = '';
//     while( i < 251){
//         dex_johto += `<img src="${data.pokemon[i].img}">`;
//         i++
//     }
//     document.getElementById("bulbasaur2").innerHTML = dex_johto;
// }


    // for(let i = 0; i < 151; i++){
    //     dex_kanto += `<img src="${data.pokemon[i].img}">`;
    // }
    

    let dex = '';
   // let dex3 = '';
    
   
    for(let i = 0; i < 151; i++){
      // if(i < 151 ){
        
        dex += `<img src="${data.pokemon[i].img}">` +`${data.pokemon[i].name} `;
        
          
               let pikachu = document.getElementById("bulbasaur");
        
                pikachu.innerHTML = dex;
    }

            //  else {              
        //         dex2 += `<img src="${data.pokemon[i].img}">`;
        //         let pichu = document.getElementById("bulbasaur2");
        //         pichu.innerHTML = dex2;
           
        // }

        // let dex2 = '';
        // for (let j = 151; j < 251; j++){
        //     dex2 += `<img src="${data.pokemon[j].img}">`;
        //     let pichu = document.getElementById("bulbasaur2");
        //     pichu.innerHTML = dex2;
        // }



//   if (data.pokemon<=data.pokemon - 151){
//   document.getElementById("bulbasaur").innerHTML = dex_kanto;
// } else{
//     document.getElementById("bulbasaur2").innerHTML = dex_johto;
// }

console.log(example, data.pokemon[0].img);

console.log(example, data);
