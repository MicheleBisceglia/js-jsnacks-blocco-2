//Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.

// Chiedere un numero all'utente
const userNumber = parseInt(prompt("Scrivi un numero"));
console.log(userNumber)

//calcolare il cubo dei primi N numeri
const number1 = userNumber +  1;
console.log(Math.pow(number1, 3))

const number2 = userNumber +  2 ;
console.log(Math.pow(number2, 3))

const number3 = userNumber + 3 ;
console.log(Math.pow(number3, 3));


