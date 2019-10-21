let fabricantes = ['Mercedes', 'Audi', 'BMW'];

const imprimir = function (nome, indice) {
   console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir);
//output
// 1. Mercedes
// 2. Audi
// 3. BMW

fabricantes.forEach((fab) => console.log(fab));
//output
// Mercedes
// Audi
// BMW