function criarProduto(nome, preco)  {
    return {
        nome,
        preco,
        desconto:0.1
    }
}

console.log(criarProduto('notebook', 2199.50))
console.log(criarProduto('tijolo', 300.54))
console.log(criarProduto('estojo', 50.78))
