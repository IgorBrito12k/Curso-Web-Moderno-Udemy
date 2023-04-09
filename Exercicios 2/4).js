const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'maio', 
'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro',
'Dezembro']

function nomeDoMes(mes) {
    let nome = '';
    for (i = 1; i < meses.length; i++) {
        if (mes === i + 1) {
            nome = meses[i];
            break
        }
    }
    console.log(nome)
}

nomeDoMes(8)