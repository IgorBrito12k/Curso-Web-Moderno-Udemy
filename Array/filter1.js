const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'Ipad Pro', preco: 4250, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.50, fragil: true},
    { nome: 'Copo de Plástico', preco: 20, fragil: false},
    { nome: 'Tv Samsung', preco: 3150, fragil: true},
]

console.log(produtos.filter(function(p) {
    return false
}))

//minha resposta
console.log(produtos.filter(function(p) {
    filtro1 = []
    if (p.preco > 500 && p.fragil == true){
        return filtro1
    }
}))

//ou
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil //sempre será true

console.log(produtos.filter(caro).filter(fragil))