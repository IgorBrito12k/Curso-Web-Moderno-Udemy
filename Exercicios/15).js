let carros = 'Hatch, Sedans, Motocicletas, Caminhonetes';

const carro = function (carros) {
    let carro = carros.split(', ');
    for (let i = 0; i < carro.length; i++) {
        switch (carro[i]) {
            case ('Hatch'):
                console.log('Compra efetuada com sucesso')
                break
            case ('Sedans'):
                console.log('Tem certeza que não prefere este modelo?')
                break
            case ('Motocicletas'):
                console.log('Tem certeza que não prefere este modelo?')
                break
                case ('Caminhonetes'):
                console.log('Tem certeza que não prefere este modelo?')
                break
            default:
                console.log('Não trabalhamos com este tipo de automóvel aqui')
        }
    }
}

carro('Hatch')
carro('Motocicletas')
carro('Sedans')
carro('Caminhonetes');