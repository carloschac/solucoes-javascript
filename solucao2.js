function GenerateFibonacci(number) {
  //declarando o arraylist
  var fibonacci = []
  fibonacci[0] = 0
  fibonacci[1] = 1

  // O for cria um loop com três expressões
  for (var i = 2; i < number; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1]
  }
  //retornando o valor do código acima
  return fibonacci
}
//Quantidade de valores que a função deve retornar
var f = GenerateFibonacci(10)
console.log('Os números abaixo pertencem a sequência de Fibonacci. ', f)
