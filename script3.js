const button4 = document.getElementById("prevPageButton2")
const cherrySnwCne = document.getElementById("cherrySnowCone")
const pntButterCup = document.getElementById("pntButterCup")
const toastedMarshmellow = document.getElementById("toastedMarshmellow")
const caremel = document.getElementById("caremel")
const cookieDough = document.getElementById("cookieDough")
let windowWidth = window.innerWidth
let windowHeight = window.innerHeight
let windowSize = `${windowHeight}, ${windowWidth}`
update ()
function update () {
    requestAnimationFrame(update)
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight
    button4.style.bottom = `${windowHeight/ 8-25}px`
    button4.style.left = `${windowWidth/2-50}px`
    cherrySnwCne.style.bottom = `${windowHeight /1-110}px`
    cherrySnwCne.style.left = `${windowWidth /2-150}px`
    pntButterCup.style.top = `${windowHeight /4.2-50}px`
    pntButterCup.style.left = `${windowWidth /2-150}px`
    toastedMarshmellow.style.top = `${windowHeight /2.55-50}px`
    toastedMarshmellow.style.left = `${windowWidth /2-150}px`
    caremel.style.top = `${windowHeight /1.83-50}px`
    caremel.style.left = `${windowWidth /2-150}px`
    cookieDough.style.top = `${windowHeight /1.43-50}px`
    cookieDough.style.left = `${windowWidth /2-150}px`
}

