function atribuirConceitos(notas) {
    const conceitos = ['D', 'C', 'B', 'A'];
    const conceitosIntervalos = [4.9, 6.9, 8.9, 10];
    const conceitosNotas = [];
  
    for (let i = 0; i < notas.length; i++) {
      let nota = notas[i];
      let conceito = '';
  
      for (let j = 0; j < conceitosIntervalos.length; j++) {
        if (nota <= conceitosIntervalos[j]) {
          conceito = conceitos[j];
          break;
        }
      }
  
      conceitosNotas.push(`${nota}: ${conceito}`);
    }
  
    console.log(conceitosNotas);
  };
  
const notas = [2.5, 7.8, 5.6, 9.2, 6.1];
atribuirConceitos(notas);