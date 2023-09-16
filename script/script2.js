// 1. Creare il prompt per ricevere un numero da 1 a 5 dall'utente
const input = parseFloat(prompt('inserisci un numero da uno a cinque'))

// 2. Verificare che sia un numero e che sia compreso tra i due valori indicati
if (isNaN(input)){
  console.log('Devi inserire un numero');
} else if (input < 1 || input > 5) {
  console.log("Il numero dev'essere compreso tra 1 e 5");
} else {
  console.log(input);
}

// 3. Creare una funzione randomizer che ci dia un numero da 1 a 5
function randomizer (max) {
  return randomNum = Math.floor(Math.random() * max) + 1
}
const randomized = randomizer(5)
console.log(randomized);

// 4. Sommare i due numeri (usando una funzione?)
const sum = randomized + input
console.log(sum);

// 5. Verificare che la somma dei due numeri sia pari o dispari usando una funzione
function isEven (num) {
  if (num % 2 === 0) {
    console.log('Il numero è pari');
  } else {
    console.log('Il numero è dispari');
  }
}

isEven (sum)
// 6. Dichiarare il vincitore.


// 7. Stampare il risultato.