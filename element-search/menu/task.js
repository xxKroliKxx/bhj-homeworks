let menuLink = document.getElementsByClassName('menu__link')
let currentActiveElement = null

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = onClick
}

function onClick(e) {
    if (currentActiveElement != null) {
        currentActiveElement.classList.remove('menu_active')
    }

    if (!this.hasAttribute('href') || this.getAttribute('href') != '') {
        return
    }
    currentActiveElement = this.parentElement.querySelector('.menu .menu_sub')
    currentActiveElement.classList.add('menu_active')
    return false;
}

