function baseElevada(a, b) {
    return a ** b
}

console.log(baseElevada(3, 2));

// ou eu poderia
const exponentiation = (base, expoente) => {
    return Math.pow(base, expoente);
  }
  
  console.log(exponentiation(2, 3));