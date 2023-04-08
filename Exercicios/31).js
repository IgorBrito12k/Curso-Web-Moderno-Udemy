function contarNumeros(vetor) {
    let negativos = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            negativos++
        }
    }

    console.log(`\nO número de negativos no vetor é: ${negativos} `)
};

contarNumeros([-1, 8, 15, -12, 25, -18]);