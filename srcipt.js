// Traccia 1:

// Scrivi una funzione che simuli un gioco di dadi tra due utenti, partendo da un prompt che richieda quanti tiri sono da effettuarsi.  

// Stampare il giocatore che ha totalizzato più punti, tenendo conto che:
// ogni dado ha 6 facce
// ogni giocatore tirerà il dado n volte
// Per ogni giocatore:
// generare un numero casuale per ogni tiro che effettuera’,
// ed ogni tiro sarà sommato ai precedenti per calcolare il punteggio finale del giocatore rispettivo.
// TIPS:

// Usiamo questa formula per generare un numero random → Math.floor(Math.random() * (6 - 1) + 1);

// function tiroDado() {
//     let lancia = parseInt(prompt('Quanti tiri vuoi fare?'));
//     let punteggio1 = (0);
//     let punteggio2 = (0);
//     for (let i = 1; i <= lancia; i++) {
//         let numeroRandom_1 = Math.floor(Math.random() * (6 - 1) + 1);
//         let numeroRandom_2 = Math.floor(Math.random() * (6 - 1) + 1);
//         console.log(numeroRandom_1,numeroRandom_2);
//         punteggio1 = punteggio1 + numeroRandom_1;
//         punteggio2 = punteggio2 + numeroRandom_2;
//     }
//     if (punteggio1 > punteggio2){
//         console.log(`Il giocatore 1 ha vinto con il totale di ${punteggio1} punti`);
//     }
//     else if (punteggio2 > punteggio1){
//         console.log(`Il giocatore 2 ha vinto con il totale di ${punteggio2} punti`);
//     }
//     }
// tiroDado();

// Traccia 2:
// Scrivi una funzione che permetta di stampare in console tutti i numeri da 1 a N:

// N dovra’ rappresentare il parametro formale della funzione
// tutti i numeri multipli di 3 siano sostituiti dalla stringa 'Fizz',
// tutti i numeri multipli di 5 siano sostituiti dalla stringa 'Buzz'
// e tutti i numeri multipli di 15 siano sostituiti dalla stringa 'fizzBuzz'

// function numero(n) {
//     for (let i = 1; i <= n; i++) {
//     if (i % 15 == 0) { 
//         console.log('Fizz'); 
//     }
//     else if (i % 5 == 0) {
//         console.log(Buzz);
//     }
//     else if (i % 3 == 0) {
//         console.log(fizzBuzz);
//     }
// }
// }
// numero(15);

// Traccia 3:

// Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

// Esempio:

// Input : 9 → output: 1 cifra
// Input : 99 → output: 2 cifre
// Input: 12000 → output: Numero troppo grande


// let n = parseInt(prompt('inserisci un numeo intero'));
// if (n <= 9) {
//     console.log('numero ad 1 cifra');
// }else if (n <=99)  {
//     console.log('numero a 2 cifre');
// }else if (n <=999) {
//     console.log('numero a 3 cifre');
// }else if(n =>10000) {
// console.log('numeo troppo grande');
// }



