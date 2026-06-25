const landingTitle = document.querySelector('.advert__title');
const landingText = document.querySelector('.advert__text');
const landingCountMovie = document.querySelector('.statistics__movie');
const landingCountCinema = document.querySelector('.statistics__cinema');
const landingCountHappy = document.querySelector('.statistics__happy');
let typeTitle = 'همین حالا بلیط فیلم خود را رزرو کنید!';
let typeText = 'جدیدترین فیلم‌ها را در سینماهای مورد علاقه‌تان تماشا کنید';
let typeTitleIndex = 0;
let typeTextIndex = 0;

function typeWriter(title, titleIndex, text, textIndex) {
    if (titleIndex < title.length) {
        landingTitle.innerHTML += title[titleIndex];
        titleIndex++;
    }
    if (titleIndex === title.length && textIndex < text.length) {
        landingText.innerHTML += text[textIndex];
        textIndex++;
    }
    setTimeout(() => {
        typeWriter(title, titleIndex, text, textIndex);
    }, 80);
}

function makeCounter(max, elem) {
    let counter = 0;
    const interval = setInterval(() => {
        if (counter === max) {
            clearInterval(interval);
        }
        elem.innerHTML = counter;
        counter++;
    }, 0.5);
}
export function initStatistics(movies, cinemas) {
    typeWriter(typeTitle, typeTitleIndex, typeText, typeTextIndex);
    makeCounter(movies.length, landingCountMovie);
    makeCounter(cinemas.length, landingCountCinema);
    makeCounter(1000, landingCountHappy);
}