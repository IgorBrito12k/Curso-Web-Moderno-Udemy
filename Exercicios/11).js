function anoBissexto(ano) {
    if ( ano % 4 == 0) {
        return true
    } else {
        return false
    }
}

console.log(anoBissexto(0))
console.log(anoBissexto(2004))
console.log(anoBissexto(2006))
console.log(anoBissexto(2008))
console.log(anoBissexto(2009));