let ope = ['+', '-', '*', '/']
let resultado = 0

const operacao = function (num1, ope, num2) {
    
    switch (ope) {
        case ('+'):
            resultado = num1 + num2
            console.log(`O resulta da operação é ${resultado}`)
            break
        case ('-'):
            resultado = num1 - num2
            console.log(`O resulta da operação é ${resultado}`)
            break
        case ('*'):
            resultado = num1 * num2
            console.log(`O resulta da operação é ${resultado}`)
            break
        case ('/'):
            resultado = num1 / num2
            console.log(`O resulta da operação é ${resultado}`)
            break
        
        default:
            console.log('Operação inválida')
    }

}

operacao(5,'+',5)
operacao(5,'-',5)
operacao(5,'*',5)
operacao(5,'/',5)
operacao(5,'**',5);