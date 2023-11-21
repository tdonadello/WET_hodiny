function prictiDva(x) {
    let vysledek = x + 2
    console.log(vysledek)
}

function vyhazovac(rocnik, aktualniRok) {
    let vek = aktualniRok - rocnik

    if (vek > 18) {
        console.log("Můžeš vstoupit")
    } else if (vek < 18) {
        console.log("Vstup zakázán")
    } else if ((vek = 18)) {
        console.log("Můžeš vstoupit")
    }
}

function doporucFilm(zanr) {
    if (zanr === "akční film") {
        console.log("Die hard")
    } else if (zanr === "komedie") {
        console.log("The Nice Guys")
    } else if (zanr === "pohádka") {
        console.log("Ať žijí duchové")
    } else if (zanr === "detektivka") console.log("Zkuste zadat jiný žánr")
}
