const book = document.getElementById('book')
let fontSizeBtns = document.getElementsByClassName('font-size')
let colorBtns = document.querySelectorAll('.book__control_color .color')
let bgBtns = document.querySelectorAll('.book__control_background .color')

for (let i = 0; i < 3; i++) {
    fontSizeBtns[i].onclick = fontSizeClick
    colorBtns[i].onclick = colorClick
    bgBtns[i].onclick = bgClick
}

const sizeMap = {'small': 'font-size_small', 'big': 'font-size_big'}
const colorMap = {'black': 'book_color-black', 'gray': 'book_color-gray', 'whitesmoke': "book_color-whitesmoke"}
const bgMap = {'black': 'book_bg-black', 'gray': 'book_bg-gray', 'white': "book_bg-white"}

let currentSiz = undefined
let currentColor = 'black'
let currentBG = 'white'

function fontSizeClick(e) {
    let size = this.dataset.size
    if (size === currentSiz) return

    if (currentSiz != undefined) {
        book.classList.remove(sizeMap[currentSiz])
    }

    for (let i = 0; i < 3; i++) {
        if (fontSizeBtns[i].dataset.size === currentSiz) {
            fontSizeBtns[i].classList.remove('font-size_active')
        }
        if (fontSizeBtns[i].dataset.size === size) {
            fontSizeBtns[i].classList.add('font-size_active')
        }
    }

    if (size != undefined) {
        book.classList.add(sizeMap[size])
    }
    currentSiz = size

    return false
}

function colorClick(e) {
    let color = this.dataset.textColor
    if (color === currentColor) return false

    book.classList.remove(colorMap[currentColor])

    for (let i = 0; i < 3; i++) {
        if (colorBtns[i].dataset.textColor === currentColor) {
            colorBtns[i].classList.remove('color_active')
        }
        if (colorBtns[i].dataset.textColor === color) {
            colorBtns[i].classList.add('color_active')
        }
    }

    book.classList.add(colorMap[color])
    currentColor = color

    return false
}

function bgClick(e) {
    let bg = this.dataset.bgColor
    if (bg === currentBG) return false

    book.classList.remove(bgMap[currentBG])

    for (let i = 0; i < 3; i++) {
        if (bgBtns[i].dataset.bgColor === currentBG) {
            bgBtns[i].classList.remove('color_active')
        }
        if (bgBtns[i].dataset.bgColor === bg) {
            bgBtns[i].classList.add('color_active')
        }
    }

    book.classList.add(bgMap[bg])
    currentBG = bg

    return false
}