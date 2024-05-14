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

function tiroDado() {
    let lancia = parseInt(prompt('Quanti tiri vuoi fare?'));
    let punteggio1 = (0);
    let punteggio2 = (0);
    for (let i = 1; i <= lancia; i++) {
        let numeroRandom_1 = Math.floor(Math.random() * (6 - 1) + 1);
        let numeroRandom_2 = Math.floor(Math.random() * (6 - 1) + 1);
        console.log(numeroRandom_1,numeroRandom_2);
        punteggio1 = punteggio1 + numeroRandom_1;
        punteggio2 = punteggio2 + numeroRandom_2;
    }
    if (punteggio1 > punteggio2){
        console.log(`Il giocatore 1 ha vinto con il totale di ${punteggio1} punti`);
    }
    else if (punteggio2 > punteggio1){
        console.log(`Il giocatore 2 ha vinto con il totale di ${punteggio2} punti`);
    }
    }
tiroDado();