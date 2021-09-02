

let eImage = document.getElementById('cookie')
let eSpanCounter = document.getElementById('clicker__counter')
let eSpanAverage = document.getElementById('clicker__average')

let count = 0
let timeStart = null
eImage.onclick = function () {
    count ++
    let now = new Date()
    eSpanCounter.innerText = count
    eSpanAverage.innerText = timeStart === null ? 0 : (count / ((now - timeStart) / 1000)).toFixed(2)
    eImage.width = count % 2 != 0 ? 300 : 200
    if (timeStart === null) {
        timeStart = new Date()
    }
}