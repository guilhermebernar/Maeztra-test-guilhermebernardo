function identificaDuplicados(array) {
    const duplicatas = [];
    const visto = new Set();
  
    for (const valor of array) {
      if (visto.has(valor)) {
        // Se o valor já foi visto, é uma duplicata e adicionamos ao array de duplicatas
        // apenas se ainda não foi adicionado.
        if (!duplicatas.includes(valor)) {
          duplicatas.push(valor);
        }
      } else {
        // Se o valor não foi visto, é adicionado ao Set para rastreamento
        visto.add(valor);
      }
    }
  
    return duplicatas;
  }
  
  // Testes unitários
  console.log(identificaDuplicados([4, 5, 44, 98, 4, 5, 6, 7])); // Output esperado: [4, 5]
  
  // Documentação
  /**
   * Identifica números duplicados em um array de inteiros.
   * @param {number[]} array - O array de inteiros a ser verificado.
   * @return {number[]} Um array contendo todos os valores duplicados, sem repetições.
   *
   * A função percorre cada elemento do array e utiliza um Set para rastrear os valores já vistos.
   * Se um valor já está presente no Set, ele é adicionado ao array de duplicatas, garantindo
   * que apenas uma cópia de cada duplicata seja incluída no array de retorno.
   */
  
