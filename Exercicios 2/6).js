function inverso(valor) {
    if (typeof valor === 'boolean') {
        console.log(!valor)
    } else if (typeof valor === 'number') {
        console.log(-valor)
    } else {
        console.log('booleanos ou números esperado, mas o parametro é do tipo string')
    }
}

inverso(true)
inverso("5")
inverso(-2000)
inverso("programação")