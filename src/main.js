import dataPokemon from './data.js';
import data from './data/pokemon/pokemon.js';

const byName= dataPokemon.byName(data);
const byNumber= dataPokemon.byNumber(data);
/*const byName= dataPokemon.sortData(data, name, );
const byNumber= dataPokemon.sortData(data, num, );
const byNameInverse= dataPokemon.sortData(data, name, inverse);
const byNumberInverse= dataPokemon.sortData(data, num, inverse);*/
const pokemonTypes= dataPokemon.pokemonTypesObject(data);

//const pokemonResistant= dataPokemon.pokemonResistant("water", data);

document.getElementById("pokeBall").addEventListener("click", refreshPage);
document.getElementById("pokeNumber").addEventListener("click", showByNumber);
document.getElementById("pokeName").addEventListener("click", showByName);
document.getElementById("pokeType").addEventListener("click", showTypeBox);
document.getElementById("pokeSearch1").addEventListener("keyup", showPokeSearch);
document.getElementById("pokeSearch2").addEventListener("keyup", showPokeSearch);
document.getElementById("refreshBtn").addEventListener("click", refreshPokeSearch);

document.getElementById("closeModalBox").addEventListener("click", closeModalBox);
//document.getElementById("triangleRight").addEventListener("click", nextPokemon);

/*function nextPokemon (pokemon){
  if(let i=0; i<pokemon; i++){
    console.log("Holi");
  }
}*/

function showPokeSearch(e){
  /*let input = document.getElementById('pokeSearch1').value
    input=input.toLowerCase();
    let x = byName;
      
    for (let i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }*/

     // 1. declare and assign the value of the event's target to a variable AKA whatever is typed in the search bar
     let value = e.target.value

     // 2. check: if input exists and if input is larger than 0
     if (value && value.trim().length > 0){
         // 3. redefine 'value' to exclude white space and change input to all lowercase
          value = value.trim().toLowerCase()
         // 4. return the results only if the value of the search is included in the person's name
         // we need to write code (a function for filtering through our data to include the search input value)
     } else {
         // 5. return nothing
         // input is invalid -- show an error message or show no results
 
     }
}

function refreshPokeSearch(){
  window.location.reload();
}

function refreshPage(){
  window.location.reload();
}

function pokemonCard(pokemon, type){
  let result= "";
  result+='<div class= "' + type + ' flexBox" id="'+pokemon.name+'Pokemon">' 
  result+="<p>"+ pokemon.num + "</p>"
  result+= "<img src='"+ pokemon.img+"'></img>"
  result+= "<p>" + pokemon.name + "</p>" 
  result+="</div>" 
  return result 
}

function pokemonModalBoxLeft(pokemon){
  let result= "";
  result+= "<div id='bigCircle' class='circle'></div>"
  result+= "<div id='redCircle' class='circle'></div>"
  result+= "<div id='yellowCircle' class='circle'></div>"
  result+= "<div id='greenCircle' class='circle'></div>"
  result+= "<p class='generationModalBox'>"+Object.values(pokemon.generation)[0]+": "+Object.values(pokemon.generation)[1]+"</p>"
  result+= "<img class='imgModalBox' src='"+ pokemon.img+"'></img>"
  result+= "<p class='numModalBox'>"+ pokemon.num + "</p>"
  result+= "<p class='nameModalBox'>" + pokemon.name + "</p>" 
  result+= "<p class='typeModalBox'>" + pokemon.type + "</p>" 
  return result
}

/*function arrayPokeInfo(info){
  let quickMoves= []
  for (let i= 0; i< info["quick-move"]; i++){
    let quickMoveName = Object.values(info["quick-move"][i].name);
    let quickMoveType = Object.values(info["quick-move"][i].type);
    let quickMoveBaseDamage = Object.values(info["quick-move"][i]["base-damage"]);
    let quickMoveEnergy = Object.values(info["quick-move"][i].energy);
    let quickMoveMoveDurationSec = Object.values(info["quick-move"][i]["move-duration-sec"]);
    let quickMove= [quickMoveName, quickMoveType, quickMoveBaseDamage, quickMoveEnergy, quickMoveMoveDurationSec]
    quickMoves.push(quickMove);
  } return quickMoves
}*/

function pokemonModalBoxRight(pokemon){
  let result= "";
  result+= "<p class='aboutModalBox'>" + pokemon.about + "</p>" 
  result+= "<p class='sizeModalBox'>Height: " + Object.values(pokemon.size)[0] +"</p>" 
  result+= "<p class='sizeModalBox'>Weight: " + Object.values(pokemon.size)[1] +"</p>" 
  result+= "<p class='pokemonRarityModalBox'>Pokémon rarity: " + pokemon["pokemon-rarity"] + "</p>" 
  result+= "<p class='encounterModalBox'>Base flee rate: " + Object.values(pokemon.encounter)[0] +"<br> Base capture rate: "+ Object.values(pokemon.encounter)[1] +"</p>" 
  result+= "<p class='spawnChanceModalBox'>Spawn chance: " + pokemon["spawn-chance"] + "</p>" 
  result+= "<table class='statsModalBox'><tr><th colspan='5'>Stats</th></tr><tr><td>Base attack</td><td>Base defense</td><td>Base stamina</td><td>Max CP</td><td>Max HP</td> </tr><tr><td>"+Object.values(pokemon.stats)[0]+"</td><td>"+Object.values(pokemon.stats)[1]+"</td><td>"+Object.values(pokemon.stats)[2]+"</td><td>"+Object.values(pokemon.stats)[3]+"</td><td>"+Object.values(pokemon.stats)[4]+"</td> </tr></table>" 
  result+= "<table class='resAndWeakModalBox'><tr><th>Resistant</th><th>Weaknesses</th></tr><tr><td>" + pokemon.resistant + "</td><td>" + pokemon.weaknesses + "</td></tr></table>" 
  
  
  
  result+= "<p class='quickMoveModalBox'>Quick moves: " + /*arrayPokeInfo(pokemon)*/ +"</p>" 
  result+= "<p class='specialAttackModalBox'>Special attacks: " + Object.values(pokemon["special-attack"]) + "</p>" 
  result+= "<p class='eggAndBuddyDistanceModalBox'>Egg: " + pokemon.egg + "</p>" 
  result+= "<p class='eggAndBuddyDistanceModalBox'>Buddy distance km: " + pokemon["buddy-distance-km"] + "</p>" 
  result+= "<p class='evolutionCandyModalBox'>Candy for evolution: " + Object.values(pokemon.evolution)[0] + "</p>" 

  

  //result+= "<p class='evolutionModalBox'>Evolution: " + Object.values(pokemon.evolution["next-evolution"][0]) + "</p>" 
  //result+= "<p class='evolutionModalBox'>Evolution: " + Object.values(pokemon.evolution["next-evolution"]["next-evolution"]) + "</p>" 


  return result
}

function showTypeBox(){
  document.getElementById("typesShown").style.display="block"
  let div= document.getElementById("infoBox")
  div.innerHTML=""; 
}

function closeModalBox(){
  let openModalBox= document.getElementById("modalBox");
  openModalBox.style.visibility = "hidden";
  const body = document.querySelector("body");
    body.style.overflow = "auto"
}
//aquí comienza mi relajo, jajaja. Primero me traje el objeto y por medio del .keys accedí a los tipos

let arrayTypes= Object.keys(pokemonTypes);

//el for recorrio ese objeto para poer aplicar una funcion de click llamada replayClick y removerla.
for(let i=0; i<arrayTypes.length; i++){
  
document.getElementById(arrayTypes[i]+"Type").removeEventListener("click", replayClick);
document.getElementById(arrayTypes[i]+ "Type").addEventListener("click", typeClick);

}

function replayClick(event){
 event.target.value; //con esto puedes acceder a través de un evento al valor de cada propiedad.
}
function typeClick(event){
 let type= event.target.value;
 document.getElementById("allPokemons").className = "";//así fue que limpie para que se pudieran implementar los colores de la caja sin broncas.

  document.getElementById("h1").innerHTML= [type];
  const colorStyle = document.getElementById("allPokemons");
  colorStyle.classList.add ('container'+ type);//concatene las clases del CSS y el tipo.
  let div= document.getElementById("infoBox")
  div.innerHTML=""; 
  document.getElementById("allPokemons").style.display="block";
  
  for(let i=0; i<pokemonTypes[type].length; i++){
    let result =pokemonCard(pokemonTypes[type][i], type);
    div.innerHTML+=result; 
  }
  //esto quedó practicamente igual lo unico que hice fue cambiarle los parametros use pokemonTypes y type.
  for (let i= 0; i<pokemonTypes[type].length; i++){
   let singlePokemon = document.getElementsByClassName(type)[i];
    singlePokemon.addEventListener("click", function(){
      let openModalBox= document.getElementById("modalBox");
      openModalBox.style.visibility = "visible";
      const body = document.querySelector("body");
      body.style.overflow = "hidden"
      let divLeft= document.getElementById("modalContentLeft")
      divLeft.innerHTML=""; 
      let resultLeft =pokemonModalBoxLeft(pokemonTypes[type][i]);
      divLeft.innerHTML+=resultLeft; 
      let divRight= document.getElementById("modalContentRight")
      divRight.innerHTML=""; 
      let resultRight =pokemonModalBoxRight(pokemonTypes[type][i]);
      divRight.innerHTML+=resultRight; 
    });
  }
}


function showByNumber(){  //sirve pero no es óptimo; en proceso...
 document.getElementById("typesShown").style.display="none"
 document.getElementById("h1").style.display= "none";
  let div= document.getElementById("infoBox")
  div.innerHTML=""; 
  const colorStyle = document.getElementById("allPokemons");
  colorStyle.style.background= "";
  colorStyle.style.backgroundColor= "";
  document.getElementById("allPokemons").style.display="block";
  for(let i=0; i<byNumber.length; i++){
    let result =pokemonCard(byNumber[i], "organized");
     div.innerHTML+=result; 
  }
  for (let i= 0; i<byNumber.length; i++){
    let singlePokemon = document.getElementsByClassName("flexBox")[i];
     singlePokemon.addEventListener("click", function(){
       let openModalBox= document.getElementById("modalBox");
       openModalBox.style.visibility = "visible";
       const body = document.querySelector("body");
       body.style.overflow = "hidden"
       let divLeft= document.getElementById("modalContentLeft")
       divLeft.innerHTML=""; 
       let resultLeft =pokemonModalBoxLeft(byNumber[i]);
       divLeft.innerHTML+=resultLeft; 
       let divRight= document.getElementById("modalContentRight")
       divRight.innerHTML=""; 
       let resultRight =pokemonModalBoxRight(byNumber[i]);
       divRight.innerHTML+=resultRight; 
     });
   }
}

function showByName(){ //sirve pero no es óptimo; en proceso...
  document.getElementById("typesShown").style.display="none";
  document.getElementById("h1").style.display= "none";
  let div= document.getElementById("infoBox")
  div.innerHTML=""; 
  const colorStyle = document.getElementById("allPokemons");
  colorStyle.style.background= "";
  colorStyle.style.backgroundColor= "";
  document.getElementById("allPokemons").style.display="block";
   for(let i=0; i<byName.length; i++){
     let result =pokemonCard(byName[i], "organized");
      div.innerHTML+=result; 
   }
   for (let i= 0; i<byName.length; i++){
    let singlePokemon = document.getElementsByClassName("flexBox")[i];
     singlePokemon.addEventListener("click", function(){
       let openModalBox= document.getElementById("modalBox");
       openModalBox.style.visibility = "visible";
       const body = document.querySelector("body");
       body.style.overflow = "hidden"
       let divLeft= document.getElementById("modalContentLeft")
       divLeft.innerHTML=""; 
       let resultLeft =pokemonModalBoxLeft(byName[i]);
       divLeft.innerHTML+=resultLeft; 
       let divRight= document.getElementById("modalContentRight")
       divRight.innerHTML=""; 
       let resultRight =pokemonModalBoxRight(byName[i]);
       divRight.innerHTML+=resultRight; 
     });
   }
}
  


window.addEventListener("click", function(e){
  this.console.log(e.target);
})






 

 
