function trocaVetor(vetor1, vetor2) {

    [vetor1, vetor2] = [vetor2, vetor1]
    console.log("vetor1: " + vetor1)
    console.log("vetor2: " + vetor2)
}

trocaVetor([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);
