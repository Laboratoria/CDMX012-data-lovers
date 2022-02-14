// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

/*aquí comienza mi prueba-eli*/
export const alphabeticOrder = (resultsData) => resultsData.sort((character1, character2) => {
  return ( character1.name < character2.name )?-1:1 //algoritmo de ordenamiento

 }) 