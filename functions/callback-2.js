let notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

//sem callback
let notasBaixas = [];
for (const key in notas) {
   if (notas[key] < 7)
      notasBaixas.push(notas[key]);
}
console.log(notasBaixas); // output : [ 6.5, 5.2, 3.6 ]

//com callback
const notasBaixas2 = notas.filter(function (notas) {
   return notas < 7;
})
console.log(notasBaixas2); // output : [ 6.5, 5.2, 3.6 ]

const notasBaixas3 = notas.filter(n => n < 7)
console.log(notasBaixas3); // output : [ 6.5, 5.2, 3.6 ]