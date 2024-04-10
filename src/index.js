import { createAboutPage } from "./aboutpage.js";
import {createHomePage} from "./homepage.js";
import { createMenuPage } from "./menupage.js";

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');

createHomePage();

homeBtn.addEventListener('click', () => {
    clear();
    createHomePage();
});

menuBtn.addEventListener('click', () => {
    clear();
    createMenuPage();
});

aboutBtn.addEventListener('click', () => {
    clear();
    createAboutPage();
});

function clear() {
    document.querySelector('#content').innerHTML = '';
}