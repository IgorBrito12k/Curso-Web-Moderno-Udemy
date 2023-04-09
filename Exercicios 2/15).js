function checarAnoBisexto(ano) {
    if (ano % 4 === 0 && ano % 100 != 0){
        console.log(true)
    } else if (ano % 4 === 0 && ano % 400 === 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}

checarAnoBisexto(2020)
checarAnoBisexto(2100)
