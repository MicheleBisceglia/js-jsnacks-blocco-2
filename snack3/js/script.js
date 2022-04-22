//Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.

// Chiedere un numero all'utente
const userNumber = parseInt(prompt("Scrivi un numero"));

//calcolare il cubo dei primi N numeri
for (let i = 1; i <= userNumber; i++) {
    const number = i ;
    console.log(Math.pow(number, 3));
}



