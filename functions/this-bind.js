// bind-1
const pessoa = {
   saudacao: 'Bom dia',
   falar() {
      console.log(this.saudacao);
   }
}

pessoa.falar(); // Success -> output : Bom dia

const falar = pessoa.falar;
falar(); // Error -> output  : undefined

//Resolvendo com bind, passando o this pelo bind
const falar2 = pessoa.falar.bind(pessoa);
falar2(); // Success -> output  : Bom dia

//------------------------------------------------------------
// bind-2

function Pessoa() {
   this.idade = 0;
   setInterval(function () {
      this.idade++;
      console.log(this.idade);
   }, 1000);
}
// new Pessoa;
// Error -> output : NaN, NaN, NaN

function PessoaBind() {
   this.idade = 0;
   setInterval(function () {
      this.idade++;
      console.log(this.idade);
   }.bind(this), 1000);
}
// new PessoaBind;
// Success -> output : 1, 2, 3

function PessoaSelf() {
   this.idade = 0;
   const self = this;
   setInterval(function () {
      self.idade++;
      console.log(self.idade);
   }, 1000);
}
// new PessoaSelf;
// Success -> output : 1, 2, 3

//------------------------------------------------------------
// bind-3 com arrow function

function PessoaArrowFunc() {
   this.idade = 0;
   setInterval(() => {
      this.idade++;
      console.log(this.idade);
   }, 1000);
}
new PessoaArrowFunc;
// Success -> output : 1, 2, 3