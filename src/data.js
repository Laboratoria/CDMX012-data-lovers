const order = {
  filterData: (data, filter) => {
    let infoArray = [];

    if (filter === 'title') {
      for (let i = 0; i < data.films.length; i++) {
        infoArray.push(data.films[i][filter]);
      }
    } else if (filter === 'people' || filter === 'vehicles' || filter === 'locations') {
      for (let i = 0; i < data.films.length; i++) {
        for (let j = 0; j < data.films[i][filter].length; j++) {
          infoArray.push(data.films[i][filter][j].name);
        }
      }
    } else if (filter === 'staff') {
      for (let i = 0; i < data.films.length; i++) {
        if (!infoArray.includes(data.films[i].director)) {
          infoArray.push(data.films[i].director);
        }
        if (!infoArray.includes(data.films[i].producer)) {
          infoArray.push(data.films[i].producer);
        }
      }
    }

    return infoArray;
  },
};

export default order;
