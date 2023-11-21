let cislo = 5

// pro porovnání píšeme 3x = (===)
// pokud se číslo rovná 10...
if(cislo === 10) {
    // ...proveď tento příkaz
    console.log("Číslo je 10")
} 
// nebo pokud se číslo rovná 5...
else if (cislo === 5) {
    // ...proveď tento příkaz
    console.log("Číslo je 5")
}
// v ostatních případech (else)...
else {
    // ...proveď tento příkaz
    console.log("Číslo není ani 5 ani 10")
}


// alert("Pozor!!!")...stránka nás upzorní na něco, v tomto případě na "Pozor!!!"
let input = prompt("Zadej číslo")
console.log(input)
