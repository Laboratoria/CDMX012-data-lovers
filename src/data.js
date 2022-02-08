
export const getArray = datos => (Array.isArray(datos) ? datos: Object.values(datos));
// estas funciones son de ejemplo
export const filterDataName = (datos, condition) => getArray(datos).filter(({name}) => name.toLowerCase().startsWith(condition));
  


export const anotherExample = () => {
  return 'OMG';
};
