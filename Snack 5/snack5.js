function interval(message) {
  setInterval(() => {
    console.log(message)
  }, 1000)
}

function stampaOgniSecondo(message) {
  return interval(message)
}

// stampaOgniSecondo('Ciao')