let a = ['1', '3', '5', '7']
let b = ['2', '4', '8', '16', '32', '64']
let c = ['0', '1', '4', '9', '16', '25', '36']
let d = ['4', '16', '36', '64']
let e = ['1', '1', '2', '3', '5', '8']
let f = ['2', '10', '12', '16', '17', '18', '19']

//A-) Cada número é igual ao anterior + 2, formando os números ímpares. Assim, o próximo número é igual a 7 + 2 = 9.
let aResult = a.push('9')
console.log(a)
console.log('====================================')

//B-) Cada número é igual ao anterior multiplicado por 2. Assim, o próximo número é igual a 64 x 2 = 128.
let bResult = b.push('128')
console.log(b)
console.log('====================================')

//C-) Cada número é igual ao anterior acrescido de um número ímpar que segue a sequência 1, 3, 5, 7, 9. Realizando a subtração dos dois últimos números, temos que 36 - 25 = 11. Assim, devemos acrescentar 11 + 2 = 13 ao último número, obtendo 36 + 13 = 49.
let cResult = c.push('49')
console.log(c)
console.log('====================================')

//D-) Cada número é igual ao quadrado dos números pares. Com isso, temos que 64 = 8². Então, o próximo número par é 10, e o seu quadrado é 10² = 100.
let dResult = d.push('100')
console.log(d)
console.log('====================================')

//E-) Cada número é igual à soma do número atual com o número anterior. Assim, o próximo número é igual a 8 + 5 = 13.
let eResult = e.push('13')
console.log(e)
console.log('====================================')

//F-) Sequência formada através de todos os números que iniciam com a letra d. Assim, o próximo número em ordem crescente que inicia com a letra d é 200.
let fResult = f.push('200')
console.log(f)
console.log('Fim.')
