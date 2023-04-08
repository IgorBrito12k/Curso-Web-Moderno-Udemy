const plano = ['a', 'b', 'c']

function salarios(plano, salario) {

    switch (plano) {
        case ('a'):
            const planoA = salario *  (10 / 100)
            salarioAumentado = salario + planoA
            console.log(`O aumento do salario para o plano a é de: ${salarioAumentado}`)
            break

        case ('b'):
            const planoB = salario *  (15 / 100)
            salarioAumentado = salario + planoB
            console.log(`O aumento do salario para o plano b é de: ${salarioAumentado}`)
            break

        case ('c'):
            const planoC = salario *  (20 / 100)
            salarioAumentado = salario + planoC
            console.log(`O aumento do salario para o plano c é de: ${salarioAumentado}`)
            break
        default:
            console.log('Este é um plano invalido')
    }
}



salarios('a', 1000)
salarios('b', 1000)
salarios('c', 1000)
salarios('d', 1000);