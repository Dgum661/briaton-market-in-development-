import { openMainMenu } from './main-menu.js';
import { locationSelect } from './location-menu.js';
import { initCards } from './product-card.js';
import './type-counter.js';
import { initFilter } from './filter.js';
import { getAnswer } from './accordion.js';
import { initValidation } from './validation.js';


window.addEventListener('DOMContentLoaded', () => {
    openMainMenu();
    locationSelect();
    initCards();
    initFilter();
    getAnswer();
    initValidation();
});



