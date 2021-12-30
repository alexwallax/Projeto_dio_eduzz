// rest operator ... -> usa os tres pontos la lista de paramétros
function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0);
}
console.log(sum(5, 5, 5, 2, 3));

// pega o 1º e o 2º argumento e o restante transforam em um array
const sum06 = (a, b, ...rest) => {
    console.log(a, b, rest);
};
console.log(sum06(5, 5, 5, 2, 3));

// spread operator - quebra uma string
const str = 'Alex Wallace';
function logArgs(...args) {
    console.log(args);
}
logArgs(...str);

// spread operator - combina arrays
const arr = [1, 2, 3, 4];
const arr2 = [...arr, 5, 6, 7];
console.log(arr2);

const arr3 = [...arr2, ...arr, 0, 0, 0];
console.log(arr3);


//*****************************************************************/
var arr4 = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr4[0];
var banana = arr4[1];
var orange = arr4[2];
var toamto = arr4[3][0];

// destructuring assignment
var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['tomato']];

console.log(apple, apple2);
console.log(tomato2);
















console.log('');
console.log('');