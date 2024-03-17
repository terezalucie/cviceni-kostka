
let side = 1
const img = document.querySelector("img")

addEventListener("keyup", () => {
    side++
    if(side > 6){
        side = 1
    }
    img.src = `img/side${side}.svg`
})