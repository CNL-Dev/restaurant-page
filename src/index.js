import {createHomepage} from "./homepage.js";
import { createMenuPage } from "./menupage.js";

const homepageBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');

createHomepage();

homepageBtn.addEventListener('click', () => {
    clear();
    createHomepage();
});

menuBtn.addEventListener('click', () => {
    clear();
    createMenuPage();
});

function clear() {
    document.querySelector('#content').innerHTML = '';
}