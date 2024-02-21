"use strict"

document.querySelectorAll('container-solve-tasks-item-decision').forEach((el) => {
    el.addEventListener('click', () => {

        let coontent = el.nextElementSibling;
        console.log(coontent)

        if (coontent.style.maxHeight) {
            document.querySelectorAll('coontent').forEach((el) => el.style.maxHeight = null)
        } else {
            document.querySelectorAll('coontent').forEach((el) => el.style.maxHeight = null)
            coontent.style.maxHeight = coontent.scrollHeight + 'px'
        }

    })
})