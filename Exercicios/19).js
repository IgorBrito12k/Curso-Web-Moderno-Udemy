const codigo = [100, 200, 300, 400, 500, 600]

const cardapio = function (codigo, quantidade) {

    switch (codigo) {

        case 100:
            preco = 3.00
            precoFinal = preco * quantidade
            console.log(`O valor a ser pago pelo cachorro quente é de R$ ${precoFinal}`)
            break

        case 200:
            preco = 4.00
            precoFinal = preco * quantidade
            console.log(`O valor a ser pago pelo Hamburguer simples é de R$ ${precoFinal}`)
            break

        case 300:
            preco = 5.50
            precoFinal = preco * quantidade
            console.log(`O valor a ser pago pelo Cheeseburger é de R$ ${precoFinal}`)
            break

        case 400:
            preco = 7.50
            precoFinal = preco * quantidade
            console.log(`O valor a ser pago pelo Bauru é de R$ ${precoFinal}`)
            break

        case 500:
            preco = 3.50
            precoFinal = preco * quantidade
            console.log(`O valor a ser pago pelo Refrigerante é de R$ ${precoFinal}`)
            break

        case 600:
            preco = 2.80
            precoFinal = preco * quantidade
            console.log(`O valor a ser pago pelo Suco é de R$ ${precoFinal}`)
            break

            default:
                console.log('O produto não existe')
    }
}

cardapio(100,1)
cardapio(100,3)
cardapio(200,1)
cardapio(300,1)
cardapio(400,1)
cardapio(500,1)
cardapio(600,1)
cardapio(700,1);