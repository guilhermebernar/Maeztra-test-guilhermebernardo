function verificaOrdem(numero) {
    const digitos = numero.toString();
    let ordem = null; // null indica que ainda não determinamos a ordem
  
    for (let i = 1; i < digitos.length; i++) {
      if (digitos[i - 1] < digitos[i]) {
        if (ordem === 'decrescente') {
          return "Não está ordenado"; // Encontramos uma contradição
        }
        ordem = 'crescente';
      } else if (digitos[i - 1] > digitos[i]) {
        if (ordem === 'crescente') {
          return "Não está ordenado"; // Encontramos uma contradição
        }
        ordem = 'decrescente';
      }
      // Se os dígitos são iguais, não afeta a ordem e continua a iteração
    }
  
    return "Está ordenado"; // Se chegou até aqui, está ordenado
}
  
  
  // Testes unitários
  console.log( "STATUS: ", verificaOrdem(12345678)); // Está ordenado
  console.log( "STATUS: ", verificaOrdem(876543210)); // Está ordenado
  console.log( "STATUS: ", verificaOrdem(152456457)); // Não está ordenado
  