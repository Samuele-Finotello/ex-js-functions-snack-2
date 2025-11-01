function timeOut(ms) {
  setTimeout(() => {
    console.log('Tempo scaduto!')
  }, ms)
}

function creaTimer(ms) {
  return timeOut(ms)
}

creaTimer(2000)