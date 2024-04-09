import img from './img/restraunt.jpg';
const contentContainer = document.querySelector('#content');

function createHomePage() {
    const homePage = document.createElement('div');
    homePage.classList.add('homepage');
    contentContainer.appendChild(homePage);

    const homePageTitle = document.createElement('h1');
    homePageTitle.classList.add('home-title');
    homePageTitle.innerHTML = "Welcome!";
    homePage.appendChild(homePageTitle);

    const homePageImage = new Image();
    homePageImage.src = img;
    homePage.appendChild(homePageImage);
}

export {createHomePage};