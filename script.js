let containers = document.getElementById('containers');
let mushrooms = document.getElementById('mushrooms');
let foodAdditives = document.getElementById('foodAdditives');
let dyes = document.getElementById('dyes');
let seasonings = document.getElementById('seasonings');
let food = document.getElementById('food');
let others = document.getElementById('others');

// containers.style.display = 'none';
// mushrooms.style.display = 'none';
// foodAdditives.style.display = 'none';
// dyes.style.display = 'none';
// seasonings.style.display = 'none';
// food.style.display = 'none';
// others.style.display = 'none';

let arrow1 = document.getElementById('arrow1');
let arrow2 = document.getElementById('arrow2');
let arrow3 = document.getElementById('arrow3');
let arrow4 = document.getElementById('arrow4');
let arrow5 = document.getElementById('arrow5');
let arrow6 = document.getElementById('arrow6');
let arrow7 = document.getElementById('arrow7');

// function reverseArrow1() {
//     if (arrow1.className == 'downArrow') {
//         arrow1.classList = 'topArrow';
//     } else if (arrow1.className == 'topArrow') {
//         arrow1.classList = 'downArrow';
//     }
// }

function containersDisplay() {
    if (containers.className == 'containerOff') {
        containers.classList = 'containerOn';
        arrow1.classList = 'topArrow';
    } else if (containers.className == 'containerOn') {
        containers.classList = 'containerOff';
        arrow1.classList = 'downArrow';
    }
}

function mushroomsDisplay() {
    if (mushrooms.className == 'containerOff') {
        mushrooms.classList = 'containerOn';
        arrow2.classList = 'topArrow';
    } else if (mushrooms.className == 'containerOn') {
        mushrooms.classList = 'containerOff';
        arrow2.classList = 'downArrow';
    }
}

function foodAdditivesDisplay() {
    if (foodAdditives.className == 'containerOff') {
        foodAdditives.classList = 'containerOn';
        arrow3.classList = 'topArrow';
    } else if (foodAdditives.className == 'containerOn') {
        foodAdditives.classList = 'containerOff';
        arrow3.classList = 'downArrow';
    }
}

function dyesDisplay() {
    if (dyes.className == 'containerOff') {
        dyes.classList = 'containerOn';
        arrow4.classList = 'topArrow';
    } else if (dyes.className == 'containerOn') {
        dyes.classList = 'containerOff';
        arrow4.classList = 'downArrow';
    }
}

function seasoningsDisplay() {
    if (seasonings.className == 'containerOff') {
        seasonings.classList = 'containerOn';
        arrow5.classList = 'topArrow';
    } else if (seasonings.className == 'containerOn') {
        seasonings.classList = 'containerOff';
        arrow5.classList = 'downArrow';
    }
}

function foodDisplay() {
    if (food.className == 'containerOff') {
        food.classList = 'containerOn';
        arrow6.classList = 'topArrow';
    } else if (food.className == 'containerOn') {
        food.classList = 'containerOff';
        arrow6.classList = 'downArrow';
    }
}

function othersDisplay() {
    if (others.className == 'containerOff') {
        others.classList = 'containerOn';
        arrow7.classList = 'topArrow';
    } else if (others.className == 'containerOn') {
        others.classList = 'containerOff';
        arrow7.classList = 'downArrow';
    }
}