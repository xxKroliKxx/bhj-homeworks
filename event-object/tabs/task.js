const tabs = document.getElementsByClassName('tab')
const tabsContent = document.getElementsByClassName('tab__content')

let currentIndex = 0

for (let i = 0; i < tabs.length; i++) {
    tabs[i].onclick = TabOnClick
}

function TabOnClick(e) {
    tabs[currentIndex].classList.remove('tab_active')
    tabsContent[currentIndex].classList.remove('tab__content_active')

    for (let i = 0; i < tabs.length; i++) {
        if (tabs[i] === this) {
            currentIndex = i
            break
        }
    }
    tabs[currentIndex].classList.add('tab_active')
    tabsContent[currentIndex].classList.add('tab__content_active')
}