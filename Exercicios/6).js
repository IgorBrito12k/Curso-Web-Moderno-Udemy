function montanteJurosSimples(capital, taxa, tempo) {
    const juros = (capital * (taxa / 100) * tempo)
    return capital + juros;
}

console.log((`O montante a juros simples é: R$ `) + montanteJurosSimples(620, 1.5, 24).toFixed(2))

function montanteJurosCompostos(capital, taxa, tempo) {
    return capital * (1 + (taxa / 100)) ** tempo;
}

console.log((`O montante a juros compostos é: R$ `) + montanteJurosCompostos(620, 1.5, 24).toFixed(2));