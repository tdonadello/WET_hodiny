const wrapper = document.querySelector(".wrapper")

for (let i = 0; i < 6; i++) {
    //document.createElement("název prvku")
    let novyDiv = document.createElement("div")

    // přidání classy square novému prvku
    novyDiv.classList.add("square")

    // náhodná generace čísel (budou sloužit jako barvy)
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    // tzv. template literal - aneb psaní kódu do stringu
    novyDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

        // do divu wrapper přidá nově vytvořený prvek
        .appendChild(novyDiv)
}
