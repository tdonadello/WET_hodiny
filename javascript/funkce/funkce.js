function ukazka(pozdrav) {
    console.log(pozdrav)
    console.log("Nazdar")
}

ukazka("Dobrý den")
ukazka("Ahoj")

function scitani(cisloA, cisloB) {
    let vysledek = cisloA + cisloB
    console.log(vysledek)
}

scitani(3, 8)

function prevod(km) {
    let mile = km * 0.62
    return mile
}

prevod(50)

let vysledekPrevodu30 = prevod(30)
let vysledekPrevodu50 = prevod(50)

let textvHTML = document.querySelector("#text")
textvHTML.innerText = prevod(50)
