function aritmetica(a1, n, r) {
    resultado = a1 + (n - 1) * r
    return resultado
}

function geometrica(a1, n, q) {
    resultado = a1 *((q ** n) - 1) / (q - 1)
    return resultado
}

console.log(aritmetica(4, 16, 3))
console.log(geometrica(3, 10, 2));