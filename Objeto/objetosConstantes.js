// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa <- 456 -> {...} 
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa)

//não funciona a troca por o pedro está congelado
pessoa.nome = 'Maria'
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({ nome: 'João'})
//não vai dar pra trocar
pessoaConstante.nome = 'maria'
console.log(pessoaConstante)

