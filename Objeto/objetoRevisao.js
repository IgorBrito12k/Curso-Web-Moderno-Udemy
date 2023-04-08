//coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'cadeira'
produto['marca de produto'] = 'generica'
produto.preco = 220
console.log(produto);

delete produto.preco
delete produto['marca de produto']
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 90000,
    proprietario: {
        nome: 'igor',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Camila',
        idade: 24
    }, {
        nome: 'Thalita',
        idade: 20
    }],
    calcularValorSeguro: function() {

    }
}


carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'

console.log(carro);
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro);
//console.log(carro.condutores)
//console.log(carro.condutores.length)
