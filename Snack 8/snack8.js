function interval(n) {

  const intervalId = setInterval(() => {
    if (n > 0) {
      console.log(n)
      n--
    }
    else {
      console.log('Tempo scaduto!')
      clearInterval(intervalId)
    }
  }, 1000)

}

function contoAllaRovescia(n) {
  interval(n)
}

contoAllaRovescia(5)