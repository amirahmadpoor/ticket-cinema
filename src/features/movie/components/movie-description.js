export function initMovieDescription({ description, writers, directors }) {

    const summeryText = document.querySelector('.summery__text');
    const directorName = document.querySelector('.director__name');
    const writersName = document.querySelector('.writers__name');

    summeryText.innerHTML = description;
    writersName.innerHTML = writers.map(writer => writer.name).join(' - ');
    directorName.innerHTML = directors.map(director => director.name).join('');
    console.log(directors[0]);
    
}