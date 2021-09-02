let count = 0
let miss = 0
let eDead = document.getElementById('dead')
let eLost = document.getElementById('lost')

let onClick = function () {
    if (this.classList.contains('hole_has-mole')) {
        count ++
        eDead.innerText = count
    } else {
        miss ++
        eLost.innerText = miss
    }
    let newGame = false
    if (count === 10) {
        alert('Вы победили')
        newGame = true
    } else if (miss === 5) {
        alert('Вы проиграли')
        newGame = true
    }

    if (newGame) {
        count = 0
        miss = 0
        eDead.innerText = count
        eLost.innerText = count
    }
}

for (let i = 1; i < 10; i++) {
    document.getElementById('hole' + i).onclick = onClick
}