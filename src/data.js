//El corazón de este proyecto es la manipulación de datos a través de arreglos y objetos.

// filterData(data, condition): esta función filter o filtrar recibiría la data, 
// y nos retornaría aquellos datos que sí cumplan con la condición.

// sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros. 
// El primer parámetro, data, nos entrega los datos. El segundo parámetro, sortBy, nos dice 
// con respecto a cuál de los campos de la data se quiere ordenar. El tercer parámetro, sortOrder,
//  indica si se quiere ordenar de manera ascendente o descendente.

// computeStats(data): la función compute o calcular, nos permitirá hacer cálculos estadísticos básicos 
// para ser mostrados de acuerdo a la data proporcionada.


export const filmPosters = (movies) => {

  let movie = [movies.poster, movies.title, movies.description, movies.release_date, movies.rt_score];
};

export const cutDescription = (description) => {
  let descriptionLength = description.length;
  if (descriptionLength > 400){
    return description.slice(0, 400) + "..."
  } else{
    return description
  }
};

export const year = (years) => {
  let movieYear =[years.release_date];
  return movieYear;
};

export function yearSorting (a, b) {
  return a - b;
};


//Funcion de flecha scroll(regresa al inicio)
const d=document,
w = window;

export function scrollTopBtn(btn){
  const $scrollBtn = d.querySelector(btn);

  w.addEventListener("scroll", e =>{
  let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
  if(scrollTop > 1000){
   $scrollBtn.classList.remove("hidden");
  }else{
   $scrollBtn.classList.add("hidden");
  }
 });
  d.addEventListener("click", e =>{
    if(e.target.matches(btn)){
      w.scrollTo({
        behavior:"smooth",
        top:0,
      });
    }
  })
}