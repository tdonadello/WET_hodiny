const nadpis = document.querySelector("#nadpis")
const input = document.querySelector("#input")
const tlacitko = document.querySelector("#tlacitko")
const text = document.querySelector("#text")
const pokusy = document.querySelector("#pokusy")
const obr1 = document.querySelector("#sib1")
const obr2 = document.querySelector("#sib2")
const obr3 = document.querySelector("#sib3")
const obr4 = document.querySelector("#sib4")
const obr5 = document.querySelector("#sib5")

// vytváříme seznam slov
const seznamSlov = ["pokus", "letadlo", "antarktida", "nic"]
// ze seznamu slov vybíráme náhodné slovo (přes jeho index)
let slovo = seznamSlov[Math.floor(Math.random() * seznamSlov.length)]

// pro kontrolu to vypíšeme do konzole
console.log(slovo)

// vytvoříme array odpověď
let odpoved = []

// za každé písmeno z vybraného slova doplní do odpovědi podtržítko
for (let i = 0; i < slovo.length; i++) {
    odpoved[i] = "_"
}

// každé písmeno z odpovědi (momentálně samá podtržítka) vypíše do HTML
for (let i = 0; i < slovo.length; i++) {
    text.innerText += odpoved[i]
}

let pocetPokusu = 0
let uhodnuto = false

// tlačítku přidáme interakci
tlacitko.addEventListener("click", hadani)

function hadani() {
    uhodnuto = false
    // přijmeme input z HTML a přidáme ho proměnné písmeno
    let pismeno = input.value
    input.value = ""

    // porovnáváme každé písmeno z hádaného slova s písmenem, které uživatel tipoval
    // pokud se rovnají, dosadíme písmeno do odpovědi
    for (let i = 0; i < slovo.length; i++) {
        if (pismeno === slovo[i]) {
            odpoved[i] = pismeno
            uhodnuto = true
        }
    }

    if (uhodnuto === false) {
        pocetPokusu++
        pokusy.innerText = pocetPokusu

        if (pocetPokusu === 1) {
            obr1.style.display = "block"
        } else if (pocetPokusu === 2) {
            obr1.style.display = "none"
            obr2.style.display = "block"
        } else if (pocetPokusu === 3) {
            obr1.style.display = "none"
            obr2.style.display = "none"
            obr3.style.display = "block"
        } else if (pocetPokusu === 4) {
            obr1.style.display = "none"
            obr2.style.display = "none"
            obr3.style.display = "none"
            obr4.style.display = "block"
        } else if (pocetPokusu === 5) {
            obr1.style.display = "none"
            obr2.style.display = "none"
            obr3.style.display = "none"
            obr4.style.display = "none"
            obr5.style.display = "block"
        }
    }

    text.innerText = ""
    // každé písmeno z odpovědi vypíše do HTML
    for (let i = 0; i < odpoved.length; i++) {
        text.innerText += odpoved[i]
    }
}
