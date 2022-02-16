import dataPokemon from './data.js';
import data from './data/pokemon/pokemon.js';

const byName= dataPokemon.byName(data);
const byNumber= dataPokemon.byNumber(data);
const pokemonTypes= dataPokemon.pokemonTypesObject(data);

document.getElementById("pokeBall").addEventListener("click", refreshPage);

document.getElementById("pokeNumber").addEventListener("click", showByNumber);
document.getElementById("pokeName").addEventListener("click", showByName);
document.getElementById("pokeType").addEventListener("click", showTypeBox);

document.getElementById("fireType").addEventListener("click", htmlStructureFire);
document.getElementById("waterType").addEventListener("click", htmlStructureWater);
document.getElementById("iceType").addEventListener("click", htmlStructureIce);
document.getElementById("ghostType").addEventListener("click", htmlStructureGhost);
document.getElementById("dragonType").addEventListener("click", htmlStructureDragon);
document.getElementById("bugType").addEventListener("click", htmlStructureBug);
document.getElementById("electricType").addEventListener("click", htmlStructureElectric);
document.getElementById("grassType").addEventListener("click", htmlStructureGrass);
document.getElementById("normalType").addEventListener("click", htmlStructureNormal);
document.getElementById("rockType").addEventListener("click", htmlStructureRock);
document.getElementById("darkType").addEventListener("click", htmlStructureDark);
document.getElementById("fairyType").addEventListener("click", htmlStructureFairy);
document.getElementById("flyingType").addEventListener("click", htmlStructureFlying);
document.getElementById("groundType").addEventListener("click", htmlStructureGround);
document.getElementById("poisonType").addEventListener("click", htmlStructurePoison);
document.getElementById("psychicType").addEventListener("click", htmlStructurePsychic);
document.getElementById("steelType").addEventListener("click", htmlStructureSteel);
document.getElementById("fightingType").addEventListener("click", htmlStructureFighting);
document.getElementById("closeModalBox").addEventListener("click", closeModalBox);



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
  result+="<p class='generationModalBox'>"+Object.values(pokemon.generation)[0]+": "+Object.values(pokemon.generation)[1]+"</p>"
  result+= "<img class='imgModalBox' src='"+ pokemon.img+"'></img>"
  result+="<p class='numModalBox'>"+ pokemon.num + "</p>"
  result+= "<p class='nameModalBox'>" + pokemon.name + "</p>" 
  result+= "<p class='typeModalBox'>" + pokemon.type + "</p>" 
  return result
}

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
  result+= "<p class='quickMoveModalBox'>Quick moves: " + Object.values(pokemon["quick-move"])/*Object.entries(pokemon["quick-move"][0])+"<br> "+ Object.entries(pokemon["quick-move"][1])*/ + "</p>" 
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
  
function htmlStructureFire(){
  document.getElementById("h1").innerHTML= "FUEGO";
  const colorStyle = document.getElementById("allPokemons");
  colorStyle.style.background= "";
  colorStyle.style.backgroundColor= "#FF8523";
  let div= document.getElementById("infoBox")
  div.innerHTML=""; 
  document.getElementById("allPokemons").style.display="block";
  for(let i=0; i<pokemonTypes.fire.length; i++){
    let result =pokemonCard(pokemonTypes.fire[i], "fire");
     div.innerHTML+=result; 
  }
  for (let i= 0; i<pokemonTypes.fire.length; i++){
   let singlePokemon = document.getElementsByClassName("fire")[i];
    singlePokemon.addEventListener("click", function(){
      let openModalBox= document.getElementById("modalBox");
      openModalBox.style.visibility = "visible";
      const body = document.querySelector("body");
      body.style.overflow = "hidden"
      let divLeft= document.getElementById("modalContentLeft")
      divLeft.innerHTML=""; 
      let resultLeft =pokemonModalBoxLeft(pokemonTypes.fire[i]);
      divLeft.innerHTML+=resultLeft; 
      let divRight= document.getElementById("modalContentRight")
      divRight.innerHTML=""; 
      let resultRight =pokemonModalBoxRight(pokemonTypes.fire[i]);
      divRight.innerHTML+=resultRight; 
    });
  }
  
  let singlePokemon = document.getElementsByClassName("flexbox");
  singlePokemon.forEach(pokemon => pokemon.addEventListener('click', () => {
    
  }));
 
}

function htmlStructureWater(){
  document.getElementById("h1").innerHTML= "AGUA";
  const colorStyle = document.getElementById("allPokemons");
  colorStyle.style.background= "";
  colorStyle.style.backgroundColor= "#1D91CA";
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  for(let i=0; i<pokemonTypes.water.length; i++){
    let result =pokemonCard(pokemonTypes.water[i], "water");
    div.innerHTML+=result;
    }
    for (let i= 0; i<pokemonTypes.water.length; i++){
      let singlePokemon = document.getElementsByClassName("water")[i];
       singlePokemon.addEventListener("click", function(){
         let openModalBox= document.getElementById("modalBox");
         openModalBox.style.visibility = "visible";
         const body = document.querySelector("body");
         body.style.overflow = "hidden"
         let divLeft= document.getElementById("modalContentLeft")
         divLeft.innerHTML=""; 
         let resultLeft =pokemonModalBoxLeft(pokemonTypes.water[i]);
         divLeft.innerHTML+=resultLeft; 
         let divRight= document.getElementById("modalContentRight")
         divRight.innerHTML=""; 
         let resultRight =pokemonModalBoxRight(pokemonTypes.water[i]);
         divRight.innerHTML+=resultRight; 
       });
     }
}
  
function htmlStructureIce(){
  document.getElementById("h1").innerHTML= "HIELO";
  const colorStyle = document.getElementById("allPokemons");
  colorStyle.style.background= "";
  colorStyle.style.backgroundColor= "#00C6ED";
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  for(let i=0; i<pokemonTypes.ice.length; i++){
   let result =pokemonCard(pokemonTypes.ice[i], "ice"); 
    div.innerHTML+=result;
  }
  for (let i= 0; i<pokemonTypes.ice.length; i++){
    let singlePokemon = document.getElementsByClassName("ice")[i];
     singlePokemon.addEventListener("click", function(){
       let openModalBox= document.getElementById("modalBox");
       openModalBox.style.visibility = "visible";
       const body = document.querySelector("body");
       body.style.overflow = "hidden"
       let divLeft= document.getElementById("modalContentLeft")
       divLeft.innerHTML=""; 
       let resultLeft =pokemonModalBoxLeft(pokemonTypes.ice[i]);
       divLeft.innerHTML+=resultLeft; 
       let divRight= document.getElementById("modalContentRight")
       divRight.innerHTML=""; 
       let resultRight =pokemonModalBoxRight(pokemonTypes.ice[i]);
       divRight.innerHTML+=resultRight; 
     });
   }
}

function htmlStructureGhost(){
  document.getElementById("h1").innerHTML= "FANTASMA";
  const colorStyle = document.getElementById("allPokemons");
  colorStyle.style.background= "";
  colorStyle.style.backgroundColor= "#8259A7";
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  for(let i=0; i<pokemonTypes.ghost.length; i++){
    let result =pokemonCard(pokemonTypes.ghost[i], "ghost");
    div.innerHTML+=result;
  }
   for (let i= 0; i<pokemonTypes.ghost.length; i++){
    let singlePokemon = document.getElementsByClassName("ghost")[i];
     singlePokemon.addEventListener("click", function(){
       let openModalBox= document.getElementById("modalBox");
       openModalBox.style.visibility = "visible";
       const body = document.querySelector("body");
       body.style.overflow = "hidden"
       let divLeft= document.getElementById("modalContentLeft")
       divLeft.innerHTML=""; 
       let resultLeft =pokemonModalBoxLeft(pokemonTypes.ghost[i]);
       divLeft.innerHTML+=resultLeft; 
       let divRight= document.getElementById("modalContentRight")
       divRight.innerHTML=""; 
       let resultRight =pokemonModalBoxRight(pokemonTypes.ghost[i]);
       divRight.innerHTML+=resultRight; 
     });
   }
}

function htmlStructureDragon(){
  document.getElementById("h1").innerHTML= "DRAGÓN";
  document.getElementById("allPokemons").style.background= "linear-gradient( to top, #F8453B,#F8453B,#2CA4D5,#2CA4D5)";
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  for(let i=0; i<pokemonTypes.dragon.length; i++){
    let result =pokemonCard(pokemonTypes.dragon[i], "dragon");
    div.innerHTML+=result;
  }
  for (let i= 0; i<pokemonTypes.dragon.length; i++){
    let singlePokemon = document.getElementsByClassName("dragon")[i];
     singlePokemon.addEventListener("click", function(){
       let openModalBox= document.getElementById("modalBox");
       openModalBox.style.visibility = "visible";
       const body = document.querySelector("body");
       body.style.overflow = "hidden"
       let divLeft= document.getElementById("modalContentLeft")
       divLeft.innerHTML=""; 
       let resultLeft =pokemonModalBoxLeft(pokemonTypes.dragon[i]);
       divLeft.innerHTML+=resultLeft; 
       let divRight= document.getElementById("modalContentRight")
       divRight.innerHTML=""; 
       let resultRight =pokemonModalBoxRight(pokemonTypes.dragon[i]);
       divRight.innerHTML+=resultRight; 
     });
   }
}

function htmlStructureBug(){
  document.getElementById("h1").innerHTML= "BICHO";
  const colorStyle = document.getElementById("allPokemons");
  colorStyle.style.background= "";
  colorStyle.style.backgroundColor= "#60A62F";
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  for(let i=0; i<pokemonTypes.bug.length; i++){
    let result =pokemonCard(pokemonTypes.bug[i], "bug");
    div.innerHTML+=result;
  }
  for (let i= 0; i<pokemonTypes.bug.length; i++){
    let singlePokemon = document.getElementsByClassName("bug")[i];
     singlePokemon.addEventListener("click", function(){
       let openModalBox= document.getElementById("modalBox");
       openModalBox.style.visibility = "visible";
       const body = document.querySelector("body");
       body.style.overflow = "hidden"
       let divLeft= document.getElementById("modalContentLeft")
       divLeft.innerHTML=""; 
       let resultLeft =pokemonModalBoxLeft(pokemonTypes.bug[i]);
       divLeft.innerHTML+=resultLeft; 
       let divRight= document.getElementById("modalContentRight")
       divRight.innerHTML=""; 
       let resultRight =pokemonModalBoxRight(pokemonTypes.bug[i]);
       divRight.innerHTML+=resultRight; 
     });
   }
} 

function htmlStructureElectric(){
  document.getElementById("h1").innerHTML= "ELÉCTRICO";
  const colorStyle = document.getElementById("allPokemons");
  colorStyle.style.background= "";
  colorStyle.style.backgroundColor= "#F1DA00";
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  for(let i=0; i<pokemonTypes.electric.length; i++){
    let result =pokemonCard(pokemonTypes.electric[i], "electric");
    div.innerHTML+=result;
  }
  for (let i= 0; i<pokemonTypes.electric.length; i++){
    let singlePokemon = document.getElementsByClassName("electric")[i];
     singlePokemon.addEventListener("click", function(){
       let openModalBox= document.getElementById("modalBox");
       openModalBox.style.visibility = "visible";
       const body = document.querySelector("body");
       body.style.overflow = "hidden"
       let divLeft= document.getElementById("modalContentLeft")
       divLeft.innerHTML=""; 
       let resultLeft =pokemonModalBoxLeft(pokemonTypes.electric[i]);
       divLeft.innerHTML+=resultLeft; 
       let divRight= document.getElementById("modalContentRight")
       divRight.innerHTML=""; 
       let resultRight =pokemonModalBoxRight(pokemonTypes.electric[i]);
       divRight.innerHTML+=resultRight; 
     });
   }
}

function htmlStructureGrass(){
  document.getElementById("h1").innerHTML= "PLANTA";
  const colorStyle = document.getElementById("allPokemons");
  colorStyle.style.background= "";
  colorStyle.style.backgroundColor= "#88D438";
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  for(let i=0; i<pokemonTypes.grass.length; i++){
    let result =pokemonCard(pokemonTypes.grass[i], "grass");
    div.innerHTML+=result;
  }
  for (let i= 0; i<pokemonTypes.grass.length; i++){
    let singlePokemon = document.getElementsByClassName("grass")[i];
     singlePokemon.addEventListener("click", function(){
       let openModalBox= document.getElementById("modalBox");
       openModalBox.style.visibility = "visible";
       const body = document.querySelector("body");
       body.style.overflow = "hidden"
       let divLeft= document.getElementById("modalContentLeft")
       divLeft.innerHTML=""; 
       let resultLeft =pokemonModalBoxLeft(pokemonTypes.grass[i]);
       divLeft.innerHTML+=resultLeft; 
       let divRight= document.getElementById("modalContentRight")
       divRight.innerHTML=""; 
       let resultRight =pokemonModalBoxRight(pokemonTypes.grass[i]);
       divRight.innerHTML+=resultRight; 
     });
   }
}

function htmlStructureNormal(){
  document.getElementById("h1").innerHTML= "NORMAL";
  const colorStyle = document.getElementById("allPokemons");
  colorStyle.style.background= "";
  colorStyle.style.backgroundColor= "#A2ACB0";
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  for(let i=0; i<pokemonTypes.normal.length; i++){
    let result =pokemonCard(pokemonTypes.normal[i], "normal");
    div.innerHTML+=result;
  }
  for (let i= 0; i<pokemonTypes.normal.length; i++){
    let singlePokemon = document.getElementsByClassName("normal")[i];
     singlePokemon.addEventListener("click", function(){
       let openModalBox= document.getElementById("modalBox");
       openModalBox.style.visibility = "visible";
       const body = document.querySelector("body");
       body.style.overflow = "hidden"
       let divLeft= document.getElementById("modalContentLeft")
       divLeft.innerHTML=""; 
       let resultLeft =pokemonModalBoxLeft(pokemonTypes.normal[i]);
       divLeft.innerHTML+=resultLeft; 
       let divRight= document.getElementById("modalContentRight")
       divRight.innerHTML=""; 
       let resultRight =pokemonModalBoxRight(pokemonTypes.normal[i]);
       divRight.innerHTML+=resultRight; 
     });
   }
}

function htmlStructureRock(){
  document.getElementById("h1").innerHTML= "ROCA";
  const colorStyle = document.getElementById("allPokemons");
  colorStyle.style.background= "";
  colorStyle.style.backgroundColor= "#A78F00";
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  for(let i=0; i<pokemonTypes.rock.length; i++){
    let result =pokemonCard(pokemonTypes.rock[i], "rock");
    div.innerHTML+=result;
  }
  for (let i= 0; i<pokemonTypes.rock.length; i++){
    let singlePokemon = document.getElementsByClassName("rock")[i];
     singlePokemon.addEventListener("click", function(){
       let openModalBox= document.getElementById("modalBox");
       openModalBox.style.visibility = "visible";
       const body = document.querySelector("body");
       body.style.overflow = "hidden"
       let divLeft= document.getElementById("modalContentLeft")
       divLeft.innerHTML=""; 
       let resultLeft =pokemonModalBoxLeft(pokemonTypes.rock[i]);
       divLeft.innerHTML+=resultLeft; 
       let divRight= document.getElementById("modalContentRight")
       divRight.innerHTML=""; 
       let resultRight =pokemonModalBoxRight(pokemonTypes.rock[i]);
       divRight.innerHTML+=resultRight; 
     });
   }
}

function htmlStructureDark(){
  document.getElementById("h1").innerHTML= "SINIESTRO";
  const colorStyle = document.getElementById("allPokemons");
  colorStyle.style.background= "";
  colorStyle.style.backgroundColor= "#707070";
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  for(let i=0; i<pokemonTypes.dark.length; i++){
    let result =pokemonCard(pokemonTypes.dark[i], "dark");
    div.innerHTML+=result;
  }
  for (let i= 0; i<pokemonTypes.dark.length; i++){
    let singlePokemon = document.getElementsByClassName("dark")[i];
     singlePokemon.addEventListener("click", function(){
       let openModalBox= document.getElementById("modalBox");
       openModalBox.style.visibility = "visible";
       const body = document.querySelector("body");
       body.style.overflow = "hidden"
       let divLeft= document.getElementById("modalContentLeft")
       divLeft.innerHTML=""; 
       let resultLeft =pokemonModalBoxLeft(pokemonTypes.dark[i]);
       divLeft.innerHTML+=resultLeft; 
       let divRight= document.getElementById("modalContentRight")
       divRight.innerHTML=""; 
       let resultRight =pokemonModalBoxRight(pokemonTypes.dark[i]);
       divRight.innerHTML+=resultRight; 
     });
   }
}

function htmlStructureFairy(){
  document.getElementById("h1").innerHTML= "HADA";
  const colorStyle = document.getElementById("allPokemons");
  colorStyle.style.background= "";
  colorStyle.style.backgroundColor= "#FFAFEA";
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  for(let i=0; i<pokemonTypes.fairy.length; i++){
    let result =pokemonCard(pokemonTypes.fairy[i], "fairy");
    div.innerHTML+=result;
  }
  for (let i= 0; i<pokemonTypes.fairy.length; i++){
    let singlePokemon = document.getElementsByClassName("fairy")[i];
     singlePokemon.addEventListener("click", function(){
       let openModalBox= document.getElementById("modalBox");
       openModalBox.style.visibility = "visible";
       const body = document.querySelector("body");
       body.style.overflow = "hidden"
       let divLeft= document.getElementById("modalContentLeft")
       divLeft.innerHTML=""; 
       let resultLeft =pokemonModalBoxLeft(pokemonTypes.fairy[i]);
       divLeft.innerHTML+=resultLeft; 
       let divRight= document.getElementById("modalContentRight")
       divRight.innerHTML=""; 
       let resultRight =pokemonModalBoxRight(pokemonTypes.fairy[i]);
       divRight.innerHTML+=resultRight; 
     });
   }
}

function htmlStructureFlying(){
  document.getElementById("h1").innerHTML= "VOLADOR";
  document.getElementById("allPokemons").style.background= "linear-gradient( to top, #C4C4C4,#C4C4C4,#00BFFF, #00BFFF)";
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  for(let i=0; i<pokemonTypes.flying.length; i++){
    let result =pokemonCard(pokemonTypes.flying[i], "flying");
    div.innerHTML+=result;
  }
  for (let i= 0; i<pokemonTypes.flying.length; i++){
    let singlePokemon = document.getElementsByClassName("flying")[i];
     singlePokemon.addEventListener("click", function(){
       let openModalBox= document.getElementById("modalBox");
       openModalBox.style.visibility = "visible";
       const body = document.querySelector("body");
       body.style.overflow = "hidden"
       let divLeft= document.getElementById("modalContentLeft")
       divLeft.innerHTML=""; 
       let resultLeft =pokemonModalBoxLeft(pokemonTypes.flying[i]);
       divLeft.innerHTML+=resultLeft; 
       let divRight= document.getElementById("modalContentRight")
       divRight.innerHTML=""; 
       let resultRight =pokemonModalBoxRight(pokemonTypes.flying[i]);
       divRight.innerHTML+=resultRight; 
     });
   }
}

function htmlStructureGround(){
  document.getElementById("h1").innerHTML= "TIERRA";
  document.getElementById("allPokemons").style.background= "linear-gradient( to top, #AE9B2B,#AE9B2B,#FAE300, #FAE300)";
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  for(let i=0; i<pokemonTypes.ground.length; i++){
    let result =pokemonCard(pokemonTypes.ground[i], "ground");
    div.innerHTML+=result;
  }
  for (let i= 0; i<pokemonTypes.ground.length; i++){
    let singlePokemon = document.getElementsByClassName("ground")[i];
     singlePokemon.addEventListener("click", function(){
       let openModalBox= document.getElementById("modalBox");
       openModalBox.style.visibility = "visible";
       const body = document.querySelector("body");
       body.style.overflow = "hidden"
       let divLeft= document.getElementById("modalContentLeft")
       divLeft.innerHTML=""; 
       let resultLeft =pokemonModalBoxLeft(pokemonTypes.ground[i]);
       divLeft.innerHTML+=resultLeft; 
       let divRight= document.getElementById("modalContentRight")
       divRight.innerHTML=""; 
       let resultRight =pokemonModalBoxRight(pokemonTypes.ground[i]);
       divRight.innerHTML+=resultRight; 
     });
   }
}

function htmlStructurePoison(){
  document.getElementById("h1").innerHTML= "VENENO";
  const colorStyle = document.getElementById("allPokemons");
  colorStyle.style.background= "";
  colorStyle.style.backgroundColor= "#C672CD";
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  for(let i=0; i<pokemonTypes.poison.length; i++){
    let result =pokemonCard(pokemonTypes.poison[i], "poison");
    div.innerHTML+=result;
  }
  for (let i= 0; i<pokemonTypes.poison.length; i++){
    let singlePokemon = document.getElementsByClassName("poison")[i];
     singlePokemon.addEventListener("click", function(){
       let openModalBox= document.getElementById("modalBox");
       openModalBox.style.visibility = "visible";
       const body = document.querySelector("body");
       body.style.overflow = "hidden"
       let divLeft= document.getElementById("modalContentLeft")
       divLeft.innerHTML=""; 
       let resultLeft =pokemonModalBoxLeft(pokemonTypes.poison[i]);
       divLeft.innerHTML+=resultLeft; 
       let divRight= document.getElementById("modalContentRight")
       divRight.innerHTML=""; 
       let resultRight =pokemonModalBoxRight(pokemonTypes.poison[i]);
       divRight.innerHTML+=resultRight; 
     });
   }
}

function htmlStructurePsychic(){
  document.getElementById("h1").innerHTML= "PSÍQUICO";
  const colorStyle = document.getElementById("allPokemons");
  colorStyle.style.background= "";
  colorStyle.style.backgroundColor= "#FF44B9";
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  for(let i=0; i<pokemonTypes.psychic.length; i++){
    let result =pokemonCard(pokemonTypes.psychic[i], "psychic");
    div.innerHTML+=result;
  }
  for (let i= 0; i<pokemonTypes.psychic.length; i++){
    let singlePokemon = document.getElementsByClassName("psychic")[i];
     singlePokemon.addEventListener("click", function(){
       let openModalBox= document.getElementById("modalBox");
       openModalBox.style.visibility = "visible";
       const body = document.querySelector("body");
       body.style.overflow = "hidden"
       let divLeft= document.getElementById("modalContentLeft")
       divLeft.innerHTML=""; 
       let resultLeft =pokemonModalBoxLeft(pokemonTypes.psychic[i]);
       divLeft.innerHTML+=resultLeft; 
       let divRight= document.getElementById("modalContentRight")
       divRight.innerHTML=""; 
       let resultRight =pokemonModalBoxRight(pokemonTypes.psychic[i]);
       divRight.innerHTML+=resultRight; 
     });
   }
}

function htmlStructureSteel(){
  document.getElementById("h1").innerHTML= "ACERO";
  const colorStyle = document.getElementById("allPokemons");
  colorStyle.style.background= "";
  colorStyle.style.backgroundColor= "#97B8B9";
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  for(let i=0; i<pokemonTypes.steel.length; i++){
    let result =pokemonCard(pokemonTypes.steel[i], "steel");
    div.innerHTML+=result;
  }
  for (let i= 0; i<pokemonTypes.steel.length; i++){
    let singlePokemon = document.getElementsByClassName("steel")[i];
     singlePokemon.addEventListener("click", function(){
       let openModalBox= document.getElementById("modalBox");
       openModalBox.style.visibility = "visible";
       const body = document.querySelector("body");
       body.style.overflow = "hidden"
       let divLeft= document.getElementById("modalContentLeft")
       divLeft.innerHTML=""; 
       let resultLeft =pokemonModalBoxLeft(pokemonTypes.steel[i]);
       divLeft.innerHTML+=resultLeft; 
       let divRight= document.getElementById("modalContentRight")
       divRight.innerHTML=""; 
       let resultRight =pokemonModalBoxRight(pokemonTypes.steel[i]);
       divRight.innerHTML+=resultRight; 
     });
   }
}

function htmlStructureFighting(){
  document.getElementById("h1").innerHTML= "LUCHA";
  const colorStyle = document.getElementById("allPokemons");
  colorStyle.style.background= "";
  colorStyle.style.backgroundColor= "#E35201";
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  for(let i=0; i<pokemonTypes.fighting.length; i++){
    let result =pokemonCard(pokemonTypes.fighting[i], "fighting");
    div.innerHTML+=result;
  }
  for (let i= 0; i<pokemonTypes.fighting.length; i++){
    let singlePokemon = document.getElementsByClassName("fighting")[i];
     singlePokemon.addEventListener("click", function(){
       let openModalBox= document.getElementById("modalBox");
       openModalBox.style.visibility = "visible";
       const body = document.querySelector("body");
       body.style.overflow = "hidden"
       let divLeft= document.getElementById("modalContentLeft")
       divLeft.innerHTML=""; 
       let resultLeft =pokemonModalBoxLeft(pokemonTypes.fighting[i]);
       divLeft.innerHTML+=resultLeft; 
       let divRight= document.getElementById("modalContentRight")
       divRight.innerHTML=""; 
       let resultRight =pokemonModalBoxRight(pokemonTypes.fighting[i]);
       divRight.innerHTML+=resultRight; 
     });
   }
}





window.addEventListener("click", function(e){
  this.console.log(e.target);
})






 

 
