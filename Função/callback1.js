const fabricantes = ['Mercedes', 'Audi', 'BMW', 'Ferrari']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
})
fabricantes.forEach(fabricantes => console.log(fabricantes))