function dados(numDados) {
  let array = []
  for (let i = 0; i < numDados; i++) {
    array.push(Math.floor(Math.random()*6) + 1)
  }
  return array
}

console.log(dados(10))