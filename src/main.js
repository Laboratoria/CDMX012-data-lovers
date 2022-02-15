/*global Chart*/


import {
    filterDataByName,filterDataByType, filterDataById, orderAscendente, orderDescendente, orderA_Z, orderZ_A
} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//contenedor principal
const principalContainer= document.querySelector(".cards-containers-principal");

const containerVideo = document.createElement("div");
containerVideo.classList.add("video");
let videoPokemon = document.createElement("video");
videoPokemon.classList.add("video-Pokemon");
videoPokemon.src = "./icon/¡Pokémon UNITE llega este verano!.webm";
videoPokemon.controls="controls";
principalContainer.appendChild(containerVideo);
containerVideo.appendChild(videoPokemon);

const datos = data.pokemon;


function pokemon(arreglo){
    
    for(let i=0; i<arreglo.length; i++){

        //contenedor general
        let containerGeneralCard=document.createElement("div");
        containerGeneralCard.classList.add("general-card-container");

        //contenedor white
        let containerExternalCard=document.createElement("div");
        containerExternalCard.classList.add("card-container");
        
        //Crear div con una clase para la imagen
        let classImagenPokemon=document.createElement("div");
        let imagenPokemon=document.createElement("img");
        classImagenPokemon.classList.add("imagen-pokemon");

        //contenedor black
        let containerInternalCard=document.createElement("div");
        containerInternalCard.classList.add("caracter-pokemon");

        //crear div con una clase para el nombre
        let namePokemon=document.createElement("div");
        namePokemon.classList.add("name-pokemon");

        //crear div con una clase para el identificador
        let idPokemon=document.createElement("div");
        idPokemon.classList.add("id-pokemon");

        //crear div con una clase para los tipos
        let titleTypePokemon = document.createElement("div");
        titleTypePokemon.classList.add("type-pokemon");
        let typePokemon = document.createElement("div");
        typePokemon.classList.add("type-pokemon");
        let typePokemon2 = document.createElement("div");
        typePokemon2.classList.add("type-pokemon");

        //crear div con una clase para los back container
        let containerBackCard=document.createElement("div");
        containerBackCard.classList.add("back-card-container");

        //crear div con una clase para las debilidades de los pokemon
        let encounterPokemon = document.createElement("div");
        encounterPokemon.classList.add("encounter-pokemon");

        //crear div con una clase para las resistencia de los pokemon
        let spawnChancePokemon = document.createElement("div");
        spawnChancePokemon.classList.add("spawn-chance-pokemon");

        //crear div con una clase para las rarezas de los pokemon
        let rarityPokemon = document.createElement("div");
        rarityPokemon.classList.add("rarity-pokemon");

        let buttonMoreInformation = document.createElement("button");
        buttonMoreInformation.classList.add("btn-More-Information");



        let imagen=arreglo[i].img;
        imagenPokemon.src= imagen;
        classImagenPokemon.appendChild(imagenPokemon);

        let nombre= arreglo[i].name;
        namePokemon.innerText=`${nombre.charAt(0).toUpperCase() + nombre.slice(1)}`;

        let identificador= arreglo[i].num;
        idPokemon.innerText=`# ${identificador}`;

        let tipos= arreglo[i].type;

        
        if(tipos.length == 1){
            titleTypePokemon.innerText='Type: ';
            typePokemon.innerText=`${tipos[0].charAt(0).toUpperCase() + tipos[0].slice(1)}`;
            styleType(tipos[0], typePokemon);
        }
        else {
            titleTypePokemon.innerText='Type: ';
            typePokemon.innerText=`${tipos[0].charAt(0).toUpperCase() + tipos[0].slice(1)}`;
            styleType(tipos[0], typePokemon);
            typePokemon2.innerText=`${tipos[1].charAt(0).toUpperCase() + tipos[1].slice(1)}`;
            styleType2(tipos[1],typePokemon2);
        }

        let encounterOne = arreglo[i].encounter['base-flee-rate'];
        let encounterTwo = arreglo[i].encounter['base-capture-rate'];
        encounterPokemon.innerText =`\n -Encounter: \n Base Flee Rate: ${encounterOne} \n Base Capture Rate: ${encounterTwo}`;

        let aparicion = arreglo[i]['spawn-chance'];
        spawnChancePokemon.innerText =`\n -Spawn Chance: ${aparicion}`;

        let rareza = arreglo[i]['pokemon-rarity'];
        rarityPokemon.innerText =` \n -Rarity: ${rareza.charAt(0).toUpperCase() + rareza.slice(1)}`;
        buttonMoreInformation.innerHTML = "More information";
        
        containerExternalCard.appendChild(classImagenPokemon);
        containerInternalCard.appendChild(namePokemon);
        containerInternalCard.appendChild(idPokemon);

        containerInternalCard.appendChild(titleTypePokemon);
        titleTypePokemon.appendChild(typePokemon);
        titleTypePokemon.appendChild(typePokemon2);

        containerExternalCard.appendChild(containerInternalCard);
        containerBackCard.appendChild(encounterPokemon);
        containerBackCard.appendChild(spawnChancePokemon);
        containerBackCard.appendChild(rarityPokemon);
        containerBackCard.appendChild(buttonMoreInformation);

        containerGeneralCard.appendChild(containerExternalCard)
        containerGeneralCard.appendChild(containerBackCard)

        principalContainer.appendChild(containerGeneralCard);

        buttonMoreInformation.addEventListener('click', () => {
            
            principalContainer.innerHTML = '';
            


            let pokemonContainer = document.createElement("div");
            pokemonContainer.classList.add("pokemon-container");
        
            let boxPokemon = document.createElement("div");
            boxPokemon.classList.add("box-pokemon");
        
            let boxImagenPokemon=document.createElement("div");
            boxImagenPokemon.classList.add("box-imagen-pokemon");
        
            let informationPokemon = document.createElement("div");
            informationPokemon.classList.add("information-pokemon");
        
            let aboutPokemon = document.createElement("div");
            aboutPokemon.classList.add("about-pokemon");
        
            let generationPokemon = document.createElement("div");
            generationPokemon.classList.add("generation-pokemon");
        
            let weightPokemon = document.createElement("div");
            weightPokemon.classList.add("weight-pokemon");
        
            let heightPokemon = document.createElement("div");
            heightPokemon.classList.add("height-pokemon");
        
            let evolutionsPokemon = document.createElement("div");
            evolutionsPokemon.classList.add("evolutions-pokemon");
        
            let statsGeneralPokemon =document.createElement("div");
            statsGeneralPokemon.classList.add("stats-general-pokemon");
            let statsPokemon = document.createElement("canvas");
            statsPokemon.classList.add("stats-pokemon");
        
            let buttonsPokemon = document.createElement("div");
            buttonsPokemon.classList.add("buttons-pokemon");
        
            let btnCalculate = document.createElement("button");
            btnCalculate.classList.add("btn-calculate");
        
            let btnBack = document.createElement("button");
            btnBack.classList.add("btn-back");

            let weaknessesPokemon = document.createElement("div");
            weaknessesPokemon.classList.add("weaknesses-pokemon");
    
            //crear div con una clase para las resistencia de los pokemon
            let resistantPokemon = document.createElement("div");
            resistantPokemon.classList.add("resistant-pokemon");
        
            let about = arreglo[i].about;
            aboutPokemon.innerText =`${about}`;
        
            let generationNum = arreglo[i].generation.num;
            let generationName = arreglo[i].generation.name;
            generationPokemon.innerText =`\n ${generationNum.charAt(0).toUpperCase() + generationNum.slice(1)}, Name : ${generationName.charAt(0).toUpperCase() + generationName.slice(1)} `;
        
            let weight = arreglo[i].size.weight;
            weightPokemon.innerText =`\n Weight: ${weight}`;
        
            let height = arreglo[i].size.height ;
            heightPokemon.innerText =`\n Height: ${height}`;
        
            let evolutions = arreglo[i].evolution;
            evolutionsPokemon.innerText =`Evolutions: ${Object.keys(evolutions)} : ${Object.values(evolutions)}`;
            //console.log(evolutions)
        
            let statsPokemonCanvas = statsPokemon.getContext("2d");
            let stats = arreglo[i].stats;
            //console.log(Object.keys(stats));
        
            const statsX= Object.keys(stats);
            const statsY={
                data: Object.values(stats), 
                backgroundColor: ['rgb(203, 67, 53)', 'rgb(241, 196, 15 )', 'rgb(36, 113, 163)', 'rgb(220, 118, 51)', 'rgb(26, 188, 156 )'], // Color de fondo
                borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
                borderWidth: 1,// Ancho del borde
            };

            new Chart(statsPokemonCanvas, {
                type: 'bar',// Tipo de gráfica
                data: {
                    labels: statsX,
                    datasets: [
                        statsY,
                    ]
                },
                options: {
                    responsive: true,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                    },
                }
            });
    
            
                    
            
        
            btnCalculate.innerHTML = "Calculate";
            btnBack.innerHTML = "Back";
            
            btnBack.addEventListener('click', () => {
                principalContainer.innerHTML = '';
                pokemon(datos);

            })


            let debilidad = arreglo[i].weaknesses;
            weaknessesPokemon.innerText ="\n Weaknesses: ";
            debilidad.map(element => {
                let box = document.createElement('div');
                box.classList.add(element);
                box.appendChild(document.createTextNode(element.charAt(0).toUpperCase() + element.slice(1)))
                weaknessesPokemon.appendChild(box);
            });

            let resistencia = arreglo[i].resistant;
            resistantPokemon.innerText ="\n Resistencia: ";
            resistencia.map(element => {
                let box = document.createElement('div')
                box.classList.add(element)
                box.appendChild(document.createTextNode(element.charAt(0).toUpperCase() + element.slice(1)))
                resistantPokemon.appendChild(box);
            });

            principalContainer.appendChild(pokemonContainer);
        
            pokemonContainer.appendChild(boxPokemon);
            pokemonContainer.appendChild(informationPokemon);
            pokemonContainer.appendChild(evolutionsPokemon);
            pokemonContainer.appendChild(buttonsPokemon);
        
            boxPokemon.appendChild(boxImagenPokemon);
            boxPokemon.appendChild(statsGeneralPokemon);
            statsGeneralPokemon.appendChild(statsPokemon);
        
            boxImagenPokemon.appendChild(namePokemon);
            boxImagenPokemon.appendChild(imagenPokemon)
            boxImagenPokemon.appendChild(idPokemon)
        
            informationPokemon.appendChild(aboutPokemon);
            informationPokemon.appendChild(generationPokemon);
            informationPokemon.appendChild(weightPokemon);
            informationPokemon.appendChild(heightPokemon);
        
            buttonsPokemon.appendChild(btnCalculate);
            buttonsPokemon.appendChild(btnBack);

            informationPokemon.appendChild(weaknessesPokemon);
            informationPokemon.appendChild(resistantPokemon);         
        
        });
        




    }
}

function styleType(tipo, typePokemon){
    typePokemon.classList.add(tipo);
}

function styleType2(tipo, typePokemon2){
    typePokemon2.classList.add(tipo);
}

pokemon(datos);


// FILTRADO : POR TIPO DE POKEMON

const btnSelectType= document.querySelector(".select-type");
const listType=document.querySelector(".btn-general-type");


btnSelectType.addEventListener("click", () =>{
    listType.classList.remove("hide");
});









const btnTypeFire= document.getElementById("fire");
const btnTypeWater= document.getElementById("water");
const btnTypeBug= document.getElementById("bug");
const btnTypeGrass= document.getElementById("grass");
const btnTypeDragon= document.getElementById("dragon");
const btnTypeFairy= document.getElementById("fairy");
const btnTypeGhost= document.getElementById("ghost");
const btnTypeGround= document.getElementById("ground");
const btnTypeNormal= document.getElementById("normal");
const btnTypePsychic= document.getElementById("psychic");
const btnTypeSteel= document.getElementById("steel");
const btnTypeDark= document.getElementById("dark");
const btnTypeElectric= document.getElementById("electric");
const btnTypeFighting= document.getElementById("fighting");
const btnTypeFlying= document.getElementById("flying");
const btnTypeIce= document.getElementById("ice");
const btnTypePoison= document.getElementById("poison");
const btnTypeRock= document.getElementById("rock");


//TIPO FIRE
btnTypeFire.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypeFire.getAttribute("name");
    pokemon(filterDataByType(datos, value));
});
//TIPO WATER
btnTypeWater.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypeWater.getAttribute("name");
    pokemon(filterDataByType(datos, value));
});
//TIPO BUG
btnTypeBug.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypeBug.getAttribute("name");
    pokemon(filterDataByType(datos, value));
});
// TIPO GRASS
btnTypeGrass.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypeGrass.getAttribute("name");
    pokemon(filterDataByType(datos, value));
});
//TIPO DRAGON
btnTypeDragon.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypeDragon.getAttribute("name");
    pokemon(filterDataByType(datos, value));
});
//TIPO FAIRY
btnTypeFairy.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypeFairy.getAttribute("name");
    pokemon(filterDataByType(datos, value));
});
//TIPO GHOST
btnTypeGhost.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypeGhost.getAttribute("name");
    pokemon(filterDataByType(datos, value)); 
});
//TIPO GROUND
btnTypeGround.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypeGround.getAttribute("name");
    pokemon(filterDataByType(datos, value)); 
});
//TIPO NORMAL
btnTypeNormal.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypeNormal.getAttribute("name");
    pokemon(filterDataByType(datos, value)); 
});
//TIPO PSYCHIC
btnTypePsychic.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypePsychic.getAttribute("name");
    pokemon(filterDataByType(datos, value)); 
});
//TIPO STEEL
btnTypeSteel.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypeSteel.getAttribute("name");
    pokemon(filterDataByType(datos, value)); 
});
//TIPO DARK
btnTypeDark.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypeDark.getAttribute("name");
    pokemon(filterDataByType(datos, value)); 
});
//TIPO ELECTRIC
btnTypeElectric.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypeElectric.getAttribute("name");
    pokemon(filterDataByType(datos, value)); 
});
//TIPO FIGHTING
btnTypeFighting.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypeFighting.getAttribute("name");
    pokemon(filterDataByType(datos, value)); 
});
//TIPO FLYING
btnTypeFlying.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypeFlying.getAttribute("name");
    pokemon(filterDataByType(datos, value)); 
});
//TIPO ICE
btnTypeIce.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypeIce.getAttribute("name");
    pokemon(filterDataByType(datos, value)); 
});
//TIPO POISON
btnTypePoison.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypePoison.getAttribute("name");
    pokemon(filterDataByType(datos, value)); 
});
//TIPO ROCK
btnTypeRock.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypeRock.getAttribute("name");
    pokemon(filterDataByType(datos, value)); 
});






// FUNCION DE FILTRAR: NOMBRE E ID

//constante buscador y boton de busquedad
const inputSearch = document.getElementById("search");
const btnSearch = document.getElementById("search-name-id")
btnSearch.addEventListener("click", () =>{
    principalContainer.innerHTML = '';
    pokemon(filterDataByName(datos, inputSearch.value));
    pokemon(filterDataById(datos, inputSearch.value));
});


// FUNCION DE ORDENAR: ASCENDENTE Y DESCENDENTE 
let orderAsc = true;

const buttonAZ = document.getElementById('orderA_Z');
const buttonZA = document.getElementById('orderZ_A');
const buttonAsc =document.getElementById('orderAscendente')
const buttonDesc = document.getElementById('orderDescendente')


buttonAsc.addEventListener('click', () => {
    principalContainer.innerHTML = '';

    pokemon(orderAscendente(datos, orderAsc));
    orderAsc != orderAsc;
    
    buttonAsc.classList.add('hide');
    buttonDesc.classList.remove('hide');

});

buttonDesc.addEventListener('click', () => {

    principalContainer.innerHTML = '';

    pokemon(orderDescendente(datos, orderAsc));
    orderAsc != orderAsc;

    buttonDesc.classList.add('hide');
    buttonAsc.classList.remove('hide');
});

// FUNCION DE ORDENAR: A-Z Y Z-A

buttonAZ.addEventListener('click', () => {

    principalContainer.innerHTML = '';

    pokemon(orderA_Z(datos, orderAsc));
    orderAsc != orderAsc;

    buttonAZ.classList.add('hide')
    buttonZA.classList.remove('hide')
});

buttonZA.addEventListener('click', () => {

    principalContainer.innerHTML = '';

    pokemon(orderZ_A(datos, orderAsc));
    orderAsc != orderAsc;

    buttonZA.classList.add('hide')
    buttonAZ.classList.remove('hide')

});


