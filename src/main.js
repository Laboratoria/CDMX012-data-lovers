
import dataPokemon from './data.js';
import data from './data/pokemon/pokemon.js';

const byName = dataPokemon.byName(data);
const byNumber = dataPokemon.byNumber(data);
const pokemonTypes = dataPokemon.pokemonTypesObject(data);
const pokemonResistant = dataPokemon.pokemonResistant(data);
const pokemonWeaknesses = dataPokemon.pokemonWeaknesses(data);

let arrayTypes = Object.keys(pokemonTypes);

document.getElementById("pokeName").addEventListener("click", showByName);
document.getElementById("pokeNumber").addEventListener("click", showByNumber);
document.getElementById("pokeType").addEventListener("click", showTypeBox);
document.getElementById("pokeResistant").addEventListener("click", showResistantBox);
document.getElementById("pokeWeaknesses").addEventListener("click", showWeaknessesBox);
document.getElementById("pokeCompute").addEventListener("click", showCompute);
document.getElementById("pokeBall").addEventListener("click", refreshPage);
document.getElementById("searchBar").addEventListener("keyup", searchBox)
document.getElementById("closeModalBox").addEventListener("click", closeModalBox);
document.getElementById("pokeSearch1").addEventListener("keyup", showPokeSearch);
document.getElementById("refreshBtn").addEventListener("click", refreshPokeSearch);



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
  //result += "<p class='quickMoveModalBox'>Quick moves: " + Object.values(pokemon["quick-move"])/*Object.entries(pokemon["quick-move"][0])+"<br> "+ Object.entries(pokemon["quick-move"][1])*/ + "</p>"
  //result += "<p class='specialAttackModalBox'>Special attacks: " + Object.values(pokemon["special-attack"]) + "</p>"
  result += "<br><p class='eggAndBuddyDistanceModalBox'>Egg: " + pokemon.egg + "</p>"
  result += "<p class='eggAndBuddyDistanceModalBox'>Buddy distance km: " + pokemon["buddy-distance-km"] + "</p>"
  //result+= "<p class='evolutionModalBox'>Evolution: " + Object.values(pokemon.evolution["next-evolution"][0]) + "</p>" 
  //result+= "<p class='evolutionModalBox'>Evolution: " + Object.values(pokemon.evolution["next-evolution"]["next-evolution"]) + "</p>" 
  return result
}



function showByName() {
  document.getElementById("computePokeSearch").style.visibility = "hidden";
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

function showByNumber() {
  document.getElementById("computePokeSearch").style.visibility = "hidden";
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

function showTypeBox() {
  document.getElementById("allPokemons").style.display = "none";
  document.getElementById("computePokeSearch").style.visibility = "hidden";
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

function showResistantBox() {
  document.getElementById("allPokemons").style.display = "none";
  document.getElementById("computePokeSearch").style.visibility = "hidden";
  document.getElementById("typesShown").style.display = "block"
  let div = document.getElementById("infoBox")
  document.getElementById("h1").style.display = "none";
  div.innerHTML = "";
  for (let i = 0; i < arrayTypes.length; i++) {
    document.getElementById(arrayTypes[i] + "Type").removeEventListener("click", typeClickWeaknesses);
    document.getElementById(arrayTypes[i] + "Type").removeEventListener("click", typeClick);
    document.getElementById(arrayTypes[i] + "Type").addEventListener("click", typeClickResistant);
  }
}

function showWeaknessesBox() {
  document.getElementById("allPokemons").style.display = "none";
  document.getElementById("computePokeSearch").style.visibility = "hidden";
  document.getElementById("typesShown").style.display = "block"
  let div = document.getElementById("infoBox")
  document.getElementById("h1").style.display = "none";
  div.innerHTML = "";
  for (let i = 0; i < arrayTypes.length; i++) {
    document.getElementById(arrayTypes[i] + "Type").removeEventListener("click", typeClickResistant);
    document.getElementById(arrayTypes[i] + "Type").removeEventListener("click", typeClick);
    document.getElementById(arrayTypes[i] + "Type").addEventListener("click", typeClickWeaknesses);
  }
}


function typeClick(event) {
  document.getElementById("computePokeSearch").style.visibility = "hidden";
  let type = event.target.value;
  document.getElementById("allPokemons").className = "";//así fue que limpie para que se pudieran implementar los colores de la caja sin broncas.
  document.getElementById("h1").style.display = "block"
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

      //con esto se pasa al pokémon siguiente pero solo 1 vez, intenté menterlo en loop a ver si podía acceder a todos, pero no me salió jiji (únicamente funciona bien en TYPE porque no lo agregué a los demás ya que nada más estaba probando)
      let newPokePosition = pokemonTypes[type].indexOf(pokemonTypes[type][i]) + 1 //para sacar la posición del siguiente pokémon
      let newPoke = pokemonTypes[type][newPokePosition] //para acceder a la posición
      document.getElementById("triangleRight").addEventListener("click", function () {
        let openModalBox = document.getElementById("modalBox");
        openModalBox.style.visibility = "visible";
        const body = document.querySelector("body");
        body.style.overflow = "hidden"
        let divLeft = document.getElementById("modalContentLeft")
        divLeft.innerHTML = "";
        let resultLeft = pokemonModalBoxLeft(newPoke);
        divLeft.innerHTML += resultLeft;
        let divRight = document.getElementById("modalContentRight")
        divRight.innerHTML = "";
        let resultRight = pokemonModalBoxRight(newPoke);
        divRight.innerHTML += resultRight;

      })
    });
  }

}


function typeClickResistant(event) {
  document.getElementById("computePokeSearch").style.visibility = "hidden";
  let resistant = event.target.value;
  document.getElementById("allPokemons").className = "";
  document.getElementById("h1").style.display = "block"
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
  document.getElementById("computePokeSearch").style.visibility = "hidden";
  let weaknesses = event.target.value;
  document.getElementById("allPokemons").className = "";
  document.getElementById("h1").style.display = "block";
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


function showCompute() {
  document.getElementById("computePokeSearch").style.visibility = "visible";
  document.getElementById("typesShown").style.display = "none";
  document.getElementById("allPokemons").style.display = "none";
  document.getElementById("pokeSearch1").value = ""
  let div = document.getElementById("pokeResult");
  div.innerHTML = "";
  let div2 = document.getElementById("pokeResultEvolution")
  div2.innerHTML = "";
}

function refreshPage() {
  window.location.reload();
}


let optionList = document.getElementById("list");
optionList.addEventListener("click", searchBox)

function searchBox() {
  let search = document.getElementById("searchBar").value;
  if (search == "") {
    optionList.style.display = "none";
    return
  }
  let result = [];
  for (let i = 0; i < byName.length; i++) {
    if (byName[i].name.startsWith(search)) {
      result.push(byName[i].name);
    }
  }
  document.getElementById("list").style.display = "block";
  if (result.length == 0) {
    optionList.style.display = "none";
  } optionList.size = 3;
  optionList.innerText = null;
  for (let i = 0; i < result.length; i++) {
    showOptions(result[i], result[i]);
  }
  return result;
}
function showOptions(text, val) {
  let createOptions = document.createElement("option");
  optionList.appendChild(createOptions);
  createOptions.text = text;
  createOptions.value = val;
  createOptions.addEventListener("click", setVal);
}
function setVal(selectedVal) {
  let searchPokemon = {}
  document.getElementById("searchBar").value = ""
  optionList.size = 0;
  optionList.innerText = null;
  document.getElementById("list").style.display = "none";
  for (let i = 0; i < byName.length; i++) {
    if (byName[i].name == selectedVal.target.value) {
      searchPokemon = byName[i];
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

function closeModalBox() {
  let openModalBox = document.getElementById("modalBox");
  openModalBox.style.visibility = "hidden";
  const body = document.querySelector("body");
  body.style.overflow = "auto";
}


let optionList1 = document.getElementById("list1");
optionList1.addEventListener("click", showPokeSearch);

function showPokeSearch() {
  let search = document.getElementById("pokeSearch1").value;
  if (search == "") {
    optionList1.style.display = "none";
    return
  }
  let result = [];
  for (let i = 0; i < byName.length; i++) {
    if (byName[i].name.startsWith(search)) {
      result.push(byName[i].name);
    }
  }
  document.getElementById("list1").style.display = "block";
  let div = document.getElementById("pokeResult")
  let div2 = document.getElementById("pokeResultEvolution")
  if (result.length > 5) {
    optionList1.size = 5
    div.innerHTML += ""
    div2.innerHTML += "";
  } else if (result.length == 1) {
    optionList1.size = 2
    div.innerHTM += ""
    div2.innerHTML += "";
  } else if (result.length == 0) {
    optionList1.style.display = "none";
    div.innerHTML = "<p class='noResults notFound'>Pokémon not found, try again</p>"
    div2.innerHTML = "";
  }
  else {
    optionList1.size = result.length
    div.innerHTML += ""
  }

  optionList1.innerText = null;
  for (let i = 0; i < result.length; i++) {
    showOptions1(result[i], result[i]);
  }
  return result;
}
function showOptions1(text, val) {
  let createOptions = document.createElement("option");
  optionList1.appendChild(createOptions);
  createOptions.text = text;
  createOptions.value = val;
  createOptions.addEventListener("click", setVal1);
}
function setVal1(selectedVal) {
  let searchPokemon = {}
  document.getElementById("pokeSearch1").value = ""
  optionList1.size = 0;
  optionList1.innerText = null;
  document.getElementById("list1").style.display = "none";
  for (let i = 0; i < byName.length; i++) {
    if (byName[i].name == selectedVal.target.value) {
      searchPokemon = byName[i];
    }
  }
  let div = document.getElementById("pokeResult")
  let openPokeCard = pokemonCard(searchPokemon, "organized")
  div.innerHTML = openPokeCard // misma estructura que lo tuyo pero en lugar de aparecerme la cajamodal, me sale la tarjeta
  let div2 = document.getElementById("pokeResultEvolution") //en donde aparecerá la  tarjeta de la evolución
  div2.innerHTML = "";
  document.getElementById("computeBtn").addEventListener("click", function () {
    let evolution = searchPokemon.evolution //para acceder a la propiedad evolution
    if (Object.prototype.hasOwnProperty.call(evolution, "next-evolution")) { //checar si mi pokémon tiene la propiedad next-evolution
      let newPokePosition = searchPokemon.evolution["next-evolution"][0]["num"] - 1 //accedo a la base de datos para corroborar cuál es el sig pokémon y le resto 1 porque empieza en la posición 0
      let newPoke = byNumber[newPokePosition]
      div2.style.display = "block" //para que aparezca, porque luego lo quito
      let openNextEv = pokemonCard(newPoke, "organized") // nueva tarjeta con los datos que quiero
      div2.innerHTML = openNextEv
      div2.innerHTML += "<p class='noResults results'>" + searchPokemon.evolution["next-evolution"][0]["candy-cost"] + " " + searchPokemon.evolution.candy + " needed for evolution</p>"
    } else {
      div2.innerHTML = "<p class='noResults noEvolution'>This Pokémon has no evolutions</p>"
    }
  })
}

function refreshPokeSearch() {
  document.getElementById("pokeSearch1").value = ""
  let div = document.getElementById("pokeResult");
  div.innerHTML = "";
  let div2 = document.getElementById("pokeResultEvolution")
  div2.innerHTML = "";
}

//esta función me señala en consola lo que estoy seleccionando y me ha ayudado un buen
/*
window.addEventListener("click", function (e) { 
  this.console.log(e.target);
})
*/