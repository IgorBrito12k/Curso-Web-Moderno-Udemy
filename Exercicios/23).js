function aluno(codigo, nota1, nota2, nota3) {

    let notas = [nota1, nota2, nota3]
    let notaMaior = notas.reduce(function (a, b) {
        return a > b ? a : b;
        //condição ? valor_se_verdadeiro : valor_se_falso;
    })
    let peso1 = 3
    let peso2 = 3
    let peso3 = 3
    let pesoMaior = 4

    if (notaMaior == nota1) {
        peso1 = pesoMaior
    } else if (notaMaior == nota2) {
        peso2 = pesoMaior
    } else if (notaMaior == nota3) {
        peso3 = pesoMaior
    }


    mediaPonderada = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3)

    if (mediaPonderada >= 5 && mediaPonderada <= 10) {
        decisao = 'Aprovado'
    } else {
        decisao = 'Reprovado'
    }

    console.log('\n--------------------------------------------------------\n')

    console.log(`O aluno do código ${codigo} possui a nota:\n
    nota 1: ${nota1}, peso: ${peso1}
    nota 2: ${nota2}, peso: ${peso2}
    nota 3: ${nota3}, peso: ${peso3}\n
    E possui a media ponderada de ${mediaPonderada.toFixed(2)}, portanto o aluno está: ${decisao}`)
}

aluno(1, 5, 6, 4)
aluno(2, 10, 3, 9)
aluno(3, 4, 3, 2);