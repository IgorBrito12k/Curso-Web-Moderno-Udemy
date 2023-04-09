const pilotos = ['Vettel', 'Alonso', 'Hamilton', 'Massa']
pilotos.pop() //tira o último elemento do array
console.log(pilotos)

pilotos.push('Verstapen') //adiciona ao final do array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Senna')
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //novo array a partir do indice 1 até o 3
console.log(algunsPilotos2)