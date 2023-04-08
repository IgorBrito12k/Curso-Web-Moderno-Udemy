let contagem = 0
let numero = 1

while (contagem < 100) {
    numero++
    contagem++
    if (numero % 2 == 0) {
        tipo = 'Par'
    } 

    console.log(numero, tipo)
};