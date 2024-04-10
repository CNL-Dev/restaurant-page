const contentContainer = document.querySelector('#content');

function createAboutPage() {
    const aboutPage = document.createElement('div');
    aboutPage.classList.add('about-page');
    contentContainer.appendChild(aboutPage);

    const aboutPageTitle = document.createElement('h1');
    aboutPageTitle.classList.add('about-page-title');
    aboutPageTitle.innerHTML = "About Us";
    aboutPage.appendChild(aboutPageTitle);

    const aboutPageText = document.createElement('p');
    aboutPageText.classList.add('about-page-text');
    aboutPageText.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                               Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
    aboutPage.appendChild(aboutPageText);
}

export {createAboutPage};