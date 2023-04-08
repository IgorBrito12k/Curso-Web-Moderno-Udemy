function contemTodasLetras(palavra1, palavra2) {
    // Transforma as strings em letras minúsculas
    let str1 = palavra1.toLowerCase();
    let str2 = palavra2.toLowerCase();

    for (let i = 0; i < str1.length; i++) {
        if (str2.indexOf(str1[i]) == -1) {
            return false; // Se o caractere não está presente, retorna false
        }
    }

    for (let i = 0; i < str2.length; i++) {
        if (str1.indexOf(str2[i]) == -1) {
            return false; // Se o caractere não está presente, retorna false
        }
    }

    return true; // Se todos os caracteres estão presentes, retorna true
};
console.log(contemTodasLetras("abacaxi", "xabaca")); // true
console.log(contemTodasLetras("casa", "rato")); // false
console.log(contemTodasLetras("Cão", "Nós amamos os cães!")); // true
console.log(contemTodasLetras("JavaScript", "java")); // false
