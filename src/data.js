
// estas funciones son de ejemplo

export const filterDataByType = (datos, tipo) =>{
  return datos.filter(dato => dato.type.includes(tipo));
};

export const filterDataByName = (datos, name) =>{
  return datos.filter(dato => dato.name == name);
  
};

export const filterDataById = (datos, id) =>{
  return datos.filter(dato => dato.num == id);
  
};

//ascendete y  descendente

export const orderAscendente = (datos) => datos.sort((a, b ) => (a.num < b.num  ? -1 : 1));

export const orderDescendente = (datos) => datos.sort((a, b ) => (a.num > b.num  ? -1 : 1));

//a-z
export const orderA_Z = (datos) => datos.sort((a, b ) => (a.name < b.name  ? -1 : 1));

//z-a
export const orderZ_A = (datos) => datos.sort((a, b ) => (a.name > b.name  ? -1 : 1));




