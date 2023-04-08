//par nome/valor
const saudacao = 'Opa' //contexto léxico 1

function exec() {
    const saudacao = 'falaaa' //contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Igor',
    idade: 20,
    peso: 60,
    endereço: {
        logradouro: 'Rua Wanderley Libério Teles',
        numero: 1115
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)