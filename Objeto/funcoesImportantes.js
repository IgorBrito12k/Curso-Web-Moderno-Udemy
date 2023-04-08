const pessoa = {
    nome: 'igor',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

//ou usando destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

//definir mais propriedade
Object.defineProperty(pessoa, 'dataNascimento', {
    //vai ser listado?
    enumerable: true,
    //vai ser modificada?
    writable: false,
    //atribui valor
    value: '05/08/2002'
})

pessoa.dataNascimento = '12/08/2002'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//object.assign
const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
//adicionando dentro do objeto dest (destino)
const obj = Object.assign(dest, o1, o2)
console.log(obj)