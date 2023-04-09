Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'Ipad Pro', preco: 4250, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.50, fragil: true},
    { nome: 'Copo de Plástico', preco: 20, fragil: false},
    { nome: 'Tv Samsung', preco: 3150, fragil: true},
]

console.log(produtos.filter2(function(p) {
    return false
}))

//ou
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil //sempre será true

console.log(produtos.filter2(caro).filter2(fragil))