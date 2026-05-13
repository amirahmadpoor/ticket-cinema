export function initMovieDescription({ description, writers }) {

    const summeryText = document.querySelector('.summery__text');
    const directorName = document.querySelector('.director__name');
    const writersName = document.querySelector('.writers__name');

    summeryText.innerHTML = description;
    writersName.innerHTML = writers.map(writer => writer.name).join(' - ');
    // directorName.innerHTML = result.director.name;
}




