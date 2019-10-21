// function randomInteger(min, max) {
//    if (min > max) {
//       const temp = min;
//       min = max;
//       max = temp;
//    }
//    const value = Math.random() * ((max + 1) - min) + min;
//    return Math.floor(value);
// }

// let option = 0;
// while (option != -1) {
//    option = randomInteger(-1, 10);
//    console.log(`number equal ${option}`);
// }

//---------------------------------------------------------------

let contador = 1
while (contador <= 10) {
   console.log(`contador  = ${contador}`);
   contador++;
}
//output
// contador = 1
// contador = 2
// contador = 3
// contador = 4
// contador = 5
// contador = 6
// contador = 7
// contador = 8
// contador = 9
// contador = 10