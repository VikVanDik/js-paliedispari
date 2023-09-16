
// 1. Creare il prompt per ricevere l'input dall'utente.
const input = prompt('inserisci una parola')
console.log(input);


// 2. Creare una funzione che prenda la stringa e la trasformi in un array, la inverta e la confronti con la stringa originale dopo averla di nuovo trasformata in una stringa.
function palindrome (inputWord) {
  const wordArr = inputWord.split("")
  console.log(wordArr);
  const wordArrInv = wordArr.reverse()
  console.log(wordArrInv);
  const wordInv = wordArrInv.join("")
  console.log(wordInv);
  
  // 3. Se le due stringhe confrontate sono uguali la parola è palindroma.
  if (inputWord === wordInv) {
    // 4. Stampare il risultato 
    console.log('La parola è palindroma');
  } else {
    // 4. Stampare il risultato 
    console.log('La parola non è palindroma');
  }
}

palindrome (input)



