const modalMain = document.getElementById('modal_main')
const modalSuccess = document.getElementById('modal_success')

document.getElementsByClassName('show-success')[0].onclick = (e) => {
    modalMain.classList.remove('modal_active')
    modalSuccess.classList.add('modal_active')

}

modalMain.querySelector('div .modal__close').onclick = (e) => {
    modalMain.classList.remove('modal_active')
}

modalSuccess.querySelector('div .modal__close').onclick = (e) => {
    modalSuccess.classList.remove('modal_active')
}

modalMain.classList.add('modal_active')
