const value = 'Global';

function myFunction() {
   console.log(value);
}

function exec() {
   const valor = 'Local';
   myFunction();
}
exec(); // output : Global

// -----------------------------------------------------------------------------
// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variávies externas à função

// Contexto léxico

const x = 'Global';

function fora() {
   const x = 'Local';
   function dentro() {
      return x;
   }
   return dentro;
}
const minhaFuncao = fora();
console.log(minhaFuncao()); // output : Local
