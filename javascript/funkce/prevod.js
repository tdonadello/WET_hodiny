let tlacitko = document.querySelector("#tlacitko")
let input1 = document.querySelector("#input1")
let input2 = document.querySelector("#input2")
let vysledek = document.querySelector("#vysledek")
tlacitko.addEventListener("click", napisVysledek)

function prevod1(C) {
    let farenheit = (C * 9) / 5 + 32
    return farenheit
}

function prevod2(F) {
    let celsia = F / 1.8 - 32
    return celsia
}

function napisVysledek() {
    let textInputu1 = input1.value
    let textInputu2 = input2.value
    textInputu2 = parseInt(textInputu2)
    if (textInputu1 === "F") {
        vysledek.innerText = prevod2(textInputu2)
    } else textInputu1 === "C"
    vysledek.innerText = prevod1(textInputu2)
}
