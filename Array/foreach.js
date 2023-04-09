const aprovados = ['Aghata', 'Aldo', 'Daniel', 'Raquel']

//indice sempre vai ser o 2° parametro
//array sempre será o 3° parametro
aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice +1}) ${nome}`)
    //console.log(array)
})

//outro exemplo
aprovados.forEach(nome => console.log(nome))

//outro exemplo
const exibirAprovados = (nome, indice) => console.log(indice+1, nome)
aprovados.forEach(exibirAprovados)