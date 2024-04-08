import {createHomepage} from "./homepage.js";

const homepageBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');

createHomepage();

homepageBtn.addEventListener('click', () => {
    clear();
    createHomepage();
});

function clear() {
    document.querySelector('#content').innerHTML = '';
}