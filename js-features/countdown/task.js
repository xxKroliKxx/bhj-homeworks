/* // 1 задание
let timer = document.getElementById('timer')
let seconds = Number(timer.innerText)
let countdown = function () {
    seconds = seconds - 1
    timer.innerText = seconds
    if (seconds === 0) {
        clearInterval(intervalID)
        alert('Вы победили в конкурсе!')
    }
}
let intervalID = setInterval(countdown, 1000)*/

//2 задание
let timer = document.getElementById('timer')
let time = timer.innerText.split(':')
let second = Number(time[0] * 3600) + Number(time[1] * 60) + Number(time[2])

let countdown = function () {
    second = second - 1
    let hours = Math.floor(second / 3600)
    let minutes = Math.floor(second / 60) - (hours * 60)
    timer.innerText = [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        (second % 60).toString().padStart(2, '0')
    ].join(':');

    if (second === 0) {
        clearInterval(intervalID)
        alert('Вы победили в конкурсе!')
    }
}
let intervalID = setInterval(countdown, 1000)

// 3 задание