const reveals = document.getElementsByClassName('reveal')

window.addEventListener('scroll', scroll)

function scroll(e) {
    const viewportHeight = window.innerHeight
    for (let i = 0; i < reveals.length; i++) {
        let reveal = reveals[i]
        const positionInfo = reveal.getBoundingClientRect()
        let visibility = positionInfo.top < viewportHeight && positionInfo.bottom > 0
        let contains = reveal.classList.contains('reveal_active')

        if (visibility && contains || !visibility && !contains) continue

        if (visibility) {
            reveal.classList.add('reveal_active')
        } else {
            reveal.classList.remove('reveal_active')
        }
    }
}