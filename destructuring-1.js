
const pessoa = {
   nome: 'Fernando',
   idade: 30,
   endereco:
   {
      logradouro: 'Rua ABC',
      numero: 100
   }
}

const { nome, idade } = pessoa;
console.log(nome, idade);
//output: Fernando 30

const { nome: n, idade: i } = pessoa;
console.log(n, i);
//output: Fernando 30

const { endereco: { logradouro, numero } } = pessoa;
console.log(logradouro, ', ', numero);
//output: Rua ABC ,  100

