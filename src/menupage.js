const contentContainer = document.querySelector('#content');

function createMenuPage() {
    const menuPage = document.createElement('div');
    menuPage.classList.add('menu-page');
    contentContainer.appendChild(menuPage);

    const menuPageTitle = document.createElement('h1');
    menuPageTitle.classList.add('menu-page-title');
    menuPageTitle.innerHTML = "Menu";
    menuPage.appendChild(menuPageTitle);

    const menuItemContainer = document.createElement('div');
    menuItemContainer.classList.add('menu-item-container');
    menuPage.appendChild(menuItemContainer);

    // Example item
    const menuItem1 =  document.createElement('div');
    menuItem1.classList.add('menu-item');
    menuItemContainer.appendChild(menuItem1);

    const menuItem1Title = document.createElement('h2');
    menuItem1Title.classList.add('menu-item-title');
    menuItem1Title.innerHTML = "Item 1";
    menuItem1.appendChild(menuItem1Title);

    const menuItem1Desc = document.createElement('p');
    menuItem1Desc.classList.add('menu-item-desc');
    menuItem1Desc.innerHTML = "Item with lots of delicious flavor!";
    menuItem1.appendChild(menuItem1Desc);

    const menuItem1Price = document.createElement('p');
    menuItem1Price.classList.add('menu-item-price');
    menuItem1Price.innerHTML = "$4.99";
    menuItem1.appendChild(menuItem1Price);
}

export {createMenuPage};