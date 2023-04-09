function receberSomenteOsParesDeindicesPares(numeros) {
    const numerosParesIndicesPares = [];
  
    for (let i = 0; i < numeros.length; i += 2) {
      const numeroAtual = numeros[i];
  
      if (numeroAtual % 2 === 0) {
        numerosParesIndicesPares.push(numeroAtual);
      }
    }
  
    console.log(numerosParesIndicesPares)
  }

receberSomenteOsParesDeindicesPares([1, 2, 3, 4]) //retornará []
receberSomenteOsParesDeindicesPares([10, 70, 22, 43]) //retornará [10, 20]