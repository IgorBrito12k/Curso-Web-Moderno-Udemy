const produto1 = {}
produto1.nome = 'Celular Ultra Mega'
produto1.preco = 4998.90
produto1['Desconto Legal'] = 0.40 //evitar atributos com espaço

console.log(produto1)

const produto2 ={
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(produto2)

//criando um json
//json é um formato textual de um objeto
'{ "nome": "camisa Polo", "preco": 79.90 }'
