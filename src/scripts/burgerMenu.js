const burgerMenu = (openSelector, closeSelector, menuSelector) => {
    const openBtn = document.querySelector(openSelector);
    const closeBtn = document.querySelector(closeSelector);
    const menu = document.querySelector(menuSelector);

    openBtn.addEventListener('click', showMenu);

    closeBtn.addEventListener('click', hideMenu);

    menu.addEventListener('click', event => {
        const targetElement = event.target.tagName;
        if (targetElement === 'A' || targetElement === 'BUTTON') hideMenu();
    });

    function showMenu() {
        menu.classList.remove('none');
        menu.classList.remove('animate__fadeOutRight');
        menu.classList.add('animate__animated');
        menu.classList.add('animate__fadeInRight');
        menu.classList.add('animate__faster');
    }

    function hideMenu() {
        menu.classList.remove('animate__fadeInRight');
        menu.classList.add('animate__fadeOutRight');
        setTimeout(() => {
            menu.classList.add('none');
        }, 300);
    }
};

export default burgerMenu;
