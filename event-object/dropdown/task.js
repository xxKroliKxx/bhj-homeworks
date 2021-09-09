const dropDownValue = document.getElementsByClassName('dropdown__value')[0]
const dropDownList = document.getElementsByClassName('dropdown__list')[0]
const dropDownLinks = document.getElementsByClassName('dropdown__link')

dropDownValue.onclick = (e) => {
    dropDownList.classList.toggle('dropdown__list_active')
}

for (let i = 0; i < dropDownLinks.length; i++) {
    dropDownLinks[i].onclick = dropDownLinksClick
}

function dropDownLinksClick(e) {
    dropDownList.classList.toggle('dropdown__list_active')
    dropDownValue.innerText = this.innerText.trim()
    return false
}