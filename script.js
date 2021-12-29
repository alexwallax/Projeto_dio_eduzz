/*******************************************************************/
// função
/*
function log(value) {
    console.log(value);
}
*/

// função anônima
var log = function(value) {
    console.log(value);
}

log('teste');

var sum = function(a, b) {
    return a + b;
}

console.log(sum(5, 5));
/*******************************************************************/
// arrow function com apenas um argumento não precisa dos parenteses
var sum01 = a => a + 5;

// arrow function simples não precisa de chaves nem da palavra return
var sum02 = (a, b) => a + b;

console.log(sum02(15, 5));



// arrow function com chaves para funções mais completas
var sum03 = (a, b) => {
    var x = 10;
    if(a > b) {

    }
    return a + b;
}

console.log(sum03(15, 15));


// arrow function retorn object
var createObj = () => ({ test: 123});

console.log(createObj());



/*******************************************************************/
// object - tem chave e valor
var prop01 = 'Digital Innovation One';

var obj = {
    teste: '123',
    prop01,
    sum: function sum(a, b) {
        return a + b;
    }
};

console.log(obj.sum(2, 2));
console.log(obj);



/*******************************************************************/
// função construtora
function Car() {
    this.foo = 'bar'
} 
// atráves do 'new' gera um objeto atráves da função construtora
console.log(new Car());



// definindo valor padrão para os parametros (caso os  valores não sejam passados pelo usuário por exemplo)
function mutiply(a = 2, b = 1) {
    return a * b;
}
// se for passado os parametros substituira os de cima
console.log(mutiply());



// lazy evaluetion
function randomNumber() {
    return Math.random() * 10;
}

console.log(randomNumber());