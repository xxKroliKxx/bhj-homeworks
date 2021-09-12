const elements = document.getElementsByClassName('has-tooltip')
const tooltip = document.getElementsByClassName('tooltip')[0]
let currentElement = null

for (let i = 0; i < elements.length; i++) {
    elements[i].onclick = hasTooltipClick
}

window.onscroll = (e) => {
    if (currentElement === null) return
    setBinding()
}

function hasTooltipClick(e) {

    tooltip.textContent = e.target.getAttribute('title')

    if (tooltip.classList.contains('tooltip_active') && e.target === currentElement) {
        tooltip.classList.remove('tooltip_active')
        e.preventDefault();
        return
    } else {
        tooltip.classList.add('tooltip_active')
    }

    currentElement = e.target
    setBinding()
    e.preventDefault();
}

function setBinding() {
    let domRect = currentElement.getBoundingClientRect()

    let position = tooltip.dataset.position
    let width = tooltip.getBoundingClientRect().width

    if (position === 'top' && domRect.top > 30) {
        tooltip.style.top = domRect.top - 30 + 'px';
        tooltip.style.left = domRect.left + 'px';
    } else if (position === 'left' && domRect.left - width > 0) {
        tooltip.style.top = domRect.top + 'px';
        tooltip.style.left = domRect.left - width - 5 + 'px';
    } else if (position === 'right' && domRect.right + width < window.innerWidth) {
        tooltip.style.top = domRect.top + 'px';
        tooltip.style.left = domRect.right + 5 + 'px';
    } else {
        tooltip.style.top = domRect.bottom + 5 + 'px';
        tooltip.style.left = domRect.left + 'px';
    }
}