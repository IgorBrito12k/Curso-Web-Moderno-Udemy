function notas(nota) {
    if (nota >= 40 && nota <= 100) {

        nota = Math.ceil(nota / 5) * 5
        console.log(`\naluno aprovado com a nota de: ${nota}`)

    } else if (nota < 40 && nota >= 0) {

        nota = Math.ceil(nota / 5) * 5
        console.log(`\naluno reprovado com a nota de: ${nota}`)

    } else {

        console.log(`\nA nota ${nota}: é inválida`)
    }
}

notas(84)
notas(40)
notas(32)
notas(100)
notas(120)
notas(0)
notas(-1);