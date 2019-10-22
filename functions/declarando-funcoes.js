
console.log(soma(3, 4));      //Success -> output: 7


//function declarations, carrega antes de tudo, pois a chamda dela pode ser conforme acima
function soma(a, b) {
   return a + b;
}

//function expression
const subtracao = function (x, y) {
   return x - y;
}
console.log(subtracao(3, 4)); //Error -> output: -1

//named function expression
const mult = function mult(x, y) {
   return x * y;
}
console.log(mult(3, 4));      //Success -> output: 12