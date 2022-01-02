// função verifica se uma palavra é igual de tras para frente 
function verificaPalidromo(string) {
    if(!string) return "string inexistente"; // verificar se a variavel é nula, vazia ou indefinida

   return string.split("").reverse().join("") === string;
}

console.log(verificaPalidromo("gfae"));