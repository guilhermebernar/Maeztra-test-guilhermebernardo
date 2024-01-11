function verificaSequencia(caracteres) {
    const pilha = [];
    const pares = {
      ')': '(',
      '}': '{',
      ']': '['
    };
  
    for (const char of caracteres) {
      if (['(', '{', '['].includes(char)) {
        pilha.push(char);
      } else if (pilha.length === 0 || pilha.pop() !== pares[char]) {
        return false;
      }
    }
  
    return pilha.length === 0;
  }
  
  // Testes unitários
  console.log(verificaSequencia("{[()]}")); // true
  console.log(verificaSequencia("{[(])}")); // false
  console.log(verificaSequencia("{{[[(())]]}}")); // true
  console.log(verificaSequencia("{[}")); // false
  
  // Documentação
  /**
   * Verifica se uma sequência de parênteses, colchetes e chaves está bem formada.
   * @param {string} caracteres - A string contendo a sequência a ser verificada.
   * @return {boolean} Retorna true se a sequência estiver bem formada, false caso contrário.
   *
   * A função percorre a string e usa uma estrutura de pilha para manter o controle dos caracteres de abertura.
   * Para cada caractere de fechamento encontrado, a função verifica se corresponde ao último caractere de abertura
   * na pilha. Se a sequência estiver bem formada, todos os caracteres de abertura terão um correspondente de fechamento
   * e a pilha estará vazia no final da execução.
   */
  