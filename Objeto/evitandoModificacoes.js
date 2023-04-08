//Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'qualquer',
    preco: 1.99,
    tag: 'promocao'
})
//é um objeto é exensível
console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' //não vai surtir efeito nenhum
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = {
    nome: 'Camila',
    idade: 24
}

//selar o objeto para (não da para adicionar nem excluir os atributos, apenas modificar)
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' //não vai surtir efeito nenhum
delete pessoa.nome //não vai surtir efeito nenhum
pessoa.idade = 25
console.log(pessoa)

//object.freeze = selado + valores constantes