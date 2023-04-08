console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) //undefined

aprovados[3] = 'Igor'
aprovados.push('Camila')
console.log(aprovados.length)
console.log(aprovados)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados === null)
console.log(aprovados === undefined)
console.log(aprovados)
aprovados[8] = 'Thalita'
console.log(aprovados)

aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])




aprovados2 = ['Bia', 'Ana', 'Carlos']
aprovados2.splice(1, 1)
console.log(aprovados2)

aprovados3 = ['Bia', 'Ana', 'Carlos']
aprovados3.splice(1, 2, 'elemento1', 'elemento2')
console.log(aprovados3)

aprovados4 = ['Bia', 'Ana', 'Carlos']
aprovados4.splice(1, 1, 'elemento1', 'elemento2')
console.log(aprovados4)