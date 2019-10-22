
function criarProduto(nome = '', preco = 0.0) {
   return {
      nome,
      preco,
      desconto: (preco * 10) / 100,
   }
}

//Factory
console.log(criarProduto('NoteBook', 4500)); // output: { nome: 'NoteBook', preco: 4500, desconto: 450 }
console.log(criarProduto('iPad', 1199.99)); // output: { nome: 'iPad', preco: 1199.99, desconto: 119.999 }

//Função construtora
const prodA = new criarProduto('Arroz', 10);
console.log(prodA); // output: { nome: 'Arroz', preco: 10, desconto: 1 }

const prodB = new criarProduto('Feijão', 5.5);
console.log(prodB); // output: { nome: 'Feijão', preco: 5.5, desconto: 0.55 }


//-----------------------------------------------------------------------------------------------------------
//Class
class Pessoa {
   constructor(nome) {
      this.nome = nome;
   }

   falar() {
      console.log(`Meu nome é ${this.nome}`);
   }
}

const p1 = new Pessoa('Fenando');
p1.falar(); // output: Meu nome é Fenando

//Factory melhor utilização não perde o nome
const criarPessoa = nome => {
   return {
      falar: () => console.log(`Meu nome é ${nome}`)
   }
}
const p2 = criarPessoa('Lucas');
p2.falar(); // output: Meu nome é Lucas