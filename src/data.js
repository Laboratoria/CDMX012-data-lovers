
export const getArray = datos => (Array.isArray(datos) ? datos: Object.values(datos));
// estas funciones son de ejemplo
export const filterDataName = (datos, condition) => getArray(datos).filter(({name}) => name.toLowerCase().startsWith(condition));

//ascendete y  descendente

export const orderAscendente = (datos) => getArray(datos).sort((a, b ) => (a.num < b.num  ? -1 : 1));

export const orderDescendente = (datos) => getArray(datos).sort((a, b ) => (a.num > b.num  ? -1 : 1));

//a-z
export const orderA_Z = (datos) => getArray(datos).sort((a, b ) => (a.name < b.name  ? -1 : 1));

//z-a
export const orderZ_A = (datos) => getArray(datos).sort((a, b ) => (a.name > b.name  ? -1 : 1));



export const anotherExample = () => {
  return 'OMG';
};
