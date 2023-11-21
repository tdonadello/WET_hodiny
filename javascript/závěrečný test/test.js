/// Předměty ///
let input = document.querySelector("#input")
let tlacitko1 = document.querySelector("#tlacitko1")
let predmety1 = document.querySelector("#predmety1")

let odpoved1 = ["mat", "cj", "aj", "tev"]
let odpoved2 = []

tlacitko1.addEventListener("click", vypis)

function vypis() {
    let predmet = input.value
    input.value = ""
    for (i = 0; i < odpoved1.length; i++) {
        if (predmet === odpoved1[i]) {
            odpoved2[i] = predmet
        }
    }
    predmety1.innerText = ""
    for (let i = 0; i < odpoved2.length; i++) {
        predmety1.innerText += odpoved2[i]
    }
}

/// Papoušek ///
let input2 = document.querySelector("#input2")
let tlacitko = document.querySelector("#tlacitko")
let div = document.querySelector("#div")

tlacitko.addEventListener("click", mluv)

function mluv() {
    if (input2.value === "1") {
        div.innerText = "Ahoj"
    }
    if (input2.value === "2") {
        div.innerText = "Nemohl jsem přijít na to"
    }
    if (input2.value === "3") {
        div.innerText = "Nejde mi to"
    }
}
