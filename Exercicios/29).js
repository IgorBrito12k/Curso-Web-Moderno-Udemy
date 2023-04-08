function contarNumeros(vetor) {
    let dentro = 0;
    let fora = 0;

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            dentro++;
        } else {
            fora++;
        }
    }

    console.log(`${dentro} números estão dentro do intervalo [10,20] e ${fora} estão fora.`);
};

contarNumeros([8, 15, 12, 25, 18]);