//1. Il software deve chiedere per 5 volte all'utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
//Esegui questo programma in due versioni, con il for e con il while.

//Versione con for
/* let somma = 0

//Chiedere 5 volte di inserire un numero
for (let i = 0; i < 5; i++) {
    const numero = parseInt(prompt("scrivi un numero"));
//sommare tutti i numeri
    somma += numero
    console.log(numero);
}
console.log(somma) */


//Versione con while
let counter = 0;
let = somma = 0;
while (counter < 5)  {
    const numero = parseInt(prompt("scrivi un numero"))
    console.log(numero)
    somma += numero;

    counter++;

}
console.log(somma)




