function calculaPlanos(idade) {
    const plano = 100
    
    if ( idade > 0 && idade <= 10) {
        valor = plano + 80
        console.log(`O valor pago para a idade ${idade} anos é de R$ ${valor}`)

    } else if ( idade > 10 && idade <= 30) {
        valor = plano + 50
        console.log(`O valor pago para a idade ${idade} é de R$ ${valor}`)

    } else if ( idade > 30 && idade <= 60) {
        valor = plano + 95
        console.log(`O valor pago para a idade ${idade} é de R$ ${valor}`)

    } else if ( idade > 60 ) {
        valor = plano + 130
        console.log(`O valor pago para a idade ${idade} é de R$ ${valor}`)

    } else {
        console.log(`Esta idade de ${idade} anos não é válida`)
    }
  }
  
calculaPlanos(9)
calculaPlanos(25)
calculaPlanos(42)
calculaPlanos(61)
calculaPlanos(-41);

//ou
function calcularValorPlano(idade) {
    let valorBase = 100;
    let valorAdicional = 0;
  
    if (idade < 10) {
      valorAdicional = 80;
    } else if (idade >= 10 && idade <= 30) {
      valorAdicional = 50;
    } else if (idade > 30 && idade <= 60) {
      valorAdicional = 95;
    } else if (idade > 60) {
      valorAdicional = 130;
    } else {
      console.log("Idade inválida");
      return;
    }
  
    let valorTotal = valorBase + valorAdicional;
    console.log(`O valor a ser pago pelo conveniado de ${idade} anos é de R$${valorTotal}.`);
  }
  
  // Exemplos de uso
  calcularValorPlano(8); 
  calcularValorPlano(25); 
  calcularValorPlano(40);
  calcularValorPlano(70); 