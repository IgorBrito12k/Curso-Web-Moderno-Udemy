function contarNumeros(vetor) {
let maior = vetor[0]
let menor = vetor[0]

    for (let i = 0; i < vetor.length; i++) {
        maior = Math.max(maior, vetor[i])
        menor = Math.min(menor, vetor[i])
    }

    console.log(`\nO maior número do vetor é o ${maior}.\nE o menor é o ${menor}`)
};

contarNumeros([8, 15, 12, 25, 18]);