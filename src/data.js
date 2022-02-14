const order = {

    filterData: (data, filter, ) => {

        let info = [];

        if (filter === 'title') {
            data.films.forEach((item) => {
                const infoFilter = {};
                infoFilter.poster = item.poster;
                infoFilter.title = item.title;
                infoFilter.release_date = item.release_date;
                infoFilter.rt_score = item.rt_score;
                info.push(infoFilter);
            });
        } else if (filter === 'people' || filter === 'vehicles' || filter === 'locations') {
            data.films.forEach((item) => {
                for (let j = 0; j < item[filter].length; j++) {
                    const infoFilter = {};
                    infoFilter.img = item[filter][j].img;
                    infoFilter.name = item[filter][j].name;
                    infoFilter.title = item.title;
                    info.push(infoFilter);
                }
            });
        }
        return info;
    },
};

export default order;
