const button2 = document.getElementById("prevPageButton")
const button3 = document.getElementById("nextPageButton2")
const coke = document.getElementById("coke")
const sprite = document.getElementById("sprite")
const rootBeer = document.getElementById("rootBeer")
const fiveAlive = document.getElementById("fiveAlive")
let windowWidth = window.innerWidth
let windowHeight = window.innerHeight
let windowSize = `${windowHeight}, ${windowWidth}`
update ()
function update () {
    requestAnimationFrame(update)
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight
    button2.style.bottom = `${windowHeight/ 8-25}px`
    button2.style.left = `${windowWidth/2.2-50}px`
    button3.style.bottom = `${windowHeight/ 8-25}px`
    button3.style.right = `${windowWidth/2.2-50}px`
    coke.style.top = `${windowHeight/ 6-50}px`
    coke.style.right = `${windowWidth/2-150}px`
    sprite.style.top = `${windowHeight/ 3-50}px`
    sprite.style.right = `${windowWidth/2-150}px`
    rootBeer.style.top = `${windowHeight/ 2-50}px`
    rootBeer.style.right = `${windowWidth/2-150}px`
    fiveAlive.style.bottom = `${windowHeight/ 3-50}px`
    fiveAlive.style.left = `${windowWidth/2-150}px`
}

