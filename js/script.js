console.log('JS OK');

/*
Palidroma

Chiedere all’utente di inserire una parola (con un prompt)
Creare una funzione per capire se la parola inserita è palindroma
Stampiamo il risultato in console

Scompongo il problema
- 1 Prendo gli elementi dal DOM
- 2 Creo una funzione per sapere se la parola inserita dall'utente è palindroma o no
- 3 Inserisco la parola capovolta in una variabile
- 4 Creo il messaggio per un eventuale parola non palindroma
- 5 Controllo che la parola capovolta sia uguale alla parola non capovolta
- 6 Se la parola capovolta è uguale alla parola non capovolta allora modifico il messaggio
- 7 Stampo il messaggio nella pagina
- 8 Creo un addEventListener al submit
- 9 Blocco l'invio del form
- 10 Validazione
- 11 recupero il valore dell'input
- 12 Se l'utente non iserisce una parola allora mostro l'alert
- 13 Rimuovo l'alert
- 14 Eseguo la mia funzione
*/

// - 1 Prendo gli elementi dal DOM
const formText = document.getElementById('form-palindorma');
const resultElement = document.getElementById('result-palindroma');
const userElement = document.getElementById('text');
const alertDanger = document.getElementById('alert-danger');
console.log(formText, resultElement);

// - 2 Creo una funzione per sapere se la parola inserita dall'utente è palindroma o no
function isPalindrome(string) {

    // - 3 Inserisco la parola capovolta in una variabile
    const userText = string.split('').reverse().join('');

    // - 4 Creo il messaggio per un eventuale parola non palindroma
    let message = `La parola ${string} non è un palindromo`;

    // - 5 Controllo che la parola capovolta sia uguale alla parola non capovolta
    if (userText === string) {

        // - 6 Se la parola capovolta è uguale alla parola non capovolta allora modifico il messaggio
        message = `La parola ${string} è un palindromo`;
    }

    // - 7 Stampo il messaggio nella pagina
    resultElement.innerText = message;
}

// - 8 Creo un addEventListener al submit
formText.addEventListener('submit', function (event) {

    // - 9 Blocco l'invio del form
    event.preventDefault();

    // - 11 recupero il valore dell'input
    const userWord = userElement.value.trim().toLowerCase();

    // - 10 Validazione
    if (!userWord || !isNaN(userWord)) {

        // - 12 Se l'utente non iserisce una parola allora mostro l'alert
        alertDanger.classList.remove('d-none');

        return
    } else {
        // - 13 Rimuovo l'alert
        alertDanger.classList.add('d-none');
    }

    // - 14 Eseguo la mia funzione
    isPalindrome(userWord);

})

/*
Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. (con un prompt)

Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

Sommiamo i due numeri

Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto in console.

Scompongo il problema
- 1 Recupero gli elementi dal DOM
- 2 Creo una funzione per generare un numero random
- 3 Se il valore di isMaxIncludes è vero allora incremento di 1 il max
- 4 Creo il numero random della cpu
- 5 Creo un addEventListener al submit
- 6 Blocco l'invio del form
- 7 Recupero i valori degli input
- 8 Genero il numero casuale della cpu
- 9 Sommo i due numeri
- 10 Creo il messaggio
- 11 Creo un if per il pari
- 12 Creo un if per il dispari
- 13 Stampo il messaggio nella pagina
*/

// - 1 Recupero gli elementi dal DOM
const formNumber = document.getElementById('form-even-odd');
const result = document.getElementById('result-even-odd');
const userInputNumber = document.getElementById('user-number');
const userElementEvenOdd = document.getElementById('select-even-odd');
console.log(formNumber, result, userInputNumber, userElementEvenOdd);

// - 2 Creo una funzione per generare un numero random
function getRandomNumber(min = 1, max = 100, isMaxIncludes = true) {

    // - 3 Se il valore di isMaxIncludes è vero allora incremento di 1 il max
    if (isMaxIncludes) max++;

    // - 4 Creo il numero random della cpu
    return Math.floor(Math.random() * (max - min)) + min;
}

// - 5 Creo un addEventListener al submit
formNumber.addEventListener('submit', function (event) {

    // - 6 Blocco l'invio del form
    event.preventDefault();

    // - 7 Recupero i valori degli input
    const userNumber = parseInt(userInputNumber.value);
    const userEvenOdd = userElementEvenOdd.value;
    console.log(userNumber, userEvenOdd);

    // - 8 Genero il numero casuale della cpu
    const randomNumberCpu = getRandomNumber(1, 5);
    console.log(randomNumberCpu);

    // - 9 Sommo i due numeri
    const sum = userNumber + randomNumberCpu;
    console.log(sum);

    // - 10 Creo il messaggio
    let message = `Somma valore giocatore e valore casuale CPU = ${sum}, quindi vince la <strong>CPU</strong>`;

    // - 11 Creo un if per il pari
    if (userEvenOdd === 'even' && sum % 2 === 0) {
        message = `Somma valore giocatore e valore casuale CPU = ${sum}, quindi vince l' <strong>UTENTE</strong>`;
    }

    // - 12 Creo un if per il dispari
    if (userEvenOdd === 'odd' && sum % 2 !== 0) {
        message = `Somma valore giocatore e valore casuale CPU = ${sum}, quindi vince l' <strong>UTENTE</strong>`;
    }

    // - 13 Stampo il messaggio nella pagina
    result.innerHTML = message;

})
