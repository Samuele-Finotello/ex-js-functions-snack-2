function interval(ms, conta) {
  setInterval(() => {
    conta++;
    console.log(conta);
  }, ms)
}

function creaContatoreAutomatico(ms) {
  let conta = 0;
  return interval(ms, conta)
}

// creaContatoreAutomatico(2000)