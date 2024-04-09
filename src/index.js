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

function clear() {
    document.querySelector('#content').innerHTML = '';
}