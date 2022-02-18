/************AQUI SACAMOS IMAGENES ************************/
//showPokemons(data.pokemon);

function showPokemons(pokemons) {
  //esta funcion almacena la vista de todos los pokemons

  const rootElement = document.getElementById("showData"); //esta variable ayuda a que la vista de los pokemons cambie de acuerdo a los datos que se desean ver
  removeChildNodes(rootElement); //ejecuta la funcion para eliminar sus hijos

  //esta variable va a almacenar la informacion de todos los pokemons

  for (let property of pokemons) {
    //bucle for accede a la data

    let identificador = "pokeCards"; //nombre de la clase
    let idDirection = "#" + `${property.name}`;
    let idSeccion = property.num;
    let modalDataOpen = "idModal"; //**********tal vez pueda ir en la seccion o en el num, ya que num es el id de cada iteracion

    const modalWindow = document.createElement("a");
    modalWindow.setAttribute("href", idDirection);

    const cardSpace = document.createElement("section"); //crea una sección
    cardSpace.setAttribute("class", identificador); //crea el atributo clase identificador='pokeCards'
    cardSpace.setAttribute("id", idSeccion);

    const cardName = document.createElement("p"); //crea el elemento parrafo
    cardName.innerHTML =
      `${property.name[0].toUpperCase() + property.name.slice(1)}`; // cambia el texto vacio del parrafo por la propiedad name convirtiendo la primera letra del array en mayuscula y concatenando desde la posicion 1 con slice

    const cardNum = document.createElement("p"); //crea el elemento parrafo
    cardNum.innerHTML = property.num ; 
    cardNum.setAttribute("class","classTypeNumber")// cambia el texto vacio del parrafo por la propiedad numero

    const cardType = document.createElement("p");
    const bottonTypePokemon = document.createTextNode("Type: " + `${property.type.join(" ")}`)
    cardType.appendChild(bottonTypePokemon)
    cardType.setAttribute("class", "typeClass")


    const pokemonImag = document.createElement("img"); //crea un Elemento de tipó imagen
    pokemonImag.setAttribute("src", `${property.img}`); //le asigna el atributo de src con su propiedad que es el link
    pokemonImag.setAttribute("data-open", modalDataOpen);

    cardSpace.appendChild(cardNum); //cardSpace es el nodo padre y cardNumes el nodo hijo
    cardSpace.appendChild(pokemonImag); //cardSpace es el nodo padre y apokemonImag es el nodo hijo
    cardSpace.appendChild(cardName); //cardSpace es el nodo padre y cardName es el nodo hijo
    cardSpace.appendChild(cardType);
    modalWindow.appendChild(cardSpace);

    document.getElementById("showData").appendChild(modalWindow); //show data es el nodo padre y cardSpace el nodo hijo.

    /***********mostrando ventana modal */

    let aboutPokemon = property.about;
    let resistantPokemon = property.resistant;
    let weaknessesPokemon = property.weaknesses;
    let typePokemon = property.type;
    let sizePokemon = property.size;

    const showModal = document.createElement("section");
    showModal.setAttribute("id", `${property.name}`);
    showModal.setAttribute("class", "modal");

    const allContent = document.createElement("article");
    allContent.setAttribute("id", "idModal");
    allContent.setAttribute("class", "modalDialog");

    const buttonModal = document.createElement("a");
    const textButton = document.createTextNode("X");
    buttonModal.appendChild(textButton);
    buttonModal.setAttribute("href", "#");
    buttonModal.setAttribute("class", "closeModal");
    buttonModal.setAttribute("id", "buttonModal");

    const contentTitle = document.createElement("h2");
    contentTitle.innerHTML = property.name.toUpperCase();
    contentTitle.setAttribute("class", "modalTitle");

    const contentImag = document.createElement("img"); //crea un Elemento de tipo imagen
    contentImag.setAttribute("src", `${property.img}`); //le asigna el atributo de src con su propiedad que es el link
    //pokemonImag.setAttribute("data-open", modalDataOpen);

    const contentAbout = document.createElement("p");
    contentAbout.innerHTML =
      " <strong>Info: <br> </strong>" +
      " <strong> Description <br></strong>" +
      aboutPokemon +
      " <strong><br>Type: <br> </strong>" +
      typePokemon +
      " <strong><br>Resistant: <br> </strong>" +
      resistantPokemon +
      " <strong><br>Weaknesses:<br> </strong> " +
      weaknessesPokemon; +
      " <strong><br>Size:<br> </strong> " +
      sizePokemon;

    allContent.appendChild(buttonModal);
    allContent.appendChild(contentTitle);
    allContent.appendChild(contentImag);
    allContent.appendChild(contentAbout);
    showModal.appendChild(allContent);
    document.getElementById("showData").appendChild(showModal);
  }
}

//funcion que elimine a los hijos para limpiar pag, esto cambia al seleccionar
function removeChildNodes(parent) {
  while (parent.firstChild) {
    //Condicion: mientras el parametro parent encuentre que tiene un hijo ejecuta el bucle
    parent.removeChild(parent.firstChild); // remueve/quita/elimina un hijo a parent(elimina el primer hijo)
  }
}

export default showPokemons;
