function media(vetor) {
    let media = 0
    let soma = 0
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i] //soma = soma + vetor[i]
        media = soma / vetor.length
        console.log(vetor[i])
    }

    console.log(`\nA media dos números do vetor é: ${media} `)
};

media([12, 13, 16, 18, 20]);