function interval(message, start, end) {
  setTimeout(() => {
    console.log('Inizio')
    const intervalId = setInterval(() => {
      console.log(message)
    }, 1000)
    setTimeout(() => {
      clearInterval(intervalId)
      console.log('Fine')
    }, end)
  }, start)
}

function eseguiEferma(message, start, end) {
  interval(message, start, end)
}

eseguiEferma('Ciao', 2000, 10000)