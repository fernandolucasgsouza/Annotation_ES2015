
function rand({ min = 0, max = 1000 }) {
   const valor = Math.random() * (max - min) + min;
   return Math.floor(valor);
}

const obj = { max: 50, min: 40 }
console.log('rand 1: ', rand(obj));
console.log('rand 2: ', rand({ min: 955 }));
console.log('rand 3: ', rand({}));


//pode passar min ou max independente da ordem
function random([min = 0, max = 1000]) {
   if (min > max) [min, max] = [max, min];
   const valor = Math.random() * (max - min) + min;
   return Math.floor(valor);
}
console.log('random 1:', random([50, 40]));
console.log('random 2:', random([40, 50]));
console.log('random 3:', random([900]));
console.log('random 4:', random([, 10]));
console.log('random 5:', random([]));
