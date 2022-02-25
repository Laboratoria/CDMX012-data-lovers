
import dataPokemon from './data.js';
import data from './data/pokemon/pokemon.js';

const byName = dataPokemon.byName(data);
const pokemonEvolution= dataPokemon.pokemonEvolution(data);
const byNumber = dataPokemon.byNumber(data);
const pokemonTypes = dataPokemon.pokemonTypesObject(data);
const pokemonResistant = dataPokemon.pokemonResistant(data);
const pokemonWeaknesses = dataPokemon.pokemonWeaknesses(data);
let arrayTypes = Object.keys(pokemonTypes);


document.getElementById("pokeBall").addEventListener("click", refreshPage);
document.getElementById("pokeNumber").addEventListener("click", showByNumber);
document.getElementById("pokeName").addEventListener("click", showByName);
document.getElementById("pokeType").addEventListener("click", showTypeBox);
document.getElementById("closeModalBox").addEventListener("click", closeModalBox);
document.getElementById("pokeResistant").addEventListener("click", showResisBox)
document.getElementById("pokeWeaknesses").addEventListener("click", showWenessesBox)

//document.getElementById("triangleRight").addEventListener("click", nextPokemon);

/*function nextPokemon (pokemon){
  if(let i=0; i<pokemon; i++){
    console.log("Holi");
  }
}*/


document.getElementById("searchBar").addEventListener("keyup", searchBox)

 let optionList= document.getElementById("list");
optionList.addEventListener("click", searchBox)



function searchBox(){
  
 let search=document.getElementById("searchBar").value;
 if(search == ""){
   return
 }
 optionList.size= 5;
let resultado=[];
  for(let i=0; i<byName.length; i++){
   if(byName[i].name.startsWith(search)){
   resultado.push(byName[i].name);
   }
 }
 optionList.innerText = null;
 document.getElementById("list").style.display="block";
 for(let i=0; i<resultado.length; i++){
   showOptions(resultado[i], resultado[i]);
   

 }
 
 
  return resultado;
}
function  showOptions(text, val ) {
  let createOptions=document.createElement("option");
  optionList.appendChild(createOptions);
  createOptions.text=text;
  createOptions.value=val;
  createOptions.addEventListener("click", setVal);
  
  
 
  
 
 }
  function setVal(selectedVal){
    
  let searchPokemon={}
    
  //  document.getElementById("searchBar").value=selectedVal.target.value;
   document.getElementById("searchBar").value=""
   console.log("changing options object")
   optionList.size= 0;
   optionList.innerText = null;
   document.getElementById("list").style.display="none";
   for (let i = 0; i < byName.length; i++) {
  if(byName[i].name==selectedVal.target.value){
    searchPokemon=byName[i];
    }
  }
  
  let openModalBox = document.getElementById("modalBox");
      openModalBox.style.visibility = "visible";
      const body = document.querySelector("body");
      body.style.overflow = "hidden"
      let divLeft = document.getElementById("modalContentLeft")
      divLeft.innerHTML = "";
      let resultLeft = pokemonModalBoxLeft(searchPokemon);
      divLeft.innerHTML += resultLeft;
      let divRight = document.getElementById("modalContentRight")
      divRight.innerHTML = "";
      let resultRight = pokemonModalBoxRight(searchPokemon);
      divRight.innerHTML += resultRight;
      optionList.innerText = null;
      
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


function pokemonModalBoxRight(pokemon) {
  let result = "";
  result += "<p class='aboutModalBox'>" + pokemon.about + "</p>"
  result += "<p class='sizeModalBox'>Height: " + Object.values(pokemon.size)[0] + "</p>"
  result += "<p class='sizeModalBox'>Weight: " + Object.values(pokemon.size)[1] + "</p>"
  result += "<p class='pokemonRarityModalBox'>Pokémon rarity: " + pokemon["pokemon-rarity"] + "</p>"
  result += "<p class='encounterModalBox'>Base flee rate: " + Object.values(pokemon.encounter)[0] + "<br> Base capture rate: " + Object.values(pokemon.encounter)[1] + "</p>"
  result += "<p class='spawnChanceModalBox'>Spawn chance: " + pokemon["spawn-chance"] + "</p>"
  result += "<table class='statsModalBox'><tr><th colspan='5'>Stats</th></tr><tr><td>Base attack</td><td>Base defense</td><td>Base stamina</td><td>Max CP</td><td>Max HP</td> </tr><tr><td>" + Object.values(pokemon.stats)[0] + "</td><td>" + Object.values(pokemon.stats)[1] + "</td><td>" + Object.values(pokemon.stats)[2] + "</td><td>" + Object.values(pokemon.stats)[3] + "</td><td>" + Object.values(pokemon.stats)[4] + "</td> </tr></table>"
  result += "<table class='resAndWeakModalBox'><tr><th>Resistant</th><th>Weaknesses</th></tr><tr><td>" + pokemon.resistant + "</td><td>" + pokemon.weaknesses + "</td></tr></table>"
  result += "<p class='quickMoveModalBox'>Quick moves: " + Object.values(pokemon["quick-move"])/*Object.entries(pokemon["quick-move"][0])+"<br> "+ Object.entries(pokemon["quick-move"][1])*/ + "</p>"
  result += "<p class='specialAttackModalBox'>Special attacks: " + Object.values(pokemon["special-attack"]) + "</p>"
  result += "<p class='eggAndBuddyDistanceModalBox'>Egg: " + pokemon.egg + "</p>"
  result += "<p class='eggAndBuddyDistanceModalBox'>Buddy distance km: " + pokemon["buddy-distance-km"] + "</p>"
  result += "<p class='evolutionCandyModalBox'>Candy for evolution: " + Object.values(pokemon.evolution)[0] + "</p>"
 

  //result+= "<p class='evolutionModalBox'>Evolution: " + Object.values(pokemon.evolution["next-evolution"][0]) + "</p>" 
  //result+= "<p class='evolutionModalBox'>Evolution: " + Object.values(pokemon.evolution["next-evolution"]["next-evolution"]) + "</p>" 


  return result
}


function showResisBox() {
  document.getElementById("allPokemons").style.display = "none";
  
  document.getElementById("typesShown").style.display = "block"
  let div = document.getElementById("infoBox")
  document.getElementById("h1").style.display = "none";
  div.innerHTML = "";
  for (let i = 0; i < arrayTypes.length; i++) {
    document.getElementById(arrayTypes[i] + "Type").removeEventListener("click", typeClickWeaknesses);
    document.getElementById(arrayTypes[i] + "Type").removeEventListener("click", typeClick);
    document.getElementById(arrayTypes[i] + "Type").addEventListener("click", typeClickResis);
  
  }
  

}
function showTypeBox() {
  document.getElementById("allPokemons").style.display = "none";
  
  document.getElementById("typesShown").style.display = "block"
  let div = document.getElementById("infoBox")
  document.getElementById("h1").style.display = "none";
  
  div.innerHTML = "";
  for (let i = 0; i < arrayTypes.length; i++) {
    document.getElementById(arrayTypes[i] + "Type").removeEventListener("click", typeClickWeaknesses);
    document.getElementById(arrayTypes[i] + "Type").removeEventListener("click", typeClick);
    document.getElementById(arrayTypes[i] + "Type").addEventListener("click", typeClick);
  
  }
  

}
function showWenessesBox() {
  document.getElementById("allPokemons").style.display = "none";
  
  document.getElementById("typesShown").style.display = "block"
  let div = document.getElementById("infoBox")
  document.getElementById("h1").style.display = "none";
  div.innerHTML = "";
  for (let i = 0; i < arrayTypes.length; i++) {
    document.getElementById(arrayTypes[i] + "Type").removeEventListener("click", typeClickResis);
    document.getElementById(arrayTypes[i] + "Type").removeEventListener("click", typeClick);
    document.getElementById(arrayTypes[i] + "Type").addEventListener("click", typeClickWeaknesses);
  
  }
  

}

function closeModalBox() {
  let openModalBox = document.getElementById("modalBox");
  openModalBox.style.visibility = "hidden";
  const body = document.querySelector("body");
  body.style.overflow = "auto"
}



function typeClick(event) {
  let type = event.target.value;
  document.getElementById("allPokemons").className = "";//así fue que limpie para que se pudieran implementar los colores de la caja sin broncas.
  document.getElementById("h1").style.display="block"
  document.getElementById("h1").innerHTML = [type];
  const colorStyle = document.getElementById("allPokemons");
  colorStyle.classList.add('container' + type);//concatene las clases del CSS y el tipo.
  let div = document.getElementById("infoBox")
  div.innerHTML = "";
  document.getElementById("allPokemons").style.display = "block";

  for (let i = 0; i < pokemonTypes[type].length; i++) {
    let result = pokemonCard(pokemonTypes[type][i], type);
    div.innerHTML += result;
  }
  //esto quedó practicamente igual lo unico que hice fue cambiarle los parametros use pokemonTypes y type.
  for (let i = 0; i < pokemonTypes[type].length; i++) {
    let singlePokemon = document.getElementsByClassName(type)[i];
    singlePokemon.addEventListener("click", function () {
      let openModalBox = document.getElementById("modalBox");
      openModalBox.style.visibility = "visible";
      const body = document.querySelector("body");
      body.style.overflow = "hidden"
      let divLeft = document.getElementById("modalContentLeft")
      divLeft.innerHTML = "";
      let resultLeft = pokemonModalBoxLeft(pokemonTypes[type][i]);
      divLeft.innerHTML += resultLeft;
      let divRight = document.getElementById("modalContentRight")
      divRight.innerHTML = "";
      let resultRight = pokemonModalBoxRight(pokemonTypes[type][i]);
      divRight.innerHTML += resultRight;
    });
  }

  
  /*let singlePokemon = document.getElementsByClassName("flexbox");
  singlePokemon.forEach(pokemon => pokemon.addEventListener('click', () => {
    
  }));*/
 
}

function refreshPage() {
  window.location.reload();
}

function pokemonCard(pokemon, type) {
  let result = "";
  result += '<div class= "' + type + ' flexBox" id="' + pokemon.name + 'Pokemon">'
  result += "<p>" + pokemon.num + "</p>"
  result += "<img src='" + pokemon.img + "'></img>"
  result += "<p>" + pokemon.name + "</p>"
  result += "</div>"
  return result
}

function pokemonModalBoxLeft(pokemon) {
  let result = "";
  result += "<div id='bigCircle' class='circle'></div>"
  result += "<div id='redCircle' class='circle'></div>"
  result += "<div id='yellowCircle' class='circle'></div>"
  result += "<div id='greenCircle' class='circle'></div>"
  result += "<p class='generationModalBox'>" + Object.values(pokemon.generation)[0] + ": " + Object.values(pokemon.generation)[1] + "</p>"
  result += "<img class='imgModalBox' src='" + pokemon.img + "'></img>"
  result += "<p class='numModalBox'>" + pokemon.num + "</p>"
  result += "<p class='nameModalBox'>" + pokemon.name + "</p>"
  result += "<p class='typeModalBox'>" + pokemon.type + "</p>"
  return result
}



function showByNumber() {  
  //sirve pero no es óptimo; en proceso...
  document.getElementById("allPokemons").className = "";
  document.getElementById("typesShown").style.display = "none"
  document.getElementById("h1").innerHTML = "Number";
  let div = document.getElementById("infoBox")
  div.innerHTML = "";
  const colorStyle = document.getElementById("allPokemons");
  colorStyle.style.background = "";
  colorStyle.style.backgroundColor = "";
  document.getElementById("allPokemons").style.display = "block";
  
  for (let i = 0; i < byNumber.length; i++) {
    let result = pokemonCard(byNumber[i], "organized");
    div.innerHTML += result;
  }
  for (let i = 0; i < byNumber.length; i++) {
    let singlePokemon = document.getElementsByClassName("flexBox")[i];
    singlePokemon.addEventListener("click", function () {
      let openModalBox = document.getElementById("modalBox");
      openModalBox.style.visibility = "visible";
      const body = document.querySelector("body");
      body.style.overflow = "hidden"
      let divLeft = document.getElementById("modalContentLeft")
      divLeft.innerHTML = "";
      let resultLeft = pokemonModalBoxLeft(byNumber[i]);
      divLeft.innerHTML += resultLeft;
      let divRight = document.getElementById("modalContentRight")
      divRight.innerHTML = "";
      let resultRight = pokemonModalBoxRight(byNumber[i]);
      divRight.innerHTML += resultRight;
      
    });
  }
}
function typeClickResis(event) {
  let resistant = event.target.value;
  document.getElementById("allPokemons").className = "";
  document.getElementById("h1").style.display="block"
  document.getElementById("h1").innerHTML = [resistant];
  const colorStyle = document.getElementById("allPokemons");
  colorStyle.classList.add('container' + resistant);
  let div = document.getElementById("infoBox")
  div.innerHTML = "";
  document.getElementById("allPokemons").style.display = "block";

  for (let i = 0; i < pokemonResistant[resistant].length; i++) {
    let result = pokemonCard(pokemonResistant[resistant][i], resistant);
    div.innerHTML += result;
  }
  //esto quedó practicamente igual lo unico que hice fue cambiarle los parametros use pokemonTypes y type.
  for (let i = 0; i < pokemonResistant[resistant].length; i++) {
    let singlePokemon = document.getElementsByClassName(resistant)[i];
    singlePokemon.addEventListener("click", function () {
      let openModalBox = document.getElementById("modalBox");
      openModalBox.style.visibility = "visible";
      const body = document.querySelector("body");
      body.style.overflow = "hidden"
      let divLeft = document.getElementById("modalContentLeft")
      divLeft.innerHTML = "";
      let resultLeft = pokemonModalBoxLeft(pokemonResistant[resistant][i]);
      divLeft.innerHTML += resultLeft;
      let divRight = document.getElementById("modalContentRight")
      divRight.innerHTML = "";
      let resultRight = pokemonModalBoxRight(pokemonResistant[resistant][i]);
      divRight.innerHTML += resultRight;
    });
  }
}



function typeClickWeaknesses(event) {
  let weaknesses = event.target.value;
  document.getElementById("allPokemons").className = "";
  document.getElementById("h1").style.display="block";
  document.getElementById("h1").innerHTML = [weaknesses];
  const colorStyle = document.getElementById("allPokemons");
  colorStyle.classList.add('container' + weaknesses);
  let div = document.getElementById("infoBox")
  div.innerHTML = "";
  document.getElementById("allPokemons").style.display = "block";

  for (let i = 0; i < pokemonWeaknesses[weaknesses].length; i++) {
    let result = pokemonCard(pokemonWeaknesses[weaknesses][i], weaknesses);
    div.innerHTML += result;
  }

  for (let i = 0; i < pokemonWeaknesses[weaknesses].length; i++) {
    let singlePokemon = document.getElementsByClassName(weaknesses)[i];
    singlePokemon.addEventListener("click", function () {
      let openModalBox = document.getElementById("modalBox");
      openModalBox.style.visibility = "visible";
      const body = document.querySelector("body");
      body.style.overflow = "hidden"
      let divLeft = document.getElementById("modalContentLeft")
      divLeft.innerHTML = "";
      let resultLeft = pokemonModalBoxLeft(pokemonWeaknesses[weaknesses][i]);
      divLeft.innerHTML += resultLeft;
      let divRight = document.getElementById("modalContentRight")
      divRight.innerHTML = "";
      let resultRight = pokemonModalBoxRight(pokemonWeaknesses[weaknesses][i]);
      divRight.innerHTML += resultRight;
    });
  }
}

function showByName() { //sirve pero no es óptimo; en proceso...
  document.getElementById("allPokemons").className = "";
  document.getElementById("typesShown").style.display = "none";
  document.getElementById("h1").innerHTML = "Name A-Z";
  let div = document.getElementById("infoBox")
  div.innerHTML = "";
  const colorStyle = document.getElementById("allPokemons");
  colorStyle.style.background = "";
  colorStyle.style.backgroundColor = "";
  document.getElementById("allPokemons").style.display = "block";
  for (let i = 0; i < byName.length; i++) {
    let result = pokemonCard(byName[i], "organized");
    div.innerHTML += result;
  }
  for (let i = 0; i < byName.length; i++) {
    let singlePokemon = document.getElementsByClassName("flexBox")[i];
    singlePokemon.addEventListener("click", function () {
      let openModalBox = document.getElementById("modalBox");
      openModalBox.style.visibility = "visible";
      const body = document.querySelector("body");
      body.style.overflow = "hidden"
      let divLeft = document.getElementById("modalContentLeft")
      divLeft.innerHTML = "";
      let resultLeft = pokemonModalBoxLeft(byName[i]);
      divLeft.innerHTML += resultLeft;
      let divRight = document.getElementById("modalContentRight")
      divRight.innerHTML = "";
      let resultRight = pokemonModalBoxRight(byName[i]);
      divRight.innerHTML += resultRight;
    });
  }
}


// window.addEventListener("click", function(e){
//   this.console.log(e.target);
// })






 

 

