// FUNCIÓN DE FILTRADO POR TIPO DE POKEMON
export const filterDataByType = (datos, tipo) =>{
  return datos.filter(dato => dato.type.includes(tipo));
};

// FUNCIÓN DE FILTRADO POR NOMBRE DE POKEMON
export const filterDataByName = (datos, name) =>{
  return datos.filter(dato => dato.name == name.toLowerCase());
};

// FUNCIÓN DE FILTRADO POR ID DE POKEMON
export const filterDataById = (datos, id) =>{
  return datos.filter(dato => dato.num == id);
};

export const calculateDataByStats =(datosOne, datosTwo) =>{
  const averageDataOne= ((parseInt((datosOne["base-attack"])) + parseInt(datosOne["base-defense"]) + parseInt(datosOne["base-stamina"]))/3);
  const averageDataTwo =((parseInt((datosTwo["base-attack"])) + parseInt(datosTwo["base-defense"]) + parseInt(datosTwo["base-stamina"]))/3);
  return (averageDataOne-averageDataTwo);
}

//FUNCIÓN DE ORDENAR DE ASCENDENTE
export const orderAscendente = (datos) => datos.sort((a, b ) => (a.num < b.num  ? -1 : 1));

//FUNCIÓN DE ORDENAR DE DESCENDENTE
export const orderDescendente = (datos) => datos.sort((a, b ) => (a.num > b.num  ? -1 : 1));

//FUNCIÓN DE ORDENAR DE ALFABETICAMENTE (A-Z)
export const orderAZ = (datos) => datos.sort((a, b ) => (a.name < b.name  ? -1 : 1));

//FUNCIÓN DE ORDENAR DE ALFABETICAMENTE (Z-A)
export const orderZA = (datos) => datos.sort((a, b ) => (a.name > b.name  ? -1 : 1));




