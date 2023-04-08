function verificaCrescimento(altura1, taxa1, altura2, taxa2) {
    let anos = 0;
    if (altura1 == altura2) {
      if (taxa1 > taxa2) {
        console.log("A criança 1 ultrapassará a criança 2 em 1 ano.");
      } else if (taxa1 < taxa2) {
        console.log("A criança 2 ultrapassará a criança 1 em 1 ano.");
      } else {
        console.log("As crianças possuem a mesma altura e taxa de crescimento.");
      }
    } else {
      let maiorAltura = Math.max(altura1, altura2);
      let menorAltura = Math.min(altura1, altura2);
  
      while (menorAltura < maiorAltura) {
        menorAltura = taxa1 + taxa1;
        maiorAltura = taxa2 + taxa2;
        anos++;
      }
  
      console.log(`A criança menor ultrapassará a maior em ${anos} anos.`);
    }
  };
  
  verificaCrescimento(130, 5, 110, 8);
  verificaCrescimento(130, 8, 130, 8);
 
  