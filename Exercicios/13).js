dias = [1, 2, 3, 4, 5, 6, 7]

const diaValido = function (dias) {
    switch (Math.floor(dias)) {
        case 1: case 7:
            console.log('Fim de semana')
            break
        case 2: case 3: case 4: case 5: case 6:
            console.log('Dia util da semana')
            break
        default:
            console.log('Dia inválido')
    }
}

diaValido(5)
diaValido(1)
diaValido(7)
diaValido(0)
diaValido(6);