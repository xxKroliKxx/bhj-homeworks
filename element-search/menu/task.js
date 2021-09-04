let menuLink = document.getElementsByClassName('menu__link')
let currentActiveElement = null

const onClick = function (e) {
    if (currentActiveElement != null) {
        currentActiveElement.classList.remove('menu_active')
    }
    let element = e.target
    if (!element.hasAttribute('href') || element.getAttribute('href') != '') {
        return
    }
    currentActiveElement = element.parentElement.querySelector('.menu .menu_sub')
    currentActiveElement.classList.add('menu_active')
    return false;
}

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = onClick
}

