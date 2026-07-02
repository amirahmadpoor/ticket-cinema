import { filterCinemasController } from "../../cinema/controllers/cinema.controller.js";
import { handleAnimationLoadedRight } from "../../../animations/animation-loaded.js";
// import { handleFilterCity } from "../../cinema/controllers/cinema.controller.js";

const btnFilter = document.querySelector('.filter__option');
const btnClose = document.querySelector('.btn-close');
const btnApply = document.querySelector('.btn-apply');
const filterBox = document.querySelector('.filter-box');
const filterTitle = document.querySelector('.filter-title');
const filtersWrapper = document.querySelector('.filter-box__filter');
const overlay = document.querySelector('.overlay');
const rangeInput = document.querySelector('#range-price');
const displayValue = document.querySelector('.price-end');

const mapRange = (value, inMin, inMax, outMin, outMax) => {
    return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

const openFilterBox = () => {
    filterBox.classList.add('show');
    overlay.classList.add('active');
}

const closeFilterBox = () => {
    filterBox.classList.remove('show');
    overlay.classList.remove('active');
}

const openFilter = () => {
    filtersWrapper.classList.toggle('show');
}

// const handleFilterCity = () => {
//     const checkboxInput = document.querySelectorAll('.checkbox__input');
//     checkboxInput.forEach(item => {
//         item.addEventListener('change', e => {
//             console.log(e.target.value);

//         })
//     })
// }

export const handelFilterBox = () => {
    btnFilter.addEventListener('click', openFilterBox);
    btnClose.addEventListener('click', closeFilterBox);
    overlay.addEventListener('click', closeFilterBox)
    filterTitle.addEventListener('click', openFilter);
    let price = 0;
    // let city
    rangeInput.addEventListener('input', (e) => {
        const rawValue = parseFloat(e.target.value);

        const mappedValue = mapRange(rawValue, 0, 100, 0, 700000);
        price = mappedValue;
        displayValue.textContent = `${Math.floor(mappedValue).toLocaleString('fa-IR')} تومان`;
    });

    // item.addEventListener('change', e => {

    // })


    btnApply.addEventListener('click', async () => {
        closeFilterBox();
        await filterCinemasController(price);
        // await handleFilterCity()
        handleAnimationLoadedRight();
    })

}
