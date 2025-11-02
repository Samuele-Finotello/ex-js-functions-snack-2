function interval(n) {

  if (n > 0) {
    let intervalId;

    intervalId = setInterval(() => {
      console.log(n)
      n--
    }, 1000)

    setTimeout(() => {
      clearInterval(intervalId)
    }, n * 1000)

    setTimeout(() => {
      console.log('Tempo scaduto!')
    }, (n + 1) * 1000)
  }
  else {
    console.log(`${n} e' minore o uguale a 0`)
  }
}

function contoAllaRovescia(n) {
  interval(n)
}

contoAllaRovescia(5)