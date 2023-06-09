const pai = { nome: 'Igor', corCabelo: 'preto' }

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = "Carla"
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    //filha2 o atributo key pertence ao objeto property?
    filha2.hasOwnProperty(key) ?
    //se sim...
        console.log(key) : console.log(`Por herança: ${key}`);
}