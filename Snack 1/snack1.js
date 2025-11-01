// funzione dichiarativa 
function somma1(num1, num2) {
  console.log(num1 + num2);
}

somma1(8, 5)

// funzione anonima
const somma2 = function (num1, num2) {
  console.log(num1 + num2);
}

somma2(7, 9)

// arrow functions
const somma3 = (num1, num2) => {
  console.log(num1 + num2);
}

somma3(2, 5)