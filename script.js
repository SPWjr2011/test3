const guiser = document.getElementById("guiser")
const twistedTemple = document.getElementById("twistedTemple")
const royRoger = document.getElementById("royRoger")
const sherlyTemple = document.getElementById("sherlyTemple")
const button1 = document.getElementById("nextPageButton")
let windowWidth = window.innerWidth
let windowHeight = window.innerHeight
let windowSize = `${windowHeight}, ${windowWidth}`
update ()
function update () {
    requestAnimationFrame(update)
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight
    guiser.style.top = `${windowHeight/6-50}px`
    guiser.style.left = `${windowWidth/2-150}px`
    twistedTemple.style.top = `${windowHeight/3-50}px`
    twistedTemple.style.left = `${windowWidth/2-150}px`
    royRoger.style.top = `${windowHeight/2-50}px`
    royRoger.style.left = `${windowWidth/2-150}px`
    sherlyTemple.style.bottom = `${windowHeight/ 3-50}px`
    sherlyTemple.style.left = `${windowWidth/2-150}px`
    button1.style.bottom = `${windowHeight/ 8-25}px`
    button1.style.left = `${windowWidth/2-50}px`
}

