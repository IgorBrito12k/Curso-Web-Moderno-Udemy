let multiplicado = []

function multiplicaTudo(vetor, num) {

    for (i = 0; i < vetor.length; i++) {
        vetor[i] *= num
        console.log(`O vetor multiplicado por 'num': ${[vetor[i]]}`)
    }
    console.log('\n')
}

multiplicaTudo([1, 2, 3, 4, 5], 2)

function multiplicaPor5(vetor, num) {

    for (i = 1; i < vetor.length; i++) {
        if (vetor[i] >= 5) {
            vetor[i] *= num

            console.log(`O vetor multipicado por 'num' se o elemento for maior que 5: ${vetor[i]}`)
        }
    }
};

multiplicaPor5([1, 2, 3, 4, 5, 6, 7], 2)