function contarParesEImpares(numeros) {
    let pares = 0;
    let impares = 0;
  
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 === 0) {
        pares++;
      } else {
        impares++;
      }
    }
  
    console.log(`O vetor contém ${pares} números pares e ${impares} números ímpares.`);
  };
  
  // Exemplo de uso:
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  contarParesEImpares(numeros); // O vetor contém 5 números pares e 5 números ímpares.

 