let vetorInteiro = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let vetorString = [' Café', ' refrigente', ' Catuaba', ' pão', ' suco', 'sonho',]
let vetorDouble = [1.8, 2.5, 3.4, 4.1, 5.5, 6.9, 7.2, 8.7, 9.5, 10.8]

const concatenar = vetorInteiro.concat(vetorString, vetorDouble)
let vetorConcatenado2 = [].concat(vetorInteiro, vetorString, vetorDouble)

console.log(concatenar)
console.log(vetorConcatenado2);