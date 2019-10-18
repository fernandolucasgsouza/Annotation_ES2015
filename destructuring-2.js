
const [a] = [30];
console.log(a);
//output: 30

const [nome, idade] = ['Fernando', 30, true];
console.log(nome, idade);
//output: Fernando 30

const [n1, , n3, , n5 = 1] = [10, 30, 50, 8];
console.log(n1, n3, n5);
//output: 10 50 1
