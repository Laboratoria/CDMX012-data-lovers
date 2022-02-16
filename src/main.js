import dataPokemon from './data.js';
import data from './data/pokemon/pokemon.js';

const byName= dataPokemon.byName(data);
const byNumber= dataPokemon.byNumber(data);
const pokemonTypes= dataPokemon.pokemonTypesObject();

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



function refreshPage(){
  window.location.reload(); //vuelve a cargar la página al inicio
}

function pokemonCard(pokemon, type){
  let resultado= "";
  resultado+='<div class= "' + type + ' flexBox" id="singlePokemon">' 
  resultado+="<p>"+ pokemon.num + "</p>"
  resultado+= "<img src='"+ pokemon.img+"'></img>"
  resultado+= "<p>" + pokemon.name + "</p>" 
  resultado+="</div>" 
  return resultado 
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
    let resultado =pokemonCard(byNumber[i], "organized");
     div.innerHTML+=resultado; 
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
     let resultado =pokemonCard(byName[i], "organized");
      div.innerHTML+=resultado; 
   }
 }
  
function showTypeBox(){
  document.getElementById("typesShown").style.display="block"
  let div= document.getElementById("infoBox")
  div.innerHTML=""; 
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
    let resultado =pokemonCard(pokemonTypes.fire[i], "fire");
     div.innerHTML+=resultado; 
  }
  
  let sinlsglePokemon = document.getElementsByClassName("flexbox");
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
    let resultado =pokemonCard(pokemonTypes.water[i], "water");
    div.innerHTML+=resultado;
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
   let resultado =pokemonCard(pokemonTypes.water[i], "ice"); 
    div.innerHTML+=resultado;
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
    let resultado =pokemonCard(pokemonTypes.ghost[i], "ghost");
    div.innerHTML+=resultado;
  }
}
function htmlStructureDragon(){
  document.getElementById("h1").innerHTML= "DRAGÓN";
  document.getElementById("allPokemons").style.background= "linear-gradient( to top, #F8453B,#F8453B,#2CA4D5,#2CA4D5)";
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  for(let i=0; i<pokemonTypes.dragon.length; i++){
    let resultado =pokemonCard(pokemonTypes.dragon[i], "dragon");
    div.innerHTML+=resultado;
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
    let resultado =pokemonCard(pokemonTypes.bug[i], "bug");
    div.innerHTML+=resultado;
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
    let resultado =pokemonCard(pokemonTypes.electric[i], "electric");
    div.innerHTML+=resultado;
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
    let resultado =pokemonCard(pokemonTypes.grass[i], "grass");
    div.innerHTML+=resultado;
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
    let resultado =pokemonCard(pokemonTypes.normal[i], "normal");
    div.innerHTML+=resultado;
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
    let resultado =pokemonCard(pokemonTypes.rock[i], "rock");
    div.innerHTML+=resultado;
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
    let resultado =pokemonCard(pokemonTypes.dark[i], "dark");
    div.innerHTML+=resultado;
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
    let resultado =pokemonCard(pokemonTypes.fairy[i], "fairy");
    div.innerHTML+=resultado;
  }
}
function htmlStructureFlying(){
  document.getElementById("h1").innerHTML= "VOLADOR";
  document.getElementById("allPokemons").style.background= "linear-gradient( to top, #C4C4C4,#C4C4C4,#00BFFF, #00BFFF)";
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  for(let i=0; i<pokemonTypes.flying.length; i++){
    let resultado =pokemonCard(pokemonTypes.flying[i], "flying");
    div.innerHTML+=resultado;
  }
}
function htmlStructureGround(){
  document.getElementById("h1").innerHTML= "TIERRA";
  document.getElementById("allPokemons").style.background= "linear-gradient( to top, #AE9B2B,#AE9B2B,#FAE300, #FAE300)";
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  for(let i=0; i<pokemonTypes.ground.length; i++){
    let resultado =pokemonCard(pokemonTypes.ground[i], "ground");
    div.innerHTML+=resultado;
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
    let resultado =pokemonCard(pokemonTypes.poison[i], "poison");
    div.innerHTML+=resultado;
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
    let resultado =pokemonCard(pokemonTypes.psychic[i], "psychic");
    div.innerHTML+=resultado;
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
    let resultado =pokemonCard(pokemonTypes.steel[i], "steel");
    div.innerHTML+=resultado;
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
    let resultado =pokemonCard(pokemonTypes.fighting[i], "fighting");
    div.innerHTML+=resultado;
  }
}










 

 
