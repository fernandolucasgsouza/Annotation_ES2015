

/**
 * Map #01
 */
const values = [2, 3, 4, 5, 10];

const soma_10 = (v) => v + 10;
const dobro = (v) => v * 2;
const triplo = v => v * 3;
const money = v => `R$ ${parseFloat(v).toFixed(2).replace('.', ',')}`

let result = values.map(soma_10).map(dobro).map(triplo).map(money);

console.log(result);


/**
 * Map #02 retornar array apenas preco
 */

const carrinho = [
   '{"nome":"Borracha", "preco":3.45}',
   '{"nome":"Caderno", "preco":13.90}',
   '{"nome":"Kit de Lapis", "preco":41.22}',
   '{"nome":"Caneta", "preco":7.50}',
]

let car = carrinho.map(c => JSON.parse(c).preco);
console.log(car);
