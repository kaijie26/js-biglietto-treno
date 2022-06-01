// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorreree l'età del 
// passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo 
// queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana 
// (con massimo due decimali, per indicare centesimi sul prezzo).

// 1. RACCOLTA DEI DATI E DEFINIZIONE DELLE VARIABILI
// Chiedo il numero dei chilometri che desidera percorrere all'utente
const userKilometres = parseInt (prompt ('Quanti chilometri vuoi percorrere?'));
// Chiedo l'età al passeggero 
const userAge = parseInt (prompt ('Quanti anni hai?'));
console.log(userAge);
// Calcolo il prezzo standard del biglietto in proporzione ai chilometri del passeggero
// avendo la costante del costo a (0.21 € al km)
const kmPrice = 0.21;
const standardPrice = userKilometres * kmPrice;
// Elaboro l'età del passeggero per definirne le categorie
const young = 18;
const old = 65;

if (userAge < young) {
    underrated = 'minorenne';
}  else if (userAge > old) {
    senior = 'anziano';
}

console.log(underrated);
console.log(senior);

// 2. APPLICO LO SCONTO IN BASE ALLA ETÀ DEL PASSEGGERO
let discountPrice;
