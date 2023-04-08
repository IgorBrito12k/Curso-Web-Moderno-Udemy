function baskara(a, b, c) {
    const delta = (b * b) - (4 * a * c)
    console.log("\nO delta da operação é: " + delta)

    if (delta > 0) {
        const x1 = (- b - Math.sqrt(delta)) / (2 * a)
        console.log(`A raiz de x1 é = ${x1.toFixed(2)}`)

        const x2 = (- b + Math.sqrt(delta)) / (2 * a)
        console.log(`A raiz de x1 é = ${x2.toFixed(2)}`)
    } else {
        console.log('Delta negativo: inválido')
    }

}

baskara(3, -2, -8)

function baskara2(a, b, c) {
    const delta = (b * b) - 4 * a * c
    console.log("\nO delta da operação é: " + delta)

    if (delta > 0) {
        const x1 = (- b - Math.sqrt(delta)) / (2 * a)
        console.log(`A raiz de x1 é = ${x1.toFixed(2)}`)

        const x2 = (- b + Math.sqrt(delta)) / (2 * a)
        console.log(`A raiz de x1 é = ${x2.toFixed(2)}`)
    } else {
        console.log('Delta negativo: inválido')
    }

}

baskara2(1, -6, 10);
