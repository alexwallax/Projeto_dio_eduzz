

// função verifica se uma palavra é igual de tras para frente 
function verificaPalidromo(string) {
    if(!string) return "string inexistente"; // verificar se a variavel é nula, vazia ou indefinida

   return string.split("").reverse().join("") === string;
}

console.log(verificaPalidromo("gfae"));


console.log("");
console.log("");

//*******************************************************/
function substituiPares(array) {
    if(!array.length) return -1;

    for (let i = 0; i < array.length; i++) {
        if(array[i] === 0) {
            console.log("Já é zero!");
        } else if(array[i] % 2 === 0) {
            console.log(`Subistituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }

    return array;

}

let arr08 = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(substituiPares(arr08));
