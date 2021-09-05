const rotator = document.getElementsByClassName('rotator__case')
const rotatorActiveClass = 'rotator__case_active'
let currentElement = rotator.length - 1

function change() {
    rotator[currentElement].classList.remove(rotatorActiveClass)
    currentElement = currentElement + 1 > rotator.length - 1 ? 0 : currentElement + 1
    rotator[currentElement].classList.add(rotatorActiveClass)
    let speed = rotator[currentElement].dataset.speed
    let color = rotator[currentElement].dataset.color

    speed = speed === undefined ? 1000 : speed
    color = color === undefined ? 'black' : color

    rotator[currentElement].style.color = color

    setTimeout(change, speed)
}

setTimeout(change, 1000)