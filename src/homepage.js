import img from './img/restraunt.jpg';
const contentContainer = document.querySelector('#content');

function createHomepage() {
    const homepage = document.createElement('div');
    homepage.classList.add('homepage');
    contentContainer.appendChild(homepage);

    const homepageTitle = document.createElement('h1');
    homepageTitle.classList.add('homepage-title');
    homepageTitle.innerHTML = "Welcome!";
    homepage.appendChild(homepageTitle);

    const homepageImage = new Image();
    homepageImage.src = img;
    homepage.appendChild(homepageImage);
}

export {createHomepage};