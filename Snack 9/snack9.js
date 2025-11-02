function sequenzaOperazioni(operazioni, ms) {
  operazioni.forEach((operazione, index) => {
    setTimeout(() => {
      operazione()
    }, ms * index)
  });
}

sequenzaOperazioni([
  () => console.log("Operazione 1"),
  () => console.log("Operazione 2"),
  () => console.log("Operazione 3")
], 2000);