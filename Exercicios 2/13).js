const objetoParaArray = ({
    nome: 'igor',
    profissao: 'Desenvolvedor de software'
})

const nome = nome => nome.objetoParaArray
const profissao = profissao => profissao.objetoParaArray

//console.log(objetoParaArray)
let array = []
array.push(objetoParaArray)
console.log(array)

const objetoParaArray2 = ({
    codigo: 11111,
    preco: 12000
})

const codigo = codigo => codigo.objetoParaArray2
const preco = preco => preco.objetoParaArray2
//console.log(objetoParaArray2)
let array2 = []
array2.push(objetoParaArray)
console.log(array2)