const btn = document.getElementById('tasks__add')
const input = document.getElementById('task__input')
const tasksList = document.getElementById('tasks__list')

btn.onclick = addTask

function addTask(e) {
    let text = input.value
    if (text.length === 0) {
        return
    }

    let task = document.createElement('div')
    task.classList.add('task')
    tasksList.insertAdjacentElement('beforeend', task)

    let taskTitle = document.createElement('div')
    taskTitle.classList.add('task__title')
    task.insertAdjacentElement('beforeend', taskTitle)
    taskTitle.textContent = text

    let taskRemove = document.createElement('a')
    taskRemove.classList.add('task__remove')
    taskRemove.setAttribute('href', '#')
    taskRemove.innerHTML = '&times;'
    taskRemove.onclick = removeTask
    task.insertAdjacentElement('beforeend', taskRemove)


    e.preventDefault()
}

function removeTask(e) {
    e.target.parentElement.remove()
}
