function calcularCedulas(valor) {
    let cedulas = [100, 50, 10, 5, 1];
    let qtdCedulas = [];

  
    for (let i = 0; i < cedulas.length; i++) {
      let qtdAtual = Math.floor(valor / cedulas[i]);
      valor -= qtdAtual * cedulas[i]; //O operador de atribuição de subtração (-=) subtrai o valor do operando direito de uma variável e atribui o resultado à variável
  
      if (qtdAtual > 0) {
        qtdCedulas.push(`${qtdAtual} nota(s) de R$ ${cedulas[i]}`);
      }
    }
  
    return qtdCedulas.join('. '); //.join junta todos os elementos de um array
  }
  
  console.log(calcularCedulas(18)); 
  console.log(calcularCedulas(100)); 
  console.log(calcularCedulas(89)); 
  console.log(calcularCedulas(90)); 


  
  