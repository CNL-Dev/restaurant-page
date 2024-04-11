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

    // Example item 1
    const menuItemBurger =  document.createElement('div');
    menuItemBurger.classList.add('menu-item');
    menuItemContainer.appendChild(menuItemBurger);

    const menuItemBurgerTitle = document.createElement('h2');
    menuItemBurgerTitle.classList.add('menu-item-title');
    menuItemBurgerTitle.innerHTML = "Burger";
    menuItemBurger.appendChild(menuItemBurgerTitle);

    const menuItemBurgerDesc = document.createElement('p');
    menuItemBurgerDesc.classList.add('menu-item-desc');
    menuItemBurgerDesc.innerHTML = "Burger with lots of delicious flavor!";
    menuItemBurger.appendChild(menuItemBurgerDesc);

    const menuItemBurgerPrice = document.createElement('p');
    menuItemBurgerPrice.classList.add('menu-item-price');
    menuItemBurgerPrice.innerHTML = "$4.99";
    menuItemBurger.appendChild(menuItemBurgerPrice);

    // Example item 2
    const menuItemSalad =  document.createElement('div');
    menuItemSalad.classList.add('menu-item');
    menuItemContainer.appendChild(menuItemSalad);

    const menuItemSaladTitle = document.createElement('h2');
    menuItemSaladTitle.classList.add('menu-item-title');
    menuItemSaladTitle.innerHTML = "Salad";
    menuItemSalad.appendChild(menuItemSaladTitle);

    const menuItemSaladDesc = document.createElement('p');
    menuItemSaladDesc.classList.add('menu-item-desc');
    menuItemSaladDesc.innerHTML = "Low calorie salad!";
    menuItemSalad.appendChild(menuItemSaladDesc);

    const menuItemSaladPrice = document.createElement('p');
    menuItemSaladPrice.classList.add('menu-item-price');
    menuItemSaladPrice.innerHTML = "$2.99";
    menuItemSalad.appendChild(menuItemSaladPrice);
}

export {createMenuPage};