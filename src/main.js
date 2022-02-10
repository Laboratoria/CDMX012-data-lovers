

import dataPokemon from './data.js';
import data from './data/pokemon/pokemon.js';

document.getElementById("numerico").addEventListener("click", showNumbers );
document.getElementById("nombre").addEventListener("click", showName);
document.getElementById("tipo").addEventListener("click", showTypeBox);
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

/*Aqui arriba sólo las mande a llamar con su funcion y su id*/




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
  
  function showTypeBox(){
    document.getElementById("type").style.display="block"
  }
/*Metí todo el esqueleto que ya habíamos realizado en una función(pokemonCar)
 para poderlo utilizar en todos los tipos, ya que iban a tener el mismo estilo, 
 sólo cambia el color y  los pokemones*/
  function pokemonCard(pokemon, type){
    let resultado= "";
    resultado+='<div class= "' + type + ' flexBox">' 
    resultado+="<p>"+ pokemon.num + "</p>"
    resultado+= "<img src='"+ pokemon.img+"'></img>"
    resultado+= "<p>" + pokemon.name + "</p>" 
    resultado+="</div>"
  
  return resultado 
  
  }
  /*Cree la misma estructura que ya habíamos realizado jusntas y la replique
   por cada tipo cambiado solo el nombre de las funciones y 
   la especificación del tipo*/
  function htmlStructureFire(){
  let div= document.getElementById("infoBox")
  div.innerHTML=""; /*agregue este div innerhtml vacio para que 
  se limpie al momento de seleccionar otro tipo*/
  document.getElementById("allPokemons").style.display="block";


  for(let i=0; i<pokemonTypes.fire.length; i++){
  let resultado =pokemonCard(pokemonTypes.fire[i], "fire");
  
  div.innerHTML+=resultado;
  }
}
function htmlStructureWater(){
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  
  
  for(let i=0; i<pokemonTypes.water.length; i++){
    let resultado =pokemonCard(pokemonTypes.water[i], "water");
    
    div.innerHTML+=resultado;
    }
}
  
function htmlStructureIce(){
      let div= document.getElementById("infoBox")
      div.innerHTML="";
      document.getElementById("allPokemons").style.display="block";
      
      
      for(let i=0; i<pokemonTypes.ice.length; i++){
        let resultado =pokemonCard(pokemonTypes.water[i], "ice");
        
        div.innerHTML+=resultado;
      }
}
function htmlStructureGhost(){
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  
  
  for(let i=0; i<pokemonTypes.ghost.length; i++){
    let resultado =pokemonCard(pokemonTypes.ghost[i], "ghost");
    
    div.innerHTML+=resultado;
  }
}
function htmlStructureDragon(){
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  
  
  for(let i=0; i<pokemonTypes.dragon.length; i++){
    let resultado =pokemonCard(pokemonTypes.dragon[i], "dragon");
    
    div.innerHTML+=resultado;
  }
}

function htmlStructureBug(){
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  
  
  for(let i=0; i<pokemonTypes.bug.length; i++){
    let resultado =pokemonCard(pokemonTypes.bug[i], "bug");
    
    div.innerHTML+=resultado;
  }
} 
function htmlStructureElectric(){
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  
  
  for(let i=0; i<pokemonTypes.electric.length; i++){
    let resultado =pokemonCard(pokemonTypes.electric[i], "electric");
    
    div.innerHTML+=resultado;
  }
}
function htmlStructureGrass(){
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  
  
  for(let i=0; i<pokemonTypes.grass.length; i++){
    let resultado =pokemonCard(pokemonTypes.grass[i], "grass");
    
    div.innerHTML+=resultado;
  }
}
function htmlStructureNormal(){
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  
  
  for(let i=0; i<pokemonTypes.normal.length; i++){
    let resultado =pokemonCard(pokemonTypes.normal[i], "normal");
    
    div.innerHTML+=resultado;
  }
}
function htmlStructureRock(){
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  
  
  for(let i=0; i<pokemonTypes.rock.length; i++){
    let resultado =pokemonCard(pokemonTypes.rock[i], "rock");
    
    div.innerHTML+=resultado;
  }
}
function htmlStructureDark(){
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  
  
  for(let i=0; i<pokemonTypes.dark.length; i++){
    let resultado =pokemonCard(pokemonTypes.dark[i], "dark");
    
    div.innerHTML+=resultado;
  }
}
function htmlStructureFairy(){
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  
  
  for(let i=0; i<pokemonTypes.fairy.length; i++){
    let resultado =pokemonCard(pokemonTypes.fairy[i], "fairy");
    
    div.innerHTML+=resultado;
  }
}
function htmlStructureFlying(){
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  
  
  for(let i=0; i<pokemonTypes.flying.length; i++){
    let resultado =pokemonCard(pokemonTypes.flying[i], "flying");
    
    div.innerHTML+=resultado;
  }
}
function htmlStructureGround(){
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  
  
  for(let i=0; i<pokemonTypes.ground.length; i++){
    let resultado =pokemonCard(pokemonTypes.ground[i], "ground");
    
    div.innerHTML+=resultado;
  }
}
function htmlStructurePoison(){
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  
  
  for(let i=0; i<pokemonTypes.poison.length; i++){
    let resultado =pokemonCard(pokemonTypes.poison[i], "poison");
    
    div.innerHTML+=resultado;
  }
}
function htmlStructurePsychic(){
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  
  
  for(let i=0; i<pokemonTypes.psychic.length; i++){
    let resultado =pokemonCard(pokemonTypes.psychic[i], "psychic");
    
    div.innerHTML+=resultado;
  }
}
function htmlStructureSteel(){
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  
  
  for(let i=0; i<pokemonTypes.steel.length; i++){
    let resultado =pokemonCard(pokemonTypes.steel[i], "steel");
    
    div.innerHTML+=resultado;
  }
}
function htmlStructureFighting(){
  let div= document.getElementById("infoBox")
  div.innerHTML="";
  document.getElementById("allPokemons").style.display="block";
  
  
  for(let i=0; i<pokemonTypes.fighting.length; i++){
    let resultado =pokemonCard(pokemonTypes.fighting[i], "fighting");
    
    div.innerHTML+=resultado;
  }
}









const pokemonTypes= dataPokemon.tPokemon(data);
  const byName= dataPokemon.byName(data);
 const arrayNumbers= dataPokemon.pokemonNumber(data);
 

 
