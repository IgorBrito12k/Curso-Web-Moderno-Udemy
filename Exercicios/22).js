function valorPago(mes) {
    const meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const valor = 10000

    for (let i = 0; i < meses.length; i++) {
        let i = mes
        let montante = valor * (1 + (1 / 100)) ** meses[i]
        let juros = montante - valor
        let valorPago = valor + juros


        if (mes == i) {
            console.log(`O valor será de ${valorPago.toFixed(2)} no mês ${mes}`);
            break
        }
    }
}

valorPago(0)
valorPago(1)
valorPago(2)
valorPago(3)
valorPago(4)
valorPago(5)
valorPago(6)
valorPago(7)
valorPago(8)
valorPago(9)
valorPago(10)
valorPago(11)
valorPago(12);