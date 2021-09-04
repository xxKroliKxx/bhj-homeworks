const nexBtn = document.getElementsByClassName('slider__arrow_next')[0]
const prevBtn = document.getElementsByClassName('slider__arrow_prev')[0]

nexBtn.onclick = onClick
prevBtn.onclick = onClick

const itemActiveClass = 'slider__item_active'
const dotActiveClass = 'slider__dot_active'

const imgs = document.getElementsByClassName('slider__item')
const dots = document.getElementsByClassName('slider__dot')

let currentImg = 0

dots[currentImg].classList.add(dotActiveClass)

for (let i = 0; i < dots.length; i++) {
    dots[i].onclick = dotOnclick
}

function onClick(e) {
    clearCurrentClass()
    currentImg = this === nexBtn ?
        currentImg + 1 > imgs.length - 1 ? 0 : currentImg + 1 :
        currentImg - 1 < 0 ? imgs.length - 1 : currentImg - 1
    setCurrentClass()
}

function dotOnclick(e) {
    сlearCurrentClass()
    for (let i = 0; i < dots.length; i++) {
        if (this === dots[i]) {
            currentImg = i
            break
        }
    }
    setCurrentClass()
}

function clearCurrentClass() {
    imgs[currentImg].classList.remove(itemActiveClass)
    dots[currentImg].classList.remove(dotActiveClass)
}

function setCurrentClass() {
    dots[currentImg].classList.add(dotActiveClass)
    imgs[currentImg].classList.add(itemActiveClass)
}