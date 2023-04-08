const valores = [7.0, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

//adicionando novos valores no array
valores.push({id: 3}, false, null, 'teste')
console.log(valores)
 
//pegar o últomo valor do array e retira o valor
console.log(valores.pop())
//deletar valores
delete valores[0]
console.log(valores)

console.log(typeof valores)