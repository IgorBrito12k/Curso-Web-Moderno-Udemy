function classificaoTriangulo(a, b ,c) {
    
    if (a == b && b == c) {
        console.log('\nEste é o triangulo: Equilatero')
    } else if ( a == b || a == c || c == b){
        console.log('\nEste é o triangulo: Isósceles')
    } else if (a != b && b != c) {
        console.log('\nEste é o Triangulo: escaleno')
    } else if ('.') {
        console.log('\nNenhuma medida foi informada!');
    }
}

classificaoTriangulo(3, 3, 3)
classificaoTriangulo(3, 2, 3)
classificaoTriangulo(6, 2, 3);
