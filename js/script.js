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

// 2.CALCOLO IL PREZZO STANDARD DEL BIGLIETTO IN PROPORZIONE AI CHILOMETRI DEL PASSEGGERO
// AVENDO LA COSTANTE DEL COSTO A (0.21 € AL KM)
const kmPrice = 0.21;
let standardPrice = userKilometres * kmPrice;
// Elaboro l'età del passeggero per definirne le categorie
// Underrrated
const young = 18;
// Senior
const old = 65;

// 3. APPLICO LO SCONTO IN BASE ALLA ETÀ DEL PASSEGGERO
if (userAge < young) {
    // underrated discount price;
    standardPrice -=  standardPrice * 0.2;
}  else if (userAge > old) {
    // senior discount price';
    standardPrice -=  standardPrice * 0.4;
}

// 4. EMETTO IL FIX SUL PREZZO FINALE PER AVERE DUE DECIMALI
let fixFinalPrice = standardPrice.toFixed(2);
console.log(fixFinalPrice);

// 5. STAMPO IL PREZZO FINALE
document.getElementById("result").innerHTML = 'Il prezzo finale del biglietto è ' +  fixFinalPrice + "&euro;";