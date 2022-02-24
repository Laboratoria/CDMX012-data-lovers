/*global Chart*/

import {
    filterDataByName,filterDataByType, filterDataById, calculateDataByStats, orderAscendente, orderDescendente, orderAZ, orderZA
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
videoPokemon.autoplay = "autoplay";
videoPokemon.muted="muted"
videoPokemon.controls="controls";
principalContainer.appendChild(containerVideo);
containerVideo.appendChild(videoPokemon);

const dataPokemon = data.pokemon;

function pokemon(arreglo){

    for(let i=0; i<arreglo.length; i++){

        //contenedor general
        let containerGeneralCard=document.createElement("div");
        containerGeneralCard.classList.add("general-card-container");

        //contenedor white
        let containerExternalCard=document.createElement("div");
        containerExternalCard.classList.add("card-container");

        //Crear div con una clase para la imagen
        let classImagePokemon=document.createElement("div");
        let imagePokemon=document.createElement("img");
        classImagePokemon.classList.add("image-pokemon");
        let image=arreglo[i].img;
        imagePokemon.src= image;
        classImagePokemon.appendChild(imagePokemon);

        //contenedor black
        let containerInternalCard=document.createElement("div");
        containerInternalCard.classList.add("caracter-pokemon");

        //crear div con una clase para el nombre
        let namePokemon=document.createElement("div");
        namePokemon.classList.add("name-pokemon");
        let names= arreglo[i].name;
        namePokemon.innerText=`${names.charAt(0).toUpperCase() + names.slice(1)}`;

        //crear div con una clase para el identificador
        let idPokemon=document.createElement("div");
        idPokemon.classList.add("id-pokemon");
        let identifier= arreglo[i].num;
        idPokemon.innerText=`# ${identifier}`;

        //crear div con una clase para los tipos
        let titleTypePokemon = document.createElement("div");
        titleTypePokemon.classList.add("type-pokemon");
        let typePokemon = document.createElement("div");
        typePokemon.classList.add("type-pokemon");
        let typePokemon2 = document.createElement("div");
        typePokemon2.classList.add("type-pokemon");
        let types= arreglo[i].type;

        if(types.length == 1){
            titleTypePokemon.innerText='Type: ';
            typePokemon.innerText=`${types[0].charAt(0).toUpperCase() + types[0].slice(1)}`;
            styleType(types[0], typePokemon);
        }
        else {
            titleTypePokemon.innerText='Type: ';
            typePokemon.innerText=`${types[0].charAt(0).toUpperCase() + types[0].slice(1)}`;
            styleType(types[0], typePokemon);
            typePokemon2.innerText=`${types[1].charAt(0).toUpperCase() + types[1].slice(1)}`;
            styleType2(types[1],typePokemon2);
        }

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

        //boton de mas informacion
        let buttonMoreInformation = document.createElement("button");
        buttonMoreInformation.classList.add("btn-More-Information");

        //Datos de pokemon del reverso del contenedor
        let encounterOne = arreglo[i].encounter['base-flee-rate'];
        let encounterTwo = arreglo[i].encounter['base-capture-rate'];
        encounterPokemon.innerText =`\n -Encounter: \n Base Flee Rate: ${encounterOne} \n Base Capture Rate: ${encounterTwo}`;

        let spawned = arreglo[i]['spawn-chance'];
        spawnChancePokemon.innerText =`\n -Spawn Chance: ${spawned}`;

        let raritys = arreglo[i]['pokemon-rarity'];
        rarityPokemon.innerText =` \n -Rarity: ${raritys.charAt(0).toUpperCase() + raritys.slice(1)}`;

        buttonMoreInformation.innerHTML = "More information";

        containerExternalCard.appendChild(classImagePokemon);
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

            //container de tarjeta principal
            let pokemonContainer = document.createElement("div");
            pokemonContainer.classList.add("pokemon-container");

            //Contenederes de la informacion sobre cada pokemon
            let boxPokemon = document.createElement("div");
            boxPokemon.classList.add("box-pokemon");

            let boxImagePokemon=document.createElement("div");
            boxImagePokemon.classList.add("box-image-pokemon");

            let informationPokemon = document.createElement("div");
            informationPokemon.classList.add("information-pokemon");

            //descripcion
            let aboutPokemon = document.createElement("div");
            aboutPokemon.classList.add("about-pokemon");

            //generacion
            let generationPokemon = document.createElement("div");
            generationPokemon.classList.add("generation-pokemon");

            //peso
            let weightPokemon = document.createElement("div");
            weightPokemon.classList.add("weight-pokemon");

            //altura
            let heightPokemon = document.createElement("div");
            heightPokemon.classList.add("height-pokemon");

            //estadisticas
            let statsGeneralPokemon =document.createElement("div");
            statsGeneralPokemon.classList.add("stats-general-pokemon");
            let statsPokemon = document.createElement("canvas");
            statsPokemon.classList.add("stats-pokemon");
            statsPokemon.style.display="flex";

            //botones
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

            let statsPokemonCanvas = statsPokemon.getContext("2d");
            let stats = arreglo[i].stats;

            let imageRabbit = document.createElement("img");
            imageRabbit.classList.add("image-rabbit");
            imageRabbit.src ='./icon/rabbitBall.gif';



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
                    title: {
                        display: true,
                        text: 'POKEMON STATS GRAPH'
                    },
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

            btnCalculate.innerHTML = "Battle";
            btnCalculate.addEventListener("click", ()=>{

                principalContainer.innerHTML="";

                let identifierFilter= pokemon(filterDataById(dataPokemon, identifier))
                identifierFilter;

                let btnRandom= document.createElement("button");
                btnRandom.classList.add("btn-random");
                btnRandom.innerText="Random";
                principalContainer.appendChild(btnRandom);

                let imageQuestion= document.createElement("img");
                imageQuestion.classList.add("image-question");
                imageQuestion.src='./icon/pokemonQuestion.gif';
                principalContainer.appendChild(imageQuestion);

                btnRandom.addEventListener("click", ()=>{

                    let imageVS= document.createElement("img");
                    imageVS.classList.add("image-vs");
                    imageVS.src='./icon/giphy (2).gif';
                    principalContainer.appendChild(imageVS);

                    //Escoger un pokemon random para batalla
                    const idInt= parseInt(arreglo[i].num);
                    let randomn= Math.ceil(Math.random(idInt)*251);
                    let randomStr= "" + randomn.toString();
                    let pad = "000";
                    let randomStrEnd = pad.substring(0, pad.length - randomStr.length) + randomStr;
                    let randomFilter= pokemon(filterDataById(dataPokemon, randomStrEnd));
                    randomFilter;

                    let containerBattle=document.createElement("div");
                    containerBattle.classList.add("container-battle");

                    let boxStatsGeneralPokemon=document.createElement("div");
                    boxStatsGeneralPokemon.classList.add("box-stats-general");

                    let boxStatsRandomPokemon=document.createElement("div");
                    boxStatsRandomPokemon.classList.add("box-stats-random");

                    let messageBattleContainer =document.createElement("div");
                    messageBattleContainer.classList.add("message-battle-container");

                    let imagePikachu= document.createElement("img");
                    imagePikachu.classList.add("image-pikachu");
                    imagePikachu.src='./icon/pikachu.gif';

                    principalContainer.appendChild(containerBattle);
                    containerBattle.appendChild(messageBattleContainer);
                    containerBattle.appendChild(boxStatsGeneralPokemon);
                    containerBattle.appendChild(boxStatsRandomPokemon);
                    principalContainer.appendChild(imagePikachu);
                    containerBattle.appendChild(btnReset);

                    imageQuestion.classList.add('hide');
                    btnRandom.classList.add('hide');

                    let statsGeneral= (arreglo[i].stats);
                    boxStatsGeneralPokemon.innerText = ` Stats: \n\n - Base Attack: ${statsGeneral["base-attack"]} \n\n  - Base Defense: ${statsGeneral["base-defense"]} \n\n - Base Stamina: ${statsGeneral["base-stamina"]}`;

                    let statsRandom= (arreglo[randomStrEnd-1].stats);
                    boxStatsRandomPokemon.innerText = ` Stats: \n\n - Base Attack: ${statsRandom["base-attack"]} \n\n  - Base Defense: ${statsRandom["base-defense"]} \n\n - Base Stamina: ${statsRandom["base-stamina"]}`;
                    //console.log(typeof(calculateDataByStats(statsGeneral, statsRandom)));

                    if (calculateDataByStats(statsGeneral, statsRandom) > 0   ){
                        messageBattleContainer.innerText =` Win ${names.charAt(0).toUpperCase() + names.slice(1)}`;
                    }
                    else if (calculateDataByStats(statsGeneral, statsRandom) < 0 ){
                        messageBattleContainer.innerText=` Win ${arreglo[randomStrEnd-1].name.charAt(0).toUpperCase() + arreglo[randomStrEnd-1].name.slice(1)}`
                    }
                    else{
                        messageBattleContainer.innerText=" It is a Draw"
                    }
                })
            })
            btnBack.innerHTML = "Back";

            btnBack.addEventListener('click', () => {
                principalContainer.innerHTML = '';
                pokemon(dataPokemon);
            })

            let weaknesses = arreglo[i].weaknesses;
            weaknessesPokemon.innerText ="\n Weaknesses: ";
            weaknesses.map(element => {
                let box = document.createElement('div');
                box.classList.add(element);
                box.appendChild(document.createTextNode(element.charAt(0).toUpperCase() + element.slice(1)))
                weaknessesPokemon.appendChild(box);
            });

            let resistant = arreglo[i].resistant;
            resistantPokemon.innerText ="\n Resistant: ";
            resistant.map(element => {
                let box = document.createElement('div')
                box.classList.add(element)
                box.appendChild(document.createTextNode(element.charAt(0).toUpperCase() + element.slice(1)))
                resistantPokemon.appendChild(box);
            });

            principalContainer.appendChild(pokemonContainer);

            pokemonContainer.appendChild(boxPokemon);
            pokemonContainer.appendChild(informationPokemon);
            pokemonContainer.appendChild(buttonsPokemon);

            boxPokemon.appendChild(boxImagePokemon);
            boxPokemon.appendChild(statsGeneralPokemon);
            statsGeneralPokemon.appendChild(statsPokemon);

            boxImagePokemon.appendChild(namePokemon);
            boxImagePokemon.appendChild(imagePokemon)
            boxImagePokemon.appendChild(idPokemon)

            informationPokemon.appendChild(aboutPokemon);
            informationPokemon.appendChild(generationPokemon);
            informationPokemon.appendChild(weightPokemon);
            informationPokemon.appendChild(heightPokemon);
            informationPokemon.appendChild(imageRabbit);

            buttonsPokemon.appendChild(btnCalculate);
            buttonsPokemon.appendChild(btnBack);

            informationPokemon.appendChild(weaknessesPokemon);
            informationPokemon.appendChild(resistantPokemon);
        });
    }
}

//Funciones de estilos de colores de los tipos de pokemon
function styleType(type, typePokemon){
    typePokemon.classList.add(type);
}

function styleType2(type, typePokemon2){
    typePokemon2.classList.add(type);
}

pokemon(dataPokemon);

// FILTRADO : POR TIPO DE POKEMON
const btnSelectType= document.querySelector(".select-type");
const btnSelectTypeCover= document.querySelector(".select-type-cover");
const listType=document.querySelector(".btn-general-type");

btnSelectType.addEventListener("click", () =>{
    listType.classList.remove("hide");
    btnSelectType.style.visibility = "hidden";
    btnSelectTypeCover.style.visibility = "visible";
});

btnSelectTypeCover.addEventListener("click", () =>{
    listType.classList.add("hide");
    btnSelectTypeCover.style.visibility = "hidden";
    btnSelectType.style.visibility = "visible";
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
    pokemon(filterDataByType(dataPokemon, value));
});
//TIPO WATER
btnTypeWater.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypeWater.getAttribute("name");
    pokemon(filterDataByType(dataPokemon, value));
});
//TIPO BUG
btnTypeBug.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypeBug.getAttribute("name");
    pokemon(filterDataByType(dataPokemon, value));
});
// TIPO GRASS
btnTypeGrass.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypeGrass.getAttribute("name");
    pokemon(filterDataByType(dataPokemon, value));
});
//TIPO DRAGON
btnTypeDragon.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypeDragon.getAttribute("name");
    pokemon(filterDataByType(dataPokemon, value));
});
//TIPO FAIRY
btnTypeFairy.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypeFairy.getAttribute("name");
    pokemon(filterDataByType(dataPokemon, value));
});
//TIPO GHOST
btnTypeGhost.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypeGhost.getAttribute("name");
    pokemon(filterDataByType(dataPokemon, value)); 
});
//TIPO GROUND
btnTypeGround.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypeGround.getAttribute("name");
    pokemon(filterDataByType(dataPokemon, value)); 
});
//TIPO NORMAL
btnTypeNormal.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypeNormal.getAttribute("name");
    pokemon(filterDataByType(dataPokemon, value)); 
});
//TIPO PSYCHIC
btnTypePsychic.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypePsychic.getAttribute("name");
    pokemon(filterDataByType(dataPokemon, value)); 
});
//TIPO STEEL
btnTypeSteel.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypeSteel.getAttribute("name");
    pokemon(filterDataByType(dataPokemon, value)); 
});
//TIPO DARK
btnTypeDark.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypeDark.getAttribute("name");
    pokemon(filterDataByType(dataPokemon, value)); 
});
//TIPO ELECTRIC
btnTypeElectric.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypeElectric.getAttribute("name");
    pokemon(filterDataByType(dataPokemon, value)); 
});
//TIPO FIGHTING
btnTypeFighting.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypeFighting.getAttribute("name");
    pokemon(filterDataByType(dataPokemon, value)); 
});
//TIPO FLYING
btnTypeFlying.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypeFlying.getAttribute("name");
    pokemon(filterDataByType(dataPokemon, value)); 
});
//TIPO ICE
btnTypeIce.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypeIce.getAttribute("name");
    pokemon(filterDataByType(dataPokemon, value)); 
});
//TIPO POISON
btnTypePoison.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypePoison.getAttribute("name");
    pokemon(filterDataByType(dataPokemon, value)); 
});
//TIPO ROCK
btnTypeRock.addEventListener("click", ()=>{
    principalContainer.innerHTML = '';

    let value = btnTypeRock.getAttribute("name");
    pokemon(filterDataByType(dataPokemon, value)); 
});


// FUNCION DE FILTRAR: NOMBRE E ID

//constante buscador y boton de busquedad
const message =document.createElement("div");
const messageImage=document.createElement("img");
const btnReset= document.createElement("button");
const nameBtn=document.createTextNode("Return");
btnReset.appendChild(nameBtn);
btnReset.classList.add("btn-reset");

btnReset.type="submit";

messageImage.classList.add("message-image")
messageImage.src="./icon/404P.PNG"
message.classList.add("message-container");

const inputSearch = document.getElementById("search");
const btnSearch = document.getElementById("search-name-id")
btnSearch.addEventListener("click", () =>{
    principalContainer.innerHTML = '';
    let pokemonDataTotalId= filterDataById(dataPokemon, inputSearch.value);

    let pokemonDataTotal=filterDataByName(dataPokemon, inputSearch.value);

    if (pokemonDataTotal.length===0 && pokemonDataTotalId.length===0){

        principalContainer.appendChild(messageImage);
        principalContainer.appendChild(message);
        principalContainer.append(btnReset);

        message.innerText="NOT FOUND, PLEASE TRY WITH OTHER"

    }
    else{
        message.classList.add("hide");
        pokemon(pokemonDataTotal);
        pokemon(pokemonDataTotalId);
        principalContainer.append(btnReset);
    }
});

btnReset.addEventListener('click', ()=> {
    location.reload();
});

// FUNCION DE ORDENAR: ASCENDENTE Y DESCENDENTE
let orderAsc = true;
let orderDes = true;
let orderAz=true;
let orderZa=true;

const buttonAZ = document.getElementById('orderAZ');
const buttonZA = document.getElementById('orderZA');
const buttonAsc =document.getElementById('orderAscendente')
const buttonDesc = document.getElementById('orderDescendente')


buttonAsc.addEventListener('click', () => {
    principalContainer.innerHTML = '';

    pokemon(orderAscendente(dataPokemon, orderAsc));
    orderAsc != orderAsc;

    buttonAsc.classList.add('hide');
    buttonDesc.classList.remove('hide');

});

buttonDesc.addEventListener('click', () => {

    principalContainer.innerHTML = '';

    pokemon(orderDescendente(dataPokemon, orderDes));
    orderDes != orderDes;

    buttonDesc.classList.add('hide');
    buttonAsc.classList.remove('hide');
});

// FUNCION DE ORDENAR: A-Z Y Z-A
buttonAZ.addEventListener('click', () => {

    principalContainer.innerHTML = '';

    pokemon(orderAZ(dataPokemon, orderAz));
    orderAz != orderAz;

    buttonAZ.classList.add('hide')
    buttonZA.classList.remove('hide')
});

buttonZA.addEventListener('click', () => {

    principalContainer.innerHTML = '';

    pokemon(orderZA(dataPokemon, orderZa));
    orderZa != orderZa;

    buttonZA.classList.add('hide')
    buttonAZ.classList.remove('hide')
});

//Boton de menu pokeball

const btnPrimary = document.querySelector('.btn-pokeball');
const navPrimary = document.querySelector('.top-nav-primary');

btnPrimary.addEventListener("click", ()=>{
    navPrimary.classList.add("show");
});

const login = document.querySelector(".login");
const btnLogin= document.querySelector(".btn-login");

btnLogin.addEventListener("click", ()=>{
    login.style.visibility="visible";
})

const username=document.querySelector(".username");
const btnSend=document.querySelector(".send");

btnSend.addEventListener("click", ()=>{
    let userValue= username.value;
    btnLogin.innerText=`Hello! ${userValue.charAt(0).toUpperCase() + userValue.slice(1)}`;
    btnLogin.style.color="white";
    login.style.visibility="hidden";
})