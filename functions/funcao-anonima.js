const soma = function (x, y) {
   return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
   console.log(operacao(a, b));
}

imprimirResultado(3, 4); //output : 7
imprimirResultado(3, 4, soma);  //output : 7
imprimirResultado(3, 4, function (x, y) {
   return x - y;
});  //output : -1
imprimirResultado(3, 4, (x, y) => x * y);  //output : 12


const pessoa = {
   falar: function () {
      console.log('Opa!');
   }
}
pessoa.falar(); //output : Opa!

const pessoa2 = {
   falar() {
      console.log('Opaa!');
   }
}
pessoa2.falar(); //output : Opaa!