const alunos = [
    { nome:'João', nota: 7.3, bolsista: false},
    { nome:'Maria', nota: 9.2, bolsista: true},
    { nome:'Igor', nota: 9.8, bolsista: false},
    { nome:'Camila', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.bolsista))

console.log('Todos os alunos são bolsista?')
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

console.log('Tem algum aluno bolsista?')
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))