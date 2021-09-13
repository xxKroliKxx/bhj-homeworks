const cartProducts = document.getElementsByClassName('cart__products')[0]
const productQuantityControl = document.getElementsByClassName('product__quantity-control')
const productAdd = document.getElementsByClassName('product__add')
const productImg = document.getElementsByClassName('product-image')[0]

let products = {}

for (let i = 0; i < productQuantityControl.length; i++) {
    productQuantityControl[i].onclick = productQuantityClick
}

for (let i = 0; i < productAdd.length; i++) {
    productAdd[i].onclick = productAddClick
}

function productQuantityClick(e) {
    let inc = e.target.classList.contains('product__quantity-control_inc')
    let valueDiv = e.target.parentElement.querySelector('.product__quantity-value')

    let quantity = valueDiv.innerText
    if (!inc && quantity === '1') return
    valueDiv.innerText = Number(quantity) + (inc ? 1 : -1)
}

function productAddClick(e) {

    let product = e.target.closest('.product')
    let value = Number(product.querySelector('.product__quantity-value').innerText)
    let productCount = products[product.dataset.id]

    if (productCount === undefined) {
        let productElement = document.createElement('div')
        productElement.classList.add('cart__product')
        productElement.dataset.id = product.dataset.id
        cartProducts.insertAdjacentElement('beforeend', productElement)

        let img = document.createElement('img')
        img.classList.add('cart__product-image')
        img.setAttribute('src', product.querySelector('img').getAttribute('src'))
        productElement.insertAdjacentElement('beforeend', img)

        productCount = document.createElement('div')
        productCount.classList.add('cart__product-count')
        productElement.insertAdjacentElement('beforeend', productCount)

        products[product.dataset.id] = productCount

        let productRemove = document.createElement('a')
        productRemove.classList.add('product__remove')
        productRemove.setAttribute('href', '#')
        productRemove.dataset.id = product.dataset.id
        productRemove.innerHTML = '&times;'
        productRemove.onclick = removeProduct
        productElement.insertAdjacentElement('beforeend', productRemove)
    }

    productCount.innerText = Number(productCount.innerText) + Number(value)
    let img = productCount.closest('.cart__product').querySelector('img')

    productImg.classList.add('product-image-active')
    productImg.setAttribute('src', img.getAttribute('src'))
    let domRect = e.target.getBoundingClientRect()
    productImg.style.left = domRect.left + 'px'
    productImg.style.top = domRect.top - productImg.width + 'px'

    domRect = img.getBoundingClientRect()

    let f_move = move
    f_move.call({'offset': {"left": domRect.left, 'top': domRect.top}})
    f_move()
}

function removeProduct(e) {
    e.target.parentElement.remove()
    delete products[e.target.dataset.id]
}

let move = function imgMove() {

    let domRect = productImg.getBoundingClientRect()
    if (domRect.left <= this.offset.left && domRect.top >= this.offset.top) {
        productImg.style.left = domRect.left + 7 + 'px'
        productImg.style.top = domRect.top - 5 + 'px'
        setTimeout(() => {
            let f_move = move
            f_move.call(this)
            f_move()
        }, 10)
    } else {
        productImg.classList.remove('product-image-active')
    }
}