const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',]

const numerosPorExtenso = function (numeros) {

    switch (numeros) {

        case ('0'):
            console.log('Número zero')
            break
        case ('1'):
            console.log('Número um')
            break
        case ('2'):
            console.log('Número dois')
            break
        case ('3'):
            console.log('Número três')
            break
        case ('4'):
            console.log('Número quatro')
            break
        case ('5'):
            console.log('Número cinco')
            break
        case ('6'):
            console.log('Número seis')
            break
        case ('7'):
            console.log('Número sete')
            break
        case ('8'):
            console.log('Número oito')
            break
        case ('9'):
            console.log('Número nove')
            break
        case ('10'):
            console.log('Número dez')
            break
            default:
                console.log('Número fora do intervalo')
    }
}

numerosPorExtenso('0')
numerosPorExtenso('1')
numerosPorExtenso('2')
numerosPorExtenso('3')
numerosPorExtenso('4')
numerosPorExtenso('5')
numerosPorExtenso('6')
numerosPorExtenso('8')
numerosPorExtenso('10')
numerosPorExtenso('11');