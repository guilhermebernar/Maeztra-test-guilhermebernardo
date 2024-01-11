
function calculaArranjosDeFotos(pessoas) {
    // Uma função auxiliar para calcular fatorial
    function fatorial(n) {
      let resultado = 1;
      for (let i = 2; i <= n; i++) {
        resultado *= i;
      }
      return resultado;
    }
  
    // O número total de arranjos é o fatorial do número de pessoas
    return fatorial(pessoas);
  }
  
  // Testes unitários
  console.log(calculaArranjosDeFotos(3)); // 6, pois 3! = 3 x 2 x 1 = 6
  console.log(calculaArranjosDeFotos(4)); // 24, pois 4! = 4 x 3 x 2 x 1 = 24
  console.log(calculaArranjosDeFotos(5)); // 120, pois 5! = 5 x 4 x 3 x 2 x 1 = 120
  
  // Documentação
  /**
   * Calcula o número total de arranjos possíveis para um dado número de pessoas.
   * @param {number} pessoas - O número de pessoas que serão organizadas para uma foto.
   * @return {number} O número total de arranjos possíveis.
   *
   * A função utiliza o conceito matemático de permutações sem repetição, onde o número
   * de permutações possíveis é o fatorial do número de pessoas. O fatorial é calculado
   * como o produto de todos os inteiros positivos até o número dado.
   */
  
