function fatorial(num) {

    if (num == 0 || num == 1) {
        return 1;
    }

    let resultadoFatorado = 1 // Inicializa resultadoFatorado com 1
    while (num > 1) {

        resultadoFatorado *= num; // Multiplica resultadoFatorado pelo valor atual de num
        num--
    }

    return resultadoFatorado
}

console.log(fatorial(5))
console.log(fatorial(3))
console.log(fatorial(0))
console.log(fatorial(2))
console.log(fatorial(10));