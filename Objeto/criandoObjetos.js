//usando a notação literal
const obj1 = {}
console.log(obj1)

//Object em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//funções contrutoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('caneta', 7.99, 0.15)
const p2 = new Produto('notebook', 2.568, 0.25)
console.log(p1.getPrecoComDesconto().toFixed(2), p2.getPrecoComDesconto().toFixed(2))

//função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return ( salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('igor', 1300, 4)
const f2 = criarFuncionario('Camila', 3300, 1)
console.log(f1.getSalario().toFixed(2), f2.getSalario().toFixed(2))

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma função famosa que retorna um objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)