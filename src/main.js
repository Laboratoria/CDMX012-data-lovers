import {getArray, filterDataName, orderAscendente, orderDescendente, orderA_Z, orderZ_A} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
console.log(getArray, filterDataName);
//console.log(example, data);
//contenedor principal
const principalContainer= document.querySelector(".cards-containers-principal");

const datos = data.pokemon;
//constante de longitud
const lengthData=datos.length;

const inputSearch = document.getElementById("buscador");

inputSearch.addEventListener("input", filterData);





function pokemon(){

    for(let i=0; i<lengthData; i++){

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
        let weaknessesPokemon = document.createElement("div");
        weaknessesPokemon.classList.add("weaknesses-pokemon");

        //crear div con una clase para las resistencia de los pokemon
        let resistantPokemon = document.createElement("div");
        resistantPokemon.classList.add("resistant-pokemon");

        //crear div con una clase para las rarezas de los pokemon
        let rarityPokemon = document.createElement("div");
        rarityPokemon.classList.add("rarity-pokemon");

        let buttonMoreInformation = document.createElement("button");
        buttonMoreInformation.classList.add("btn-More-Information");



        let imagen=datos[i].img;
        imagenPokemon.src= imagen;
        classImagenPokemon.appendChild(imagenPokemon);

        let nombre= datos[i].name;
        namePokemon.innerText=`${nombre.charAt(0).toUpperCase() + nombre.slice(1)}`;

        let identificador= datos[i].num;
        idPokemon.innerText=`# ${identificador}`;

        let tipos= datos[i].type;
        
        if(tipos.length == 1){
            titleTypePokemon.innerText='Tipo: ';
            typePokemon.innerText=`${tipos[0].charAt(0).toUpperCase() + tipos[0].slice(1)}`;
            styleType();
        }
        else {
            titleTypePokemon.innerText='Tipo: ';
            typePokemon.innerText=`${tipos[0].charAt(0).toUpperCase() + tipos[0].slice(1)}`;
            styleType();
            typePokemon2.innerText=`${tipos[1].charAt(0).toUpperCase() + tipos[1].slice(1)}`;
            styleType2();
        }

        let debilidad = datos[i].weaknesses;
        weaknessesPokemon.innerText =`Debilidad: ${debilidad}`;

        let resistencia = datos[i].resistant;
        resistantPokemon.innerText =`Resistencia: ${resistencia}`;

        let rareza = datos[i]['pokemon-rarity'];
        rarityPokemon.innerText =`Rareza: ${rareza.charAt(0).toUpperCase() + rareza.slice(1)}`;
        buttonMoreInformation.innerHTML = "More information";
        
        containerExternalCard.appendChild(classImagenPokemon);
        containerInternalCard.appendChild(namePokemon);
        containerInternalCard.appendChild(idPokemon);

        containerInternalCard.appendChild(titleTypePokemon);
        titleTypePokemon.appendChild(typePokemon);
        titleTypePokemon.appendChild(typePokemon2);

        containerExternalCard.appendChild(containerInternalCard);
        containerBackCard.appendChild(weaknessesPokemon);
        containerBackCard.appendChild(resistantPokemon);
        containerBackCard.appendChild(rarityPokemon);
        containerBackCard.appendChild(buttonMoreInformation);

        containerGeneralCard.appendChild(containerExternalCard)
        containerGeneralCard.appendChild(containerBackCard)

        principalContainer.appendChild(containerGeneralCard);
        



        function styleType(){

            if(tipos[0] =='bug'){
                typePokemon.classList.add('bug');
            }
            else if(tipos[0] =='dragon'){
                typePokemon.classList.add('dragon');
            }
            else if(tipos[0] =='fire'){
                typePokemon.classList.add('fire');
            }
            else if(tipos[0] =='fairy'){
                typePokemon.classList.add('fairy');
            }
            else if(tipos[0] =='ghost'){
                typePokemon.classList.add('ghost');
            }
            else if(tipos[0] =='ground'){
                typePokemon.classList.add('ground');
            }
            else if(tipos[0] =='normal'){
                typePokemon.classList.add('normal');
            }
            else if(tipos[0] =='psychic'){
                typePokemon.classList.add('psychic');
            }
            else if(tipos[0] =='steel'){
                typePokemon.classList.add('steel');
            }
            else if(tipos[0] =='dark'){
                typePokemon.classList.add('dark');
            }
            else if(tipos[0] =='electric'){
                typePokemon.classList.add('electric');
            }
            else if(tipos[0] =='fighting'){
                typePokemon.classList.add('fighting');
            }
            else if(tipos[0] =='flying'){
                typePokemon.classList.add('flying');
            }
            else if(tipos[0] =='grass'){
                typePokemon.classList.add('grass');
            }
            else if(tipos[0] =='ice'){
                typePokemon.classList.add('ice');
            }
            else if (tipos[0]=='poison'){
                typePokemon.classList.add('poison');
            }
            else if (tipos[0] =='rock'){
                typePokemon.classList.add('rock');
            }
            else if (tipos[0] =='water'){
                typePokemon.classList.add('water');
            }
        }

        function styleType2(){

            if(tipos[1] =='bug'){
                typePokemon2.classList.add('bug');
            }
            else if(tipos[1] =='dragon'){
                typePokemon2.classList.add('dragon');
            }
            else if(tipos[1] =='fire'){
                typePokemon2.classList.add('fire');
            }
            else if(tipos[1] =='fairy'){
                typePokemon2.classList.add('fairy');
            }
            else if(tipos[1] =='ghost'){
                typePokemon2.classList.add('ghost');
            }
            else if(tipos[1] =='ground'){
                typePokemon2.classList.add('ground');
            }
            else if(tipos[1] =='normal'){
                typePokemon2.classList.add('normal');
            }
            else if(tipos[1] =='psychic'){
                typePokemon2.classList.add('psychic');
            }
            else if(tipos[1] =='steel'){
                typePokemon2.classList.add('steel');
            }
            else if(tipos[1] =='dark'){
                typePokemon2.classList.add('dark');
            }
            else if(tipos[1] =='electric'){
                typePokemon2.classList.add('electric');
            }
            else if(tipos[1] =='fighting'){
                typePokemon2.classList.add('fighting');
            }
            else if(tipos[1] =='flying'){
                typePokemon2.classList.add('flying');
            }
            else if(tipos[1] =='grass'){
                typePokemon2.classList.add('grass');
            }
            else if(tipos[1] =='ice'){
                typePokemon2.classList.add('ice');
            }
            else if (tipos[1] =='poison'){
                typePokemon2.classList.add('poison');
            }
            else if (tipos[1] =='rock'){
                typePokemon2.classList.add('rock');
            }
            else if (tipos[1] =='water'){
                typePokemon2.classList.add('water');
            }
        }
}
}


pokemon();

function filterData(){
    filterDataName(datos, condition)

};


/* FILTRADO: ASCENDENTE Y DESCENDENTE */
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
