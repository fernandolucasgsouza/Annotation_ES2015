function randomInteger(min, max) {
   if (max < min) {
      const temp = max;
      max = min;
      min = temp
   }
   const value = Math.random() * ((max + 1) - min) + min;
   return Math.floor(value);
}

let option = -1;
do {
   option = randomInteger(-1, 10)
   console.log(`number equal ${option}`);
} while (option != -1);