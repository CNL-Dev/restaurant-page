import img from './img/restraunt.jpg';
const contentContainer = document.querySelector('#content');

function createHomepage() {
    const homepage = document.createElement('div');
    homepage.classList.add('homepage');
    contentContainer.append(homepage);

    const homepageTitle = document.createElement('h1');
    homepageTitle.classList.add('homepage-title');
    homepage.append(homepageTitle);

    const homepageImage = new Image();
    homepageImage.src = img;
    homepage.append(homepageImage);

    return homepage;
}

export default createHomepage;