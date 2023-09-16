// 1. Creare il prompt per ricevere un numero da 1 a 5 dall'utente e per la scelta di pari e dispari
const ped = prompt('Pari o dispari?')
const input = parseFloat(prompt('inserisci un numero da uno a cinque'))

// 2. Verificare che l'utente abbia inserito pari o dispari
if (ped === 'pari') {
  console.log('Hai scelto pari');
}else if (ped === 'dispari') {
  console.log('Hai scelto dispari');
}else {
  alert ('Devi scegliere pari o dispari')
  location.reload()
}

// 2. Verificare che sia un numero e che sia compreso tra i due valori indicati
if (isNaN(input)){
  alert ('Devi inserire un numero');
  location.reload()
} else if (input < 1 || input > 5) {
  alert ("Il numero dev'essere compreso tra 1 e 5");
  location.reload()
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
    // 6. Dichiarare il vincitore.
    if (ped === 'pari') {
      // 7. Stampare il risultato.
      console.log('Hai vinto');
    }else {
      // 7. Stampare il risultato.
      console.log('Ritenta, sarai più fortunato');
    }
  } else {
    console.log('Il numero è dispari');
    // 6. Dichiarare il vincitore.
    if (ped === 'dispari') {
      // 7. Stampare il risultato.
      console.log('Hai vinto');
    }else {
      // 7. Stampare il risultato.
      console.log('Ritenta, sarai più fortunato');
    }
  }
}

isEven (sum)

