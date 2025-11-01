const somma = (num1, num2) => num1 + num2
const sottrazione = (num1, num2) => num1 - num2
const moltiplica = (num1, num2) => num1 * num2
const divisione = (num1, num2) => num1 / num2

const eseguiOperazione = (num1, num2, operazione) => operazione(num1, num2)

console.log(eseguiOperazione(18, 6, moltiplica))