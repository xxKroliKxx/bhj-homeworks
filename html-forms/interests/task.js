let e_check = document.getElementsByClassName("interest__check")

let onchange = function (e) {

    // все нижестоящие
    let parent = e.target.closest('.interests')
    let children = parent.querySelectorAll('.interest')
    for (let i = 0; i < children.length; i++) {
        if (children[i].contains(e.target)) {
            let checkboxes = children[i].querySelectorAll('.interest__check')
            for (let j = 0; j < checkboxes.length; j++) {
                checkboxes[j].checked = e.target.checked
            }
            break
        }
    }

    let checked = null
    for (let i = 0; i < children.length; i++) {
        let child = children[i]
        if (child.parentElement === parent) {
            let checkboxe = children[i].querySelector('.interest__check')
            if (checked === null) {
                checked = checkboxe.checked
            } else if (checkboxe.checked != checked) {
                checked = undefined
                break
            }
        }
    }

    checkParents(parent, checked)
}

function checkParents(e, checked) {
    let parent = e.closest('li.interest')
    if (parent === null) return
    let children = parent.querySelector('.interest__check')
    if (checked === undefined) {
        children.indeterminate = true
    } else {
        children.checked = checked
        children.indeterminate = false
    }
    checkParents(children.closest('.interests'), checked)
}

for (let i = 0; i < e_check.length; i++) {
    e_check[i].onchange = onchange
}

