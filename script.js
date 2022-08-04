// Code for Expanding and Collapsing
document.addEventListener('click', e => {
    // if button is not pressed, simply return
    if (!e.target.matches('.expand-button')) return 

    // store the original flag
    // let original_flag = e.target.innerHTML

    // change flag, identify parent elements
    e.target.innerHTML = changeButton(e.target.innerHTML)
    const card = e.target.closest('.card')
    const cardContent = card.querySelector('.card-body')

    // if (original_flag === "Collapse") {
    //     cardContent.classList.remove('show')
    // } else {
    //     cardContent.classList.add('show')
    // }

    // this basically shortens the code from 4 lines to 1
    cardContent.classList.toggle('show')
})

// Changes the button wording
function changeButton(flag) {
    if (flag === "Expand") return "Collapse"
    return "Expand"
}