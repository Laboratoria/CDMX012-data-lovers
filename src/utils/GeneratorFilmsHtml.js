export function GeneratorFilmsHtml(film) {
    return `
    <article>
        <div class="portada">
            <img class="img-fluid" src="${film.poster}">
        </div>
        <div class="info">
            <p class="filmName1">${film.title}</p>
            <p class="year">${film.release_date}</p>
            <p class="score">
                <svg xmlns="http://www.w3.org/2000/svg" class="star-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                ${Number(film.rt_score) / 10}
            </p>
        </div>
    </article>
    `;
}

export function generatorOtherHtml(film) {
    return `
    <article>
        <div class="portada">
        <img class="img-fluid" src="${film.img}">
        </div>
        <div class="info">
            <p class="name">${film.name}</p>
            <p class="filmName2">${film.title}</p>
        </div>
    </article>
            `;
}

export function llenarSelector(filtro) {

    if (filtro === 'title') {
        return  `
            <option value="" selected disabled hidden>Sort by</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
            <option value="recent">Recent</option>
            <option value="old">Old</option>
            <option value="highScore">High-score</option>
            <option value="lowScore">Low-score</option>
        `;

    } else {
        return `
            <option value="" selected disabled hidden>Sort by</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
        `;
    }
} 