function calcula() {
  const n = 2000

  function fibonacciDinamico(n, memo = {}){
    if (n === 0 || n === 1) return 1
    
    if (memo[n]) {
      return memo[n]
    } else {
      let res = fibonacciDinamico(n - 1, memo) + fibonacciDinamico(n - 2, memo)
      memo[n] = res
      return res
    }
  }
  console.log(fibonacciDinamico(n))
}

calcula()

console.log(Number.POSITIVE_INFINITY)