function init() {
    let contactButton = document.querySelector('#contact-us')
    contactButton.addEventListener("click", contactHandler)
}

function contactHandler() {
    console.log("quack")
}

window.addEventListener("load", init)