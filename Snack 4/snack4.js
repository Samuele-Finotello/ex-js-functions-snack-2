function creaTimer(ms) {
  return setTimeout(() => {
    console.log('Tempo scaduto!')
  }, ms)
}

creaTimer(15000)