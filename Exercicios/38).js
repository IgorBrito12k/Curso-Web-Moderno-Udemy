function impares(inicio, fim) {
    if (inicio > fim) {
        console.log('operação invalida')
    } else {
        for (inicio = 0; inicio <= fim; inicio++) {
            if (inicio % 2 == 0) {

            } else {
                console.log(inicio)
            }
        }
    }
}

impares(0, 100)
impares(100, 5);