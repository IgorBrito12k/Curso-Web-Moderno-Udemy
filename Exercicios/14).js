let frutas = 'Maça-Kiwi-Melancia';

const fruteira = function (frutas) {
    let fruta = frutas.split('-');
    for (let i = 0; i < fruta.length; i++) {
        switch (fruta[i]) {
            case ('Maça'):
                console.log('Não estamos vendendo esta fruta aqui')
                break
            case ('Kiwi'):
                console.log('Estamos com escassez de Kiwi')
                break
            case ('Melancia'):
                console.log('Aqui está são 3 reais o quilo')
                break
            default:
                console.log('Está fruta é inválida')
        }
    }
}

fruteira('Maça')
fruteira('Melancia')
fruteira('Kiwi')
fruteira('Melão');