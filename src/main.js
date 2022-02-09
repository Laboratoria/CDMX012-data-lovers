

import dataPokemon from './data.js';
import data from './data/pokemon/pokemon.js';

document.getElementById("numerico").addEventListener("click", showNumbers );
document.getElementById("nombre").addEventListener("click", showName);
//document.getElementById("tipo").addEventListener("click", showType);
document.getElementById("tipo").addEventListener("click", showTypeBox);
document.getElementById("fireType").addEventListener("click", htmlStructure);


function showNumbers(){
  document.getElementById("number").innerHTML = arrayNumbers[0].num;
  document.getElementById("img").src = arrayNumbers[0].img;
  document.getElementById("name").innerHTML = arrayNumbers[0].name;
  
  

}
function showName(){
  document.getElementById("number").innerHTML = byName[0].num;
  document.getElementById("name").innerHTML = byName[0].name;
  document.getElementById("img").src = byName[0].img;
  
 
  }
  //function showType(){
   // document.getElementById("typeBox").innerHTML=Object.getOwnPropertyNames(type).sort();;
  
    
 // }
  function showTypeBox(){
    document.getElementById("type").style.display="block"
    //document.getElementById("fireType").addEventListener("click", showFire )
    
    /*function showFire(){
      document.getElementById("number").innerHTML =  type.fire[1].num;
      document.getElementById("name").innerHTML = type.fire[1].name;
      document.getElementById("img").src = type.fire[1].img;
      
    }*/
  }

  function htmlStructure(){
let div= document.getElementById("infoBox")
document.getElementById("allPokemons").style.display="block";


for(let i=0; i<type.fire.length; i++){
  
  let resultado= "";
  resultado+='<div class= "flexBox">' 
  resultado+="<p>"+ type.fire[i].num + "</p>"
  resultado+= "<img src='"+ type.fire[i].img+"'></img>"
  resultado+= "<p>" + type.fire[i].name + "</p>" 
  resultado+="</div>"
  div.innerHTML+=resultado;
  

}

 

}


  const type= dataPokemon.tPokemon(data);
  const byName= dataPokemon.byName(data);
 const arrayNumbers= dataPokemon.pokemonNumber(data);
 

 
