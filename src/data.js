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
  let movie = [movies.poster, movies.title, movies.description, movies.release_date];
  return movie;
};

export const cutDescription = (description) => {
  let descriptionLength = description.length;
  if (descriptionLength > 400){
    return description.slice(0, 400) + "..."
  } else{
    return description
  }
}

