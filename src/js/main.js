function init() {
    let contactButton = document.querySelector('#contact-us')
    contactButton.addEventListener("click", contactHandler)
}

function contactHandler() {
    console.log("quack")
    const email = [
        '0986087@hr.nl',
        '1015402@hr.nl',
        '1010682@hr.nl',
        '1015903@hr.nl'
    ]
    document.location = `mailto:${email.join(';')}`
}

window.addEventListener("load", init)